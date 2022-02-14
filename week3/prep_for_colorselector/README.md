--- TASK DESCRIPTION ---

--- Hex to RGB ---
We want a function that receives a color in hex-format - like #c0ffee - and returns an object with the r, g, and b values (numbers) - in this case: {r:192, g:255, b:238}.

The function must receive a single string, that will always start with a # symbol, followed by six hex-digits.

The function must create three variables, r, g, and b - set their values correctly, and return them in a single object.

Modify your existing hexToRGB function, so it doesn't console.log anything, but returns an object.

Test it from the console, and make sure you still get the correct r, g and b values.

--- RGB to hex ---
We want a function that receives a color in {r,g,b} format, as an object with number values for r, g, and b - and returns a hex-color code as a single string.

The function must receive an object with three properties: r, g, and b.

The function must convert these three numbers into a string with a # followed by six hexadecimal digits, representing the three colors. Make sure that each color has two digits, so the result is always six digits. The function returns that string.

Modify your existing rgbToHex function, so it doesn't console.log anything, but returns a string.

Test it from the console, and make sure you still get the correct hex values
