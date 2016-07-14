(function() {
  'use strict';

  describe('Part I', function() {

    describe('mysticalAnimal', function() {

      it('should return a mystical animal object literal', function() {
        expect(typeof objects.mysticalAnimal()).to.equal("object");
      });
    });

    describe('AddFirstProperty', function() {
      it('should add a type property with the value of dragon', function() {
        expect(objects.addFirstProperty()['type']).to.equal('dragon');
      });
    });

    describe('AddSecondProperty', function() {
      it('should add a name property with the value of Leslie', function() {
        expect(objects.addSecondProperty()['name']).to.equal('Leslie');
      });
    });

     describe('AddThirdProperty', function() {
      it('should add a cool property with the value set to true', function() {
        expect(objects.addThirdProperty()['cool']).to.equal(true);
      });
    });

    describe('AddFourthProperty', function() {
      it('should add a likes property with the value of an empty array', function() {
        expect(Array.isArray(objects.addFourthProperty()['likes'])).to.equal(true);
      });
    });


    describe('AddFifthProperty', function() {
      it('should add a bestFriend property with the value set to Kanye West', function() {
        expect(objects.addFifthProperty()['bestFriend']).to.equal('Kanye West');
      });
    });


    describe('accessFirstProperty', function() {
      it('should be able to pull out the type property of mysticalAnimal', function() {
        expect(objects.accessFirstProperty()).to.equal('dragon');
      });
    });

    describe('accessSecondProperty', function() {
      it('should be able to pull out the name property of mysticalAnimal', function() {
        expect(objects.accessSecondProperty()).to.equal('Leslie');
      });
    });

    describe('accessThirdProperty', function() {
      it('should be able to pull out the cool property of mysticalAnimal', function() {
        expect(objects.accessThirdProperty()).to.equal(true);
      });
    });

    describe('accessFourthProperty', function() {
      it('should be able to pull out the likes property of mysticalAnimal', function() {
        expect(Array.isArray(objects.accessFourthProperty())).to.equal(true);
      });
    });

    describe('accessFifthProperty', function() {
      it('should be able to pull out the bestFriend property of mysticalAnimal', function() {
        expect(objects.accessFifthProperty()).to.equal('Kanye West');
      });
    });

    describe('AddSixthProperty', function() {
      it('should add a food property with the value of bbq using bracket notation', function() {
        expect(objects.addSixthProperty()['food']).to.equal('BBQ');
      });
    });

    describe('AddSeventhProperty', function() {
      it('should add a property canFly with the value of true using bracket notation', function() {
        expect(objects.addSeventhProperty()['canFly']).to.equal(true)
      });
    });


    describe('variablePracticeOne', function() {
      it('should return the evaluated value of mysticalAnimal.thisIsAVariable', function() {
        expect(objects.variablePracticeOne()).to.equal(undefined);
      });
    });

    describe('variablePracticeTwo', function() {
      it('should return the evaluated value of mysticalAnimal[thisIsAVariable]', function() {
        expect(objects.variablePracticeTwo()).to.equal(true);
      });
    });

    describe('literalObject', function() {

      it('should return the mysticalAnimal2 object literal', function() {
        expect(typeof objects.literalObject()).to.equal('object');
        expect(objects.literalObject().type).to.equal('Sasquatch');
        expect(objects.literalObject().name).to.equal('Harry');
        expect(Array.isArray(objects.literalObject().likes)).to.equal(true);
        expect(objects.literalObject().bestFriend).to.equal('The Henderson\'s');
        expect(objects.literalObject().superPower).to.equal('super friendliness');
        expect(objects.literalObject().canFly).to.equal(false);
        expect(objects.literalObject().collects).to.equal('human families');
        expect(objects.literalObject().food).to.equal('tree bark');
      });
    });
  
  });

}());
