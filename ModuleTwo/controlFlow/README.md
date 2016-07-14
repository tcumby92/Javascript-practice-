# ControlFlow (Test-Driven-Development)

## About the Sprint

### Goals

As is, the repository is missing code for most of the functions. It's your job to fix the library by implementing the functions. In this section, the functions have to do with Objects and their use in Javascript.

Your goal is to get all the tests to pass by implementing the missing functions. Run all the tests by opening `SpecRunner.html` in your browser.

The file `src/controlFlow.js` contains function definitions and is where you will add your code.

The files in the `spec` and `lib` directories contain the test suites. You don't need to modify these files.


### Technical Information for this Sprint

* [Here](http://slides.com/telegraphprep/telegraphprepweek1#/4) are the slides for the control-flow module.

* Whenever you see the word "iterate" it almost always means you'll need a for loop.

* You can iterate through Arrays using a **for loop** while Objects will need a **for in loop**

* Whenever you see the word "condition" it almost always means you'll need an if/else statement.

* You do not need an else to go along with your if statement.

* **else if** statement adds on another conditional between the if/else.

## Requirements

Following are explanations for the each of the functions you need to solve:

* [ ] controlFlow.duplicateArray

  	controlFlow.duplicateArray iterates through our originalArray and transfers the values to our newArray. Follow the directions below to complete the challenge.

    1. create a for loop below to go iterate through the originalArray created on line 9
    2. push each element inside of orignalArray to newArray.
    3. return newArray

* [ ] controlFlow.addValues

	   controlFlow.addValues iterates through our originalArray, adds 100 to each, and adds them to our newArray. Follow the directions below to complete the challenge

       1. create a for loop below to iterate through the originalArray created on line 9
       2. create a variable called valuePlusOneHundred and assign it to the current value + 100 
       3. without using push, add each element to newArray.
       4. return newArray

* [ ] controlFlow.multiplyValues

	   controlFlow.multiplyValues iterates through our originalArray, multiplies each value by 2, and adds them to our newArray. Follow the directions below to complete the challenge.

       1. create a for loop below and iterate through the originalArray created on line 9
       2. create a variable, multipliedByTwo, and assign it to the the current value multiplied by 2. 
       3. push each value multiplied by 2 to newArray
       4. return newArray.

* [ ] controlFlow.replaceValues

	   controlFlow.replaceValues iterates through the copyOfOriginalArray and REPLACES each value with "element has been replaced".

	   1. create a for loop and iterate trhough copyOfOriginalArray
       	   2. inside the for loop assign each element to the string "element has been replaced"
  	   3. return copyofOriginalArray

* [ ] controlFlow.objectKeysToArray

      controlFlow.objectKeysToArray iterates through originalObject and adds each key to our newArray.

      	1. create a for in loop below to go through the originalObject
      	2. add each key to the newArray
      	3. return newArray

* [ ] controlFlow.objectValuesToArray

      controlFlow.objectValuesToArray iterates through  originalObject and adds each value to our newArray.

          1. create a for in loop below to go through the originalObject
  	  2. add each value to the newArray
          3. return newArray

* [ ] controlFlow.duplicateObject

  	  controlFlow.duplicate objects iterates through the originalObject adds each key/value pair to our newObject.

  	  1. iterate through originalObject.
  	  2. add each key AND its corresponding value to newObject.
      3. return newObject.

* [ ] controlFlow.isLargerThan100
	  
	  Uses a conditional to check whether the 3rd element in the original array is larger than 100.

	  1. create an if statement and have check it whether the 3rd element in originalArray is larger than 100.
      2. if the statement evaluates true, assign state to true.
      3. else, assign state to false.
      4. return the state.

* [ ] controlFlow.isEven 
	  
	  Uses an if statement to check whether the 3rd element in originalArray is even.

      1. create an if statement and have it check whether the third element in originalArray is even.
      TIP: go online and check out the '%' operator which should help you create your condition.
  	  2. in the if block assign state to true.
  	  3. else, assign state to false.
  	  4. return state.

* [ ] controlFlow.checkCity

	    controlFlow.checkCity uses a conditional to check whether the city in originalObject is equal to Oakland.

		1. create an if statement and have it check whether the city in originalObject is equal to Oakland.

	    2. if the condition passes, return 'I Love Oakland!'.
    	3. else, return "which city am I in?".


* [ ] controlFlow.isThisAnObject
		
		controlFlow.isThisAnObject checks to see whether originalObject is an object.

		1. create a conditional that checks to see whether originalObject is an object.
        	2. if it is an object, return 'of course this is an object!'
        	3. else, return "error, this is not an object".


* [ ] controlFlow.loopThroughIsEven 
	
		controlFlow.loopThroughIsEven loops through originalArray and checks to see whether any of the items are even.

		1. Loop through originalArray.
  		2. check to see if each item is even.
  		3. if an item is not even, change state to false.
  		4. return state.

* [ ] controlFlow.containsExcitement 
	
		controlFlow.loopThroughIsEven loops through originalObject and checks to see if ANY of the properties have a corresponding value of 10.

		1. loop through the originalObject.
  		2. check to see if ANY of the properties have a corresponding value of 10.
  		3. if the condition passes, return the corresponding key.
		4. you do not need an else statement.

* [ ] controlFlow.containsAndAdd
	
	   controlFlow.containsAndAdd loops through originalObject and checks to see if any of the values start with the letter 'O'.

	   1. loop through the originalObject.
 	   2. check to see if ANY of the properties have a corresponding value starting with the letter 'O'. (look this up, strings are indexed as well).
	   3. if the condition passes: 
      	  	3a. push the KEY to the results array.
      		4a. push the corresponding value to the results array.
 	   4. return the result array.



## Summary

Congratulations, you have completed the control-flow sprint and now you should have a solid understanding of if/else statements, and for loops! Move on to the Functions module!


