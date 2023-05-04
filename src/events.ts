const events: Record<string, any>[] = [
  {
    "name": "splunk_noise",
    "description": "A noisy Splunk event",
    "event": {
      "event_action": "trigger",
      "payload": {
        "summary": "This is noise",
        "source": "Splunk",
        "severity": "info"
      }
    }
  },
  {
    "name": "datadog_noise",
    "description": "A noisy Datadog event",
    "event": {
      "event_action": "trigger",
      "payload": {
        "summary": "Alarm noise",
        "source": "Datadog",
        "severity": "warning"
      }
    }
  },
  {
    "name": "datadog_problem",
    "description": "A real Datadog problem",
    "event": {
      "event_action": "trigger",
      "payload": {
        "summary": "Uh oh, problem!",
        "source": "Datadog",
        "severity": "error"
      }
    }
  },
  {
    "name": "nr_problem",
    "description": "A problem reported by New Relic",
    "event": {
      "event_action": "trigger",
      "payload": {
        "summary": "Another Problem",
        "source": "NewRelic",
        "severity": "critical"
      }
    }
  },
  {
    "name": "vague",
    "description": "A vague description",
    "event": {
      "event_action": "trigger",
      "payload": {
        "summary": "Vague Description",
        "source": "NewRelic",
        "severity": "critical",
        "component": "CPU metric",
        "custom_details": {
          "Usage": "bad"
        }
      }
    }
  }
];

export default events;