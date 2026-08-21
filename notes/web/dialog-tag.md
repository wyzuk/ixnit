# HTML <dialog> tag

The browser has a native dialog element now.

```html
<dialog id="myDialog">
  <p>Hello world</p>
  <button id="closeBtn">Close</button>
</dialog>
```

```javascript
const dialog = document.getElementById('myDialog');

// Open as modal (with dark backdrop + focus trap + Escape key handling):
dialog.showModal();

// Close:
dialog.close();
```

Style the backdrop:
```css
dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
}
```
