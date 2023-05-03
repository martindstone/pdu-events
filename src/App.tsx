import React, {
  useState,
} from 'react';

import {
  ChakraProvider,
  Center,
  Flex,
  Input,
  Image,
  Box,
  Select,
  Button,
  FormControl,
  Stack,
  Code,
  useToast,
} from '@chakra-ui/react'

import events from './events';

import workingPagey from './Working-Pagey.png';

function App() {
  const toast = useToast();
  const [selectedValue, setSelectedValue] = useState('');
  const [routingKey, setRoutingKey] = useState('');

  const toastWithMessage = (message: string, error = false) => {
    toast({
      title: message,
      status: error ? 'error' : 'success',
      duration: 3000,
      isClosable: true,
    })
  };

  const selectedEventContent = () => {
    const event: any = events.find((event) => event.name === selectedValue);
    return event ? event.event : {};
  }

  const selectedEventCodeBlock = () => (
    <>
      <h1>Selected Event:</h1>
      <Code colorScheme="green" whiteSpace="pre" borderRadius={5}>{JSON.stringify(selectedEventContent(), null, 2)}</Code>
    </>
  );

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  const handleRoutingKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoutingKey(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedValue) {
      toastWithMessage('Please select an event', true);
      return;
    }
    if (!routingKey) {
      toastWithMessage('Please enter a routing key', true);
      return;
    }
    const event: any = selectedEventContent();
    const postBody = {
      ...event,
      routing_key: routingKey,
    }
    console.log(JSON.stringify(postBody, null, 2));
    const result = await fetch(
      'https://events.pagerduty.com/v2/enqueue',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postBody),
      }
    )
    if (result.status !== 202) {
      const errorBody = await result.text();
      toastWithMessage(`Oops! PD said "${errorBody}"`, true);
      return;
    }
    toastWithMessage('Sent!');
  }

  return (
    <ChakraProvider>
      <div className="App">
        <Box bg="#21783e" w="100%" p={4} color="white">
          <Stack direction="row" spacing={4}>
            <Image src={workingPagey} boxSize="50px" alt="Working Pagey" />
            <Flex>
              <Center>
                <h1>Send Events</h1>
              </Center>
            </Flex>
          </Stack>
        </Box>
        <Center>
          <Box w="90%" p={4} color="black">
            <form onSubmit={handleSubmit}>
              <Stack direction="row" spacing={4}>
                <FormControl>
                  <Input placeholder="Routing Key" onChange={handleRoutingKeyChange} />
                </FormControl>
                <FormControl>
                  <Select placeholder='Choose an event' value={selectedValue} onChange={handleSelectChange}>
                    {events.map((event) => (
                      <option key={event.name} value={event.name}>{event.name} - {event.description}</option>
                    ))}
                  </Select>
                </FormControl>
                <Button type="submit">Send</Button>
              </Stack>
            </form>
          </Box>
        </Center>
      </div>
      <div>
        <Center>
          <Box w="90%" p={4} borderRadius="20">
            <Stack>
              {selectedValue && selectedEventCodeBlock()}
            </Stack>
          </Box>
        </Center>
      </div>
    </ChakraProvider>
  );
}

export default App;
