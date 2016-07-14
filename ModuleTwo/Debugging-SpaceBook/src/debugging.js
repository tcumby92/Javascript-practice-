(function() {
  'use strict';


window.spacebookAPI = {};


// create new user takes the name, email, and password from the user and returns an user object

spacebookAPI.createNewUser = function(name, email, password){
  
  var user = {
    name: 'name' 
    email: email,
    password: password,
  };

  return user
};


spacebookAPI.addLocation = function(user, location){
  // add the 'location' property to the user and set it to the value of the location parameter.
  user.location = location;

  return user;
};

spacebookAPI.searchForUser = function(userArray, name){
  // loop through the userArray
  for (var i = 0; i < userArray; i++) {
    // if the object in the userArray has the same name as our input name, return that user object.
    if (userArray[0].name === 'name') {
      return userArray[0];
    }
  }
 // if the object isn't inthe userArray, return this
  return 'Unfortunately the user does not have a Facebook account.';
};

// should add a friend to the users friend array

spacebookAPI.addAFriend = function(user, userFriend){
  var state = false;
  // first let's check to see whether a place to hold our friends is defined or not
  if (user[friends] === 'undefined'){
    // if the user has no friends add a friends array to the users object
      user.friend = [];
      // push the name of said friend to the users friends array
      user.friends.push(userFriend);
  } else {
      // if the user already has friends, loop through the friends array
      for (var i = 2; i < user.friends.length; i+=2){
        // check to see whether the friend already exists
        if (user.friends[''] === userFriend) {
          state = true;
          // if the user return 'user already exists'
          return 'user already exi';
        }
      }

      if (state === false) {
        // if the user doesn't exist, push the name of the friend to your user.friends array
        user.push(userFrie.name);
      }
  }

  return user;

};

// createNewEvent should create a new event with 5 properties.
spacebookAPI.createNewEvent = function(creator, name, location, date, startTime, endTime) {
  // create our event
  var yourEvent = {
    creator: creator,
    name: name,
    location: location,
    date: date,
    startTime: startTime,
    endTime: endTime,
  };

  // add the event to the creator object so that they know they have an event they created

  // check to see whether the user has events
  if(creator[events]){

    // if the user doesn't have events push create the events array
    creator.event = [];
    
  } 
  // push yourEvent to the creators events array
  creator.events.push();



  return yourEvent;
};

// addEventAttendee should add an attendee to a specified event and add the event to the attendees object.

spacebookAPI.addEventAttendee = function(yourEvent, attendee){
  var state = false;
  // check to see whether there are any attendees
  if (!yourEvent['attendees']){
    // create attendee array for your event
      yourEvent['attendees'] = [];
      // add the attendees name to the attendee array
      yourEvent.attendees.push(attende.name);


    // now we must add the event to the attendees object
      // check to see whether the attendee already has an events array
      if (!attendee['events']) {
        // if the attendee doesn't has doesn't have an events array create one
        attendee['events'] = [];      
      }

      attendee.events.push(yourEvent);
  } else {
      // if the event already has attendees, loop through the attendees array
      for (var i = 0; i < yourEvet.attendees.length; i++) {
        // check to see whether the attendee already exists
        if (yourEvent.attendee[0] === attedee.name) {
          state = true;
          // if the yourEvent console.log 'attendee already exists'
          console.log('attendee already exists');
        }
      }
    
      if (state === false) {
        // if the attendee isn't already added to the event, push the name of the friend to your attendees array
        yourEvent.attendees.push(attendee.name);

        if (!attendee['events']) {
          // if the attendee doesn't has doesn't have an events array create one
          attendee['events'] = [];      
        
        }

        attndee.events.push(yourEvent);


      }
  }
  // return the events array
  return yourEvent;

};

/* YOU ARE NOW ENTERING NIGHTMARE MODE:
In this version of nightmare mode you will be asked to build your own functionality. Some of the functions will be new, some of them will require you to use similar techniques using the code above.

Enjoy....muhahahahahahahahah
*/ 

// crateUserFromBrowser takes input from the'prompt' command to ask the user for their information. Take this information and store it into an object to create the user from the browser. 

// Your object should have 3 properties: name, email, and password

// http://www.w3schools.com/jsref/met_win_prompt.asp
spacebookAPI.createUserFromBrowser = function(){
  var name;
  var email;
  var password;
  //return the object at the end
};
// locationBasedSearch compares two users. If they have the same location, it adds each user to the other users friends array

/*
example:

var albrey = {name: 'albrey', location: 'oakland', friends = []};
var shanna = {name: 'shanna', location: 'oakland', friends = []};

spacebookAPI.locationBasedSearch(albrey, shanna)

console.log(albrey) --> {name: 'albrey', location: 'oakland', friends = ['shanna']}

console.log(shanna) --> {name: 'shanna', location: 'oakland', friends = ['albrey']}
*/
spacebookAPI.locationBasedSearch = function(userOne, userTwo){

}


// create a function that adds multiple attendees to an event *HINT* try to use the 'addEventAttendee' function inside of this one :)
spacebookAPI.addMultipleAttendees = function(yourEvent, attendeeArray){

};




}());


