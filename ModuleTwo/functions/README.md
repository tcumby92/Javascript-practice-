# Functions (Test-Driven-Development)

## About the Sprint

### Goals

As is, the repository is missing code for most of the functions. It's your job to fix the library by implementing the functions. In this section, the functions have to do with Objects and their use in Javascript.

Your goal is to get all the tests to pass by implementing the missing functions. Run all the tests by opening `SpecRunner.html` in your browser.

The file `src/functions.js` contains function definitions and is where you will add your code.

The files in the `spec` and `lib` directories contain the test suites. You don't need to modify these files.


### Technical Information for this Sprint
* [Here](http://slides.com/telegraphprep/telegraphprepweek1#/5) are the slides for the functions module.

* Anatomy of a function:
	
	```
	Each part of a function is numbered below. The explanations 

	                 1       2    3
	var addNums = function(num1, num2){ 
 	 	     4	
    	return num1 + num2;
    };
         8         5	    6  7
    var three = addTwoNums(1, 2)

	```
	1. Invoking the **anonymous function keyword** allows us to create a function.
	2. 'num1' is the first **parameter** that the function takes.
	3. 'num2' is the second **parameter** that the function takes.
	4. The **return** statement is what the function evaluates to when invoked.
	5. addTwoNums() **invokes** the function, meaning we're putting a new **instance** of addTwoNums to use.
	6. 1 is the first **argument** that we're putting into the function.
  7. 2 is the first **argument** that we're putting into the function.
  8. 'five' evaluates to 3, because the function **returns** 1 + 2.

* Each new function invocation is a new instance of the function.
* When **creating** a function, the variables inside of the parentheses are named **parameters**. 
* When **invoking** a function, the variables inside of the paretheses are named **arguments**.
* Every function needs a **return** statement. The return statement should return the **expecte output** of the function.

## Requirements

What follows are explanations for each of the functions you need to solve:

## functions.subtract

Create a function named functions.subtract that takes two parameters and returns the difference.

## functions.modulo

Create a function named functions.modulo that takes two numbers as parameters. It returns the remainder of the first number divided by the second.

If you're not familiar with the modulo operator, check out the docs [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

## functions.multiply

Create a function named functions.multiply. It takes two numbers as parameters and returns their product

## functions.imHere

Create a function named functions.imHere that returns a **new array** containing the names of each student inside of the 'students' array.

## functions.placesIveBeen

Create a function named functions.placesIveBeen that returns a **new array** containing the values inside of the oaklandStreets object.

## functions.findStudent

Create a function named functions.findStudent that takes an array of student names, and a string as a parameter. If the input string matches any of the names in the array, return that student's name. If not, return 'student is absent'.

## functions.dudeWheresMyCar

Create a function named functions.dudeWheresMyCar that returns the location of my car. The function should take in a name and a location, and it should return a string that uses the arguments to create the following string "[name] left the car in [location]".

## functions.invokeDudeWheresMyCar

Inside of functions.invokeDudeWheresMyCar, invoke and return functions.dudeWheresMyCar function. Pass in Shanna and California as the arguments.

## functions.invokeModulo

Inside of functions.invokeModulo invoke the functions.modulo function so that it returns the remainder when 15 is divided by 4.

## functions.invokeMultiply

Inside of functions.invokeMultiply, invoke the functions.multiply function so that it returns the value when multiplying 25 and 43.

## functions.invokeSubtract

Inside of functions.invokeSubtract invoke the functions.subtract function so that it returns the value when subtracting 72 from 238


## Summary
Awesome, by now you should have a good understanding of functions, how to build them, and how to use them! Functions are one of the concepts beginners get most tripped up on, so we encourage you to go back through the [slides](http://slides.com/telegraphprep/telegraphprepweek1#/5) before moving on to the next lesson.


