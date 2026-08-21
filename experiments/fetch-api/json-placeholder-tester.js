// Quick scratchpad testing CRUD operations on JSONPlaceholder

const BASE = 'https://jsonplaceholder.typicode.com';

async function testApi() {
  console.log('--- 1. GET Post #1 ---');
  const post1 = await fetch(`${BASE}/posts/1`).then(r => r.json());
  console.log('Post #1 Title:', post1.title);

  console.log('\n--- 2. POST New Post ---');
  const newPost = await fetch(`${BASE}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'Ixnit Learning Experiment',
      body: 'Testing vanilla fetch post',
      userId: 1
    })
  }).then(r => r.json());
  console.log('Created Post ID:', newPost.id);

  console.log('\n--- 3. DELETE Post #1 ---');
  const deleteRes = await fetch(`${BASE}/posts/1`, { method: 'DELETE' });
  console.log('Delete status:', deleteRes.status);
}

testApi().catch(console.error);
