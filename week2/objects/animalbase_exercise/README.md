These are the two versions of animal base

animals_basic is the original, using just the JSON objects

animals_objects is the new and improved, but incomplete.
Your job is to add code to animals_objects, so it works.
The HTML is complete. You only need to work with the JS.

1. Create an object prototype - name it Animal.
2. In the prepareObjects function's forEach:
   1. Create a new object (named animal) from the Animal prototype
   2. Find the values for name, desc, and type from the jsonObject (it is recommended to create temporary variables for them)
   3. Set the properties in the new object to those values
   4. Add the new object to the array of animals
