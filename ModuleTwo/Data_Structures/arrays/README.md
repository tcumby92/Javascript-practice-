# Arrays (Test-Driven-Development)

## About the Sprint:

### Goals

As is, the repository is missing code for most of the functions. It's your job to fix the library by implementing the functions. In this section, the functions have to do with Arrays and their use in Javascript.

Your goal is to get all the tests to pass by implementing the missing functions. Run all the tests by opening `SpecRunner.html` in your browser.

The file `src/arrays.js` contains function definitions and is where you will add your code.

The files in the `spec` and `lib` directories contain the test suites. You don't need to modify these files.

### Technical Information for this Sprint:
* Reference the [Slides for Arrays](http://slides.com/telegraphprep/telegraphprepweek1#/3) when you get stuck.
* Arrays are great places to store lists of similar information. Arrays have numbered indices to denote the different slots you can store data in. Arrays are 0-indexed. That is, the first thing that you put in there will go in at index 0. So if you have 3 things in your array, they will be at arr[0], arr[1], and arr[2].
* Even though arrays are 0-indexed (starts counting at 0), the length property that JS gives us automatically is 1-indexed (starts counting at 1). So if we have an array with a value stored at position 0, the array would have a length of 1.
* Arrays have some methods built into them that are available for you to use.
  * push: arr.push(value); All .push() does is add a value to the end of an array. treasureChest.push('friends'); will add the string 'friends' to the end of our treasureChest array.
  * pop: arry.pop(value); The .pop() method will take the last value out of an array and give it to you.
  * unshift: The .unshift() method works just like push, but for the start of our array
  * shift: The .shift() method works just like pop, but for the start of our array





## Requirements

Following are explanations for the each of the functions you need to solve.

* [ ] **arrays.treasureChest**
      1. Create an empty array called treasureChest.
      2. Place your treasureChest after the return statement
 
* [ ] **arrays.addFurJackets**
      1. Let's make the value at position 0 'fur jackets'.
      2. Place your treasureChest after the return statement

* [ ] **arrays.overWriteValue**
      1. Console log newTreasureChest.
      2. Overwrite the value stored at position 0 of newTreasureChest to be 'ethically sourced sandals'.
      3. Place your newTreasureChest after the return statement.

* [ ] **arrays.checkLength**
      1. Return the length of treasureChest array.
 
* [ ] **arrays.addFriends**
      1. Now let's add the string 'friends' to the end of our array.
      2. Place your treasureChest after the return statement.
 
* [ ] **arrays.addThreeValues**
      1. Using an array method, add three values to the end of our treasureChest. Make up your own ideas of things that our dragon might collect in her treasureChest! Be sure to console.log your treasureChest after each one to see what the results are. We should now have at least 5 things in our treasureChest array. Mine looks like this: ['ethically sourced sandals', 'friends', 'rock climbing gear', 'JS knowledge', 'colored pants'].
      2. Place your treasureChest after the return statement.
 
* [ ] **arrays.removeLastItem**
      1. Remove the last value in the treasureChest array;
      2. Console log treasureChest. What does your array look like afterwards?
      3. return your treasureChest to the user.
 
* [ ] arrays.addFirstItem
      1. Add the value 'peg leg' to the beginning of the treasureChest array.
      2. Place your treasureChest after the return statement
 
* [ ] arrays.removeFirstItem
      1. Remove the value 'peg leg' from the beginning of the treasureChest array.
      2. Place your treasureChest after the return statement
 





## Extra Credit

Now that we've populated treasureChest, let's add that to the mysticalAnimal object we created yesterday which we've recreated in the extra credit. Following are explanations for each of the functions to solve.

* [ ] **arrays.overWriteCollects**
      1. Overwrite the value at the 'collects' property inside of mysticalAnimal with the value of our treasureChest
      2. Return mysticalAnimal.collects variable
 
* [ ] **arrays.grandCouncil**
      1. Create an empty array called grandCouncil. This is where we'll store all of the mysticalAnimal objects we'll create!
      2. return your grandCouncil variable
 
* [ ] **arrays.createGrandCouncil**
      1. Create three new objects. Each object should have the following properties:
        * TYPE: A string specifying what type of mysticalAnimal this is. Unicorns and dinosaurs and yeti and Loch Ness Monsters and polar bears and red pandas are all viable options!
        * COLLECTS: an array with a few things this animal might collect.
        * CANFLY:  a boolean (true or false- no strings around it, these are reserved keywords) representing whether this animal can fly or not.
      2. Now add these to the end of our grandCouncil array using the three methods that we've outlined in this lesson
      3. return the grandCouncil array
 
* [ ] **arrays.overWriteMysticalAnimal**
      1. Let's reassign the value stored at index 2 of our grandCouncil array with the string 'open position available'.
      2. return the grandCouncil array


## Summary

Congratulations! You've now gotten in a decent bit of practice using arrays and understanding the different ways to add and access values from them. To recap:

* Arrays: Great places to store lists of information (a list of all the stores a certain chain has open, a list of your friends, a list of numbers).
    * Arrays are numerically indexed- each position in an array is represented by a number
    * Arrays have a .push() method which adds a value onto the end of an array
    * Arrays have a .length proeprty which automatically udpates with the length of the array
    * Arrays are 0-indexed. That is, the first item you add into an array is stored at the 0th position, arr[0].
    * Values in arrays must be accessed using bracket notation
