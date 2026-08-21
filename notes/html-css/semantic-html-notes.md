# Semantic HTML & Accessibility Notes

Building accessible DOM structures instead of a soup of nested `<div>`s.

## Structural Elements
* `<main>`: The primary content of the document (only one per page).
* `<header>` / `<footer>`: Navigational or introductory content.
* `<nav>`: Set of primary navigation links.
* `<article>`: Self-contained independent content (blog post, product card, comment).
* `<section>`: Thematic grouping of content, typically with a heading.
* `<aside>`: Tangentially related content (sidebar, author bio, related links).

---

## Buttons vs Links (A11y Rule)
* **`<button>`**: Triggers an **action** on the page (opens a modal, submits form, toggles theme).
* **`<a>` (anchor)**: **Navigates** to a URL or internal anchor (`#section`).

> Never do `<div onclick="...">`. It lacks keyboard focus (`Tab`), Enter/Space key triggers, and screen reader announcements.
