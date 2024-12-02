# Portfolio 3: Multiples

### this sketch is an interactive piece, showing how arrays can be used to draw multiple shapes at once easily. Pressing any key will add a new ball to the screen. The user is encouraged to spam the keyboard to show that even though this method of drawing many shapes is easy, it is incredibly effective, and the limit will only be the processing power of the computer being used.

> The background gets redrawn each time the draw function loops, to rid of the old instances of the ball(s) being drawn.
>
> The array that was made has values for a ball pushed into it whenever a key is pressed. Each ball has 4 values/variables unique to it: the x coordinate, the y coordinate, the size of the ball, and it's rgba colour.
>
> A for loop is used to redraw all the current balls that exist. Within this loop, any value can be changed/called and kept, and will check/update the value for every ball when updating the screen.
>
> Each time the for loop passes, the i is incremented by 4, to move onto the first value for the next ball in the array. (unless the end of the array is reached, at which point all current balls have been drawn and the balls will be checked and updated again.)
>
> A key press input from the user is used to push new values into the array, for a new ball to be added to the screen. (Mouse click worked but was slower and therefore doesn't show the effectiveness of the sketch as well as the key press does, where you can press many keys in quicker succession.)

> This method of having multiple values in the array for each ball was definetly effective, and it works well. However it feels sort of clunky and means a few changes would need to be made to the code if a new unique-to-each-ball variable/aspect was added. I believe using a ball class, or a shape/object class, could allow for easier tweaking and would be a simpler way of adding many shapes to a sketch.