# Regular Expressions (RegEx) Quick Reference

## Character Classes
* `. `: Any character except newline
* `\d`: Any digit (`[0-9]`)
* `\D`: Any non-digit
* `\w`: Word character (`[a-zA-Z0-9_]`)
* `\W`: Non-word character
* `\s`: Whitespace (space, tab, newline)
* `\S`: Non-whitespace

## Quantifiers
* `*`: 0 or more (greedy)
* `*?`: 0 or more (lazy)
* `+`: 1 or more
* `?`: 0 or 1 (optional)
* `{n}`: Exactly $n$ times
* `{n,m}`: Between $n$ and $m$ times

## Anchors & Boundaries
* `^`: Start of string / line
* `$`: End of string / line
* `\b`: Word boundary

## Common Useful Patterns
* Email: `^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$`
* URL: `^https?:\/\/[\w\.-]+\.[a-z]{2,}(\/.*)?$`
* Hex color: `^#(?:[0-9a-fA-F]{3}){1,2}$`
* Slug (kebab-case): `^[a-z0-9]+(?:-[a-z0-9]+)*$`
