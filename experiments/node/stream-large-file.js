// Testing Node.js streams to process files line-by-line without high RAM usage

const fs = require('fs');
const readline = require('readline');
const path = require('path');

async function countLinesWithStream(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log('File does not exist, creating a dummy test file...');
    fs.writeFileSync(filePath, 'Line 1\nLine 2\nLine 3\nLine 4\nLine 5\n');
  }

  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let lineCount = 0;
  for await (const line of rl) {
    lineCount++;
  }

  return lineCount;
}

const target = path.join(__dirname, 'test-stream.txt');
countLinesWithStream(target).then(count => {
  console.log(`Total lines in ${target}: ${count}`);
  // Cleanup test file
  if (fs.existsSync(target)) fs.unlinkSync(target);
});
