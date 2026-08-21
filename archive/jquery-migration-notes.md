# Notes from Migrating Away from jQuery (Vanilla JS equivalents)

Old reference table when converting legacy jQuery snippets to modern vanilla JavaScript.

| jQuery | Modern Vanilla JS |
|---|---|
| `$('#btn')` | `document.querySelector('#btn')` |
| `$('.items')` | `document.querySelectorAll('.items')` |
| `$el.addClass('active')` | `el.classList.add('active')` |
| `$el.removeClass('active')` | `el.classList.remove('active')` |
| `$el.toggleClass('active')` | `el.classList.toggle('active')` |
| `$el.attr('data-id', 5)` | `el.setAttribute('data-id', '5')` |
| `$el.css('color', 'red')` | `el.style.color = 'red'` |
| `$el.on('click', fn)` | `el.addEventListener('click', fn)` |
| `$.ajax({ url, ... })` | `fetch(url)` |
| `$(document).ready(fn)` | `document.addEventListener('DOMContentLoaded', fn)` |
