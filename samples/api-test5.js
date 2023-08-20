export const options = {
    thresholds: {
      http_req_failed: ['rate<0.01'], // http errors should be less than 1%
      http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
    },
    scenarios: {
      my_scenario1: {
        executor: 'constant-arrival-rate',
        duration: '30s', // total duration
        preAllocatedVUs: 50, // to allocate runtime resources
  
        rate: 50, // number of constant iterations given `timeUnit`
        timeUnit: '1s',
      },
    },
  };
  