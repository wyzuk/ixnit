// Comparing error handling patterns in Fetch

// Pattern 1: Helper function that returns [data, error] (Go-style tuple)
async function safeAsync(promise) {
  try {
    const data = await promise;
    return [data, null];
  } catch (err) {
    return [null, err];
  }
}

// Usage test
async function run() {
  const [data, err] = await safeAsync(
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json();
    })
  );

  if (err) {
    console.error('Failed to fetch:', err.message);
    return;
  }

  console.log('Go-style fetch data title:', data.title);
}

run();
