// Experimenting with a custom fetch wrapper that supports:

async function fetchWithRetryAndTimeout(url, options = {}) {
  const {
    timeoutMs = 3000,
    retries = 2,
    ...fetchOptions
  } = options;

  let lastError;

  for (let attempt = 0; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      console.log(`[Attempt ${attempt + 1}] Fetching ${url}...`);
      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (err) {
      clearTimeout(timeoutId);
      lastError = err;
      console.warn(`Attempt ${attempt + 1} failed: ${err.message}`);

      if (attempt < retries) {
        // Wait 500ms before next try
        await new Promise(r => setTimeout(r, 500));
      }
    }
  }

  throw lastError;
}

// Test against JSONPlaceholder
fetchWithRetryAndTimeout('https://jsonplaceholder.typicode.com/posts/1', { timeoutMs: 4000 })
  .then(data => console.log('Successfully fetched post title:', data.title))
  .catch(err => console.error('All retries failed:', err));
