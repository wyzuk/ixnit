// Simple sleep/delay utility
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function demo() {
  console.log('Start');
  await sleep(500);
  console.log('After 500ms');
}

demo();
