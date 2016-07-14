# Objects (Test-Driven-Development)

## About the Sprint

### Goals

As is, the repository is missing code for most of the functions. It's your job to fix the library by implementing the functions. In this section, the functions have to do with Objects and their use in Javascript.

Your goal is to get all the tests to pass by implementing the missing functions. Run all the tests by opening `SpecRunner.html` in your browser.

The file `src/objects.js` contains function definitions and is where you will add your code.

The files in the `spec` and `lib` directories contain the test suites. You don't need to modify these files.


### Technical Information for this Sprint

* Dot Notation: Recall that dot notation takes whatever is to the right of the dot, turns it into a string, and looks up that string as a property name in the object to the left of the dot.
* Bracket notation: Bracket notation is the ONLY way to look up variables or expressions when using them with objects. Recall that we can do two different things with bracket notation:
  * Evaluate a variable or expression, and look up what that variable evalutates to as a property name in the object.
  * Pass in a string (as noted by the quotes surrounding it) and look up that string as a property name in the object.
* HINT: When looking up a string, use dot notation. When looking up a variable, use bracket notation! This is all you need to know 98% of the time.
* We can create an object and give it properties all at the same time using object literal notation. An example:
```
  var goalsForTheYear = {
    cycling: '5000 miles',
    climbing: '100 days',
    giving: 'selflessly'
  };
```

## Requirements

Following are explanations for the each of the functions you need to solve.

* [ ] objects.mysticalAnimal
  	1. To start, let's create a variable, mysticalAnimal
  	and set it equal to an object literal.
  	2. Place your mystical animal after the return statement
* [ ] objects.addFirstProperty
	1. Using Dot notation, add a 'type' property to mysticalAnimal and set it equal to 'dragon'.
  	2. place your new mysticalAnimal after return statement
* [ ] objects.addSecondProperty
	1. Add a name property, and set it equal to 'Leslie'.
  	2. place your new mystical animal after the return statement
* [ ] objects.addThirdProperty
	1. Add a 'cool' property, and set it equal to true.
  	2. place your new mystical animal after the return statement
* [ ] objects.addFourthProperty
	1. Add a 'likes' property to your mysticalAnimal, and set it equal to an empty array.
  	2. Place your mysticalAnimal after the return statement.
* [ ] objects.addFifthProperty
	1. Add a property called 'bestFriend', and set it equal to Kanye West.
  	2. Place your mysticalAnimal after the return statement.
* [ ] objects.accessFirstProperty
  	1. use dot notation to return the value 'dragon' saved in your mystical animal.
* [ ] objects.accessSecondProperty
	1. use dot notation to return the value 'Leslie' saved in your mystical animal.
* [ ] objects.accessThirdProperty
  	1. use dot notation to return the boolean true saved in your mystical animal.
* [ ] objects.accessFourthProperty
	1. use dot notation to return the empty array saved in your mystical animal.
* [ ] objects.accessFifthProperty
  	1. use dot notation to return the value 'Kanye West' saved in your mystical animal.

* [ ] objects.addSixProperty

  	1. on the line ABOVE objects.addSixProperty, create a variable called newPropertyToAdd1, and set it equal to 'food'.
    2. Now, using bracket notation and newPropertyToAdd1, create a food property on our mysticalAnimal object, and set it equal to 'BBQ'. NOTE: you should not be typing the word food to accomplish this task!
    3. Return the updated object

* [ ] objects.addSeventhProperty
  	1. on the line ABOVE objects.addSeventhProperty, create a variable called newPropertyToAdd2, and set it equal to 'canFly'.
    2. Now, using bracket notation and newPropertyToAdd2, set the value of canFly to true
    3. Return the updated object

* [ ] objects.variablePracticeOne

	  1. On the line ABOVE your objects.variablePracticeOne function create a variable called thisIsAVariable. Set it equal to the string 'canFly'.

	  2. What do you expect to happen when we evaluate mysticalAnimal.thisIsAVariable the following line? Talk this through with your partner for a minute.
    
    3. Set the correctAnswer variable to the value you think mysticalAnimal.thisIsAVariable is going to evaluate to.
    
    NOTE: do not set 'correctAnswer' to mysticalAnimal.thisIsAVariable, rather to the value you and your pair **think** it will evaluate to.
    
    4. return correctAnswer;

* [ ] objects.variablePracticeTwo
    1. Use thisIsAVariable to access value assigned to the superPower property What do you get this time? Console log your statement.
    2. Set correctAnswer to what you think mysticalAnimal[thisIsAVariable] is going to evaluate to. NOTE: do not set 'correctAnswer' to the value, but to the value you think it's going to evaluate to.
    3. return correctAnswer
* [ ] objects.literalObject
  	1. Create a new variable called mysticalAnimal2, and assign to it an object literal with the following properties and values:
      type => 'Sasquatch'
      name => 'Harry'
      likes => []
      bestFriend => 'The Henderson's'
      superPower => 'super friendliness'
      food => 'tree bark'
      canFly => false
      collects => 'human families'
    2. return mysticalAnimal2





## Extra Credit

## Summary
Awesome, by now you should have a pretty good familiarity with objects, bracket and dot notation, object literals, and accessing properties of objects. Feel free to keep exploring more on your own; objects are important things to understand!


