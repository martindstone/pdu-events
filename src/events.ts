const events: Record<string, any>[] = [
  {
    name: 'event1',
    description: 'event1 description',
    event: {
      event_action: 'trigger',
      payload: {
        summary: 'event1 summary',
        source: 'event1 source',
        severity: 'critical',
        custom_details: {
          event1_custom_details: 'event1 custom details'
        }
      }
    }
  },
  {
    name: 'event2',
    description: 'event2 description',
    event: {
      event_action: 'trigger',
      payload: {
        summary: 'event2 summary',
        source: 'event2 source',
        severity: 'critical',
        custom_details: {
          event2_custom_details: 'event2 custom details'
        }
      }
    }
  },
  {
    name: 'event3',
    description: 'event3 description',
    event: {
      event_action: 'trigger',
      payload: {
        summary: 'event3 summary',
        source: 'event3 source',
        severity: 'critical',
        custom_details: {
          event3_custom_details: 'event3 custom details'
        }
      }
    }
  },
];

export default events;