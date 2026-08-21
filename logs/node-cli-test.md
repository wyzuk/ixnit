# Mini Node CLI experiment

Tested writing a CLI script with zero npm dependencies.

## What worked
- `process.argv.slice(2)` is easy enough for simple flags like `--port 3000` or `-v`
- `process.stdin.on('data', ...)` for piping in input (`cat file.txt | node script.js`)
- `fs.readFileSync(0, 'utf-8')` reads all of stdin synchronously (useful for quick pipe tools)

## What was annoying
- Parsing combined flags like `-rf` or `--name=val` requires custom string splitting.
- For anything bigger than 2 flags, a real parser is better. But for simple scripts, vanilla `process.argv` is fine.
