// Zero-dependency CLI argument parser
// Converts ['--name=alice', '-v', '--port', '8080', 'file.txt'] into clean object.

function parseArgs(rawArgs = process.argv.slice(2)) {
  const flags = {};
  const positional = [];

  for (let i = 0; i < rawArgs.length; i++) {
    const arg = rawArgs[i];

    if (arg.startsWith('--')) {
      const keyVal = arg.slice(2);
      if (keyVal.includes('=')) {
        const [k, v] = keyVal.split('=');
        flags[k] = v;
      } else {
        const next = rawArgs[i + 1];
        if (next && !next.startsWith('-')) {
          flags[keyVal] = next;
          i++;
        } else {
          flags[keyVal] = true;
        }
      }
    } else if (arg.startsWith('-')) {
      flags[arg.slice(1)] = true;
    } else {
      positional.push(arg);
    }
  }

  return { flags, positional };
}

// Test
const parsed = parseArgs(['--env=production', '--port', '3000', '-v', 'index.js']);
console.log('Parsed CLI options:');
console.log(JSON.stringify(parsed, null, 2));
