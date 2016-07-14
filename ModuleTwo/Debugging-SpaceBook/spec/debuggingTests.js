(function() {
  'use strict';

  describe('Part I', function() {
    describe('Create New User', function() {

      it('should create a user object with 3 properties: name, email, and password', function() {
        var newUser = spacebookAPI.createNewUser('Albrey Brown', 'albrey.brown@gmail.com', 'kanyewest');
        expect(newUser['name']).to.equal('Albrey Brown');
        expect(newUser['email']).to.equal('albrey.brown@gmail.com');
        expect(newUser['password']).to.equal('kanyewest');

      });
    });

    describe('Add Location to User', function() {

      it('should add a location to the user object', function() {
         var newUser = spacebookAPI.createNewUser('Albrey Brown', 'albrey.brown@gmail.com', 'kanyewest');
         spacebookAPI.addLocation(newUser, 'Oakland, California');
         expect(newUser['location']).to.equal('Oakland, California');

      });  
    });

    describe('Search through Users', function() {

      it('should search through database for corresponding name and return an object', function() {
        var database = [];
        var names = ['Neil Armstrong', 'Kanye West', 'Bill Clinton', "Barack Obama"];
        var emails = ['astroNOT@gmail.com', 'kw@yahoo.com', 'mrClinton@usa.gov', 'lastStand@sbcglobal.net'];
        var passwords = ['nullograv', 'swish', 'stillmrprez', 'michellIsMyBestFriend<3']
        for (var i = 0; i < names.length; i++) {
          var newUser = spacebookAPI.createNewUser(names[i], emails[i], passwords[i]);
          database.push(newUser);
        };
        var searchTrue = spacebookAPI.searchForUser(database, 'Kanye West');
        var searchFalse = spacebookAPI.searchForUser(database, 'Selena Gomez');

        expect(searchTrue['name']).to.equal('Kanye West');
        expect(searchFalse).to.equal('Unfortunately the user does not have a Facebook account.');
        

      });
    });


    describe('Add a friend to your network', function() {

      it('adds a friend to a user object.', function() {
         var Albrey = spacebookAPI.createNewUser('Albrey Brown', 'albrey.brown@gmail.com', 'kanyewest');
         var Shanna = spacebookAPI.createNewUser('Shanna Sullivan', 'shanna@gmail.comm', 'bluesDancing');
         var Kanye = spacebookAPI.createNewUser('Kanye West', 'kw@yahoo.com', 'swish');
         spacebookAPI.addAFriend(Albrey, Shanna);
         spacebookAPI.addAFriend(Albrey, Kanye);


         expect(Albrey['friends'][0]).to.equal('Shanna Sullivan');
         expect(Albrey['friends'][1]).to.equal('Kanye West');
         expect(spacebookAPI.addAFriend(Albrey, Shanna)).to.equal('user already exists')
      });  
    });

    describe('Create New Event', function() {

      it('should create a new event object with 6 properties: name, location, date, startTime, endTime', function() {
        var Albrey = spacebookAPI.createNewUser('Albrey Brown', 'albrey.brown@gmail.com', 'kanyewest');
        var newEvent = spacebookAPI.createNewEvent(Albrey, 'Sock Hop', '1315 Carleton St', '1/26/2015', '9pm', 'Never');
        expect(typeof newEvent.creator).to.equal("object");
        expect(newEvent['name']).to.equal('Sock Hop');
        expect(newEvent['location']).to.equal('1315 Carleton St');
        expect(newEvent['date']).to.equal('1/26/2015');
        expect(newEvent['startTime']).to.equal('9pm');
        expect(newEvent['endTime']).to.equal('Never');
        expect(Array.isArray(Albrey.events)).to.equal(true);

      });
    });


     describe('Add attendees to your event', function() {

      it('add an attendee to your event', function() {
         var Albrey = spacebookAPI.createNewUser('Albrey Brown', 'albrey.brown@gmail.com', 'kanyewest');
         var Shanna = spacebookAPI.createNewUser('Shanna Sullivan', 'shanna@gmail.comm', 'bluesDancing');
         var SockHop = spacebookAPI.createNewEvent(Albrey, 'Sock Hop', '1315 Carleton St', '1/26/2015', '9pm', 'Never');
         spacebookAPI.addAFriend(Albrey, Shanna);
         var addedAttendee = spacebookAPI.addEventAttendee(Albrey.events[0], Shanna);

         expect(addedAttendee['attendees'][0]).to.equal('Shanna Sullivan');
         expect(Shanna.events[0].name).to.equal('Sock Hop');

         


      });
    });


  



  
  });

}());
