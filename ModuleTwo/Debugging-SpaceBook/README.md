# Debugging (Test-Driven-Development)

## Git Workflow

**Fork the Repository**

1. On Github's website, navigate to [week-2-debugging](https://github.com/TelegraphPrep/week-2-debugging)
2. Click the "Fork" button near the top right part of the screen.
3. In the popup box, select your Github profile to copy the repository from the TelegraphPrep Github profile to your profile.

**Clone the Repository**

4. Once the repository is on your Github profile, navigate to your fork of that repository on Github's website.
5. Click the "Copy to clipboard" button to copy the Git link for the repository.
6. In your terminal, navigate to the folder you want to copy the repository into.
7. In your terminal, type git clone [pasteTheLinkYouJustCopiedHere] then hit enter to clone the repository from Github to your local machine.

**Open the Repository on Your Local Machine**

In your terminal, navigate to the repository.
View the location of that repository in your finder by typing open . into the terminal.
To open the repository in Sublime, drag the repository folder over the Sublime icon in your Dock (at the bottom of the screen). All of the files within the repository should now be viewable in the sidebar in Sublime.

**More information on [Git Workflow](https://github.com/TelegraphPrep/PrepPlus-Wiki/blob/master/gitWorkflow.md)

## Pair Programming Dynamics
See the following document on [Pairing Dynamics Workflow](https://github.com/TelegraphPrep/PrepPlus-Wiki)

## About the sprint

Debugging is the process of locating and fixing bugs in your code. To debug a program is to start with a problem, isolate the source of the problem, and then fix it. Sounds doable right? However, when you have a huge code base or when you are unsure on how to properly debug, this can possibly cause a serious headache. Today you will get practice with debugging by fixing all of the errors for our Spacebook API. Spacebook is a new awesome social media app to connect with your space friends. The app have a ton of features that are important to the app but they dont seem to quite work as we wish.  This is where you come in to save the day and get move our app towards launch day!!!
Use the debugging best practices that are covered in the lecture and reference the [debugging guidelines](https://github.com/TelegraphPrep/PrepPlus-Student-Wiki/blob/master/Debugging_Best_Practices.md) document.


## File Structure

You will be working in the ```debugging.js``` file.

  ```
  ├── README.md                  - defines the instructions for the sprint
  ├── SpecRunner.html            - open this file to view the test in the browser
  ├── lib                        - ignore this folder and its content
  │   ├── cardboard.js
  │   ├── chai.js
  │   ├── css
  │   │   └── mocha.css
  │   ├── mocha.js
  │   ├── sinon-chai.js
  │   ├── sinon.js
  │   └── testSupport.js
  ├── spec                       - all of the test are defined in this folder
  │   └── debuggingTests.js
  └── src
      └── debugging.js           - this is the file you will be working on
  ```

### Goals

As is, the repository is missing code or have bugs for most of the functions. It's your job to fix the library by implementing them and/or fixing them. In this section, the functions have to do with collections (objects or arrays), functions, control flow and conditionals.

The files in the `spec` directory contain the test suites. Your goal is to get all the tests to pass by fixing the bugs in each function. Run all the tests by opening `SpecRunner.html` in your browser.

The file `src/debugging.js` contains function definitions that need to debugged. Pass each of the tests by having the functions return the correct value that is expected:


## Requirements

The following are explanations for each of the functions you need to solve.

### spacebookAPI.createNewUser
1. takes the name, email, and password from the user and returns an user object

### addLocation
1. add the 'location' property to the user object and set it to the value of the location parameter.

### searchForUser
1. takes in two parameters, userArray and name. The userArray is an array of users and name is the name of a userArray

2. you must iterate through the userArray to check if the input ```name``` is 
      in the userArray. If the name is in the userArray, then return the user object

3. Otherwise return 'Unfortunately the user does not have a Facebook account.'

### addAFriend
1. takes two parameters, user and userFriend and adds userFriend to the user's friends array.
### createNewEvent
1. creates a new event object
2. takes five parameters that correspond to five properties to be added to the event object
3. creates or updates the creator's events array with the new event object
### addEventAttendee
1. takes to parameters, yourEvent and attendee. 
2. adds attendee to attendees array
3. adds yourEvent to attendees object
 
 
## NightmareMode:
### createNewUserFromBrowser
  1. takes input from the'prompt' command to ask the user for their information. 
  2. Take this information and store it into an object to create the user from the browser. 
  3. Your object should have 3 properties: name, email, and password
### locationBasedSearch
  1. Compare two users' locations. 
  2. If locations are the same, add each user to the other user's friends array.
### addMultipleAttendees
  1. Use 'addEventAttendee' to add multiple attendees to an event.


## Summary
Great job working through these debugging challenges! You dove into legacy code and tightened up this app to be ready for launch. You also practiced using debugging best practices that will serve you well as you continue mastering javascript. 


