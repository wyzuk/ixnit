# RegEx quick notes

Symbols:
- `^` = start of string
- `$` = end of string
- `\d` = digit [0-9]
- `\w` = word char [a-zA-Z0-9_]
- `\s` = whitespace
- `+` = 1 or more
- `*` = 0 or more
- `?` = 0 or 1

Extract matching groups in JS:
```javascript
const str = "2026-08-21";
const match = str.match(/^(\d{4})-(\d{2})-(\d{2})$/);
if (match) {
  const [full, year, month, day] = match;
  console.log(year, month, day);
}
```
