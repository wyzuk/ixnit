// Testing AbortController to cancel a request if it takes too long

async function fetchWithTimeout(url, timeoutMs = 2000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    return await res.json();
  } catch (err) {
    clearTimeout(timer);
    if (err.name === 'AbortError') {
      console.log('Request was aborted due to timeout!');
    } else {
      console.log('Other error:', err.message);
    }
  }
}

fetchWithTimeout('https://jsonplaceholder.typicode.com/comments?postId=1', 5000)
  .then(data => console.log('Fetched comments count:', data?.length));
