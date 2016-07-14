(function() {
  'use strict';

  describe('Array Tests', function() {

    describe('Create TreasureChest', function() {

      it('it should return a variable called treasureChest', function() {
        expect(Array.isArray(arrays.treasureChest())).to.equal(true);
      });
    });
    
    describe('Add "Fur Jackets"', function() {

      it('it should have the value fur jackets at index 0', function() {
        expect(arrays.addFurJackets()[0]).to.equal('fur jackets');      
      });
    });

    describe('Overwrite Value', function() {

      it('it should overwrite the value stored at index 0', function() {
        expect(arrays.overWriteValue()[0]).to.equal('ethically sourced sandals');      
      });
    });
    describe('Check Length', function() {

     it('it should return the length of the treasureChest array', function() {
       expect(arrays.checkLength()).to.equal(1);      
     });
    });

    describe('Add Friends', function() {

      it('it should have the value friends at index 1', function() {
        expect(arrays.addFriends()[1]).to.equal('friends');      
      });
    });
    describe('Add Three Values', function() {

      it('it should have 5 items in treasureChest', function() {
        expect(arrays.addThreeValues()).to.have.length(5);      
      });
    });

    describe('Remove Last Item', function() {

      it('it should have 4 items in treasureChest', function() {
        expect(arrays.removeLastItem()).to.have.length(4);      
      });
    });

    describe('Add "Peg Leg"', function() {

      it('it should have the value peg leg at index 0', function() {
        expect(arrays.addFirstItem()[0]).to.equal('peg leg');      
      });
    });

    describe('Remove First Item', function() {

      it('it should have 4 items in treasureChest', function() {
        expect(arrays.removeFirstItem()).to.have.length(4);    
      });
    });

    describe('Overwrite Collects Array', function() {

      it('it should overwrite the collects property inside of mysticalAnimal', function() {
        expect(arrays.overWriteCollects()).to.have.length(4);      
      });
    });

    describe('Create Grand Council', function() {

      it('it should return an empty array', function() {
        expect(Array.isArray(arrays.grandCouncil())).to.equal(true);      
      });
    });

    describe('Make Grand Council', function() {

      it('it should return an array with 3 objects', function() {
        expect(arrays.createGrandCouncil().length).to.equal(3);      
      });

    });

     describe('OverWrite Second Value', function() {

      it('it should return the collects array with the second value reassigned to open position available', function() {
        expect(arrays.overWriteMysticalAnimal()[2]).to.equal('open position available');      
      });

    });


  });

}());
