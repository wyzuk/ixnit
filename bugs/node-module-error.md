# Cannot use import statement outside a module

### 1. What happened
Node crashed with: `SyntaxError: Cannot use import statement outside a module` when running `import fs from 'fs'`.

### 2. What I initially thought
Thought my Node version was too old to support ES modules.

### 3. What actually caused it
Node defaults to CommonJS (`require`) unless explicitly told otherwise.

### 4. The fix
Either:
- Add `"type": "module"` to `package.json`, OR
- Rename the file extension to `.mjs` (`script.mjs`), OR
- Just stick to `const fs = require('fs')` for quick vanilla scripts.
