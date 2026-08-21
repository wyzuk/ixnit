// Testing a simple retry wrapper for flaky endpoints

async function fetchWithRetry(url, retries = 3) {
  for (let i = 1; i <= retries; i++) {
    try {
      console.log(`Attempt ${i}...`);
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      console.log(`Attempt ${i} failed: ${err.message}`);
      if (i === retries) throw err;
      // wait 300ms before retrying
      await new Promise(r => setTimeout(r, 300));
    }
  }
}

// test against mock api
fetchWithRetry('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log('Got data:', data.title))
  .catch(err => console.log('All failed:', err.message));
