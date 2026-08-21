# Flexbox gotchas

1. `flex-direction: column` swaps the axes!
   - `justify-content` is now vertical.
   - `align-items` is now horizontal.

2. `margin: auto` in flexbox eats all available space.
   - Put `margin-left: auto` on the last item in a navbar to push it all the way to the right.

3. Flex items won't shrink below their content size unless you set `min-width: 0` on the flex child. (Spent an hour on this when text overflowed a container).
