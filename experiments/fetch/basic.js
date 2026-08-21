// Testing native fetch with error handling
// Remember: fetch does NOT reject on HTTP 404 or 500!

async function testFetch() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();
    console.log('Todo item:', data);
  } catch (err) {
    console.error('Fetch failed:', err.message);
  }
}

testFetch();
