# Browser experiment

Tried messing with the DOM again.

## Things that worked
- `querySelector` and `querySelectorAll` for grabbing nodes
- Event delegation on the parent list instead of binding 50 listeners
- Template strings for creating small HTML chunks

## Things that broke
- Dynamically trying to add a class to an element before `appendChild` was called
- `innerHTML += ...` wiped out input state on existing fields (duh)

## Takeaway
Never use `innerHTML += ...` on a container that has user input. It re-parses the whole HTML string and resets everything. Create the node with `document.createElement` instead.
