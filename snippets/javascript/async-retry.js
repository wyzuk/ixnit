/**
 * Exponential Backoff Retry Utility
 * 
 * Automatically retries an async operation (like a flaky API call)
 * with exponential jitter to avoid hammering servers.
 */

async function retryWithBackoff(fn, options = {}) {
  const {
    maxRetries = 3,
    initialDelayMs = 300,
    backoffFactor = 2,
    onRetry = null
  } = options;

  let attempt = 0;
  let delay = initialDelayMs;

  while (attempt < maxRetries) {
    try {
      return await fn(attempt);
    } catch (err) {
      attempt++;
      if (attempt >= maxRetries) {
        throw new Error(`Operation failed after ${maxRetries} attempts. Last error: ${err.message}`);
      }

      // Add a slight jitter (random +/- 20%) to avoid thundering herd problem
      const jitter = delay * (0.8 + Math.random() * 0.4);

      if (typeof onRetry === 'function') {
        onRetry(attempt, err, jitter);
      }

      await new Promise(resolve => setTimeout(resolve, jitter));
      delay *= backoffFactor;
    }
  }
}

// Example test:
if (require.main === module) {
  let counter = 0;
  const flakyService = async () => {
    counter++;
    if (counter < 3) {
      throw new Error('503 Service Unavailable');
    }
    return { status: 200, data: 'Success on attempt ' + counter };
  };

  retryWithBackoff(flakyService, {
    maxRetries: 4,
    initialDelayMs: 100,
    onRetry: (attempt, err, nextDelay) => {
      console.log(`Attempt ${attempt} failed (${err.message}). Retrying in ${Math.round(nextDelay)}ms...`);
    }
  }).then(res => console.log('Final Result:', res));
}

module.exports = { retryWithBackoff };
