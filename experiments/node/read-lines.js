// Reading a file line by line without loading the whole thing into memory
const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const rl = readline.createInterface({
    input: fs.createReadStream(__filename),
    crlfDelay: Infinity
  });

  let lineNum = 0;
  for await (const line of rl) {
    lineNum++;
    console.log(`[${lineNum}]: ${line.substring(0, 40)}`);
  }
}

processLineByLine();
