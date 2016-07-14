/* global strings, describe, it, expect, should */

describe('Javascript Variables Intro', function () {
  'use strict';

    describe('numbersVariables', function() {

      it('should return the difference of 4234 and 07080', function() {
        var test = numbersVariables;
        expect(test).to.be.a('function');
        expect(test()).to.be.a('number');
        expect(test()).to.equal(2846);
      });

    });

    describe('stringsVariables', function() {

      var test = stringsVariables;
      var testStr = 'California, rest in peace... Simultaneous release...';

      it('should return a string', function () {
        expect(test()).to.be.a('string');
      });

      it('should return the length of a string', function () {
        expect(test().length).to.equal(51);
      });
      it('should quote the Red Hot Chili Peppers', function () {
        expect(test()).to.equal(testStr);
      });

    });

    describe('modulusVariables', function() {

      it('should return the remainder of dividing diffOfNums by 37 then some other stuff', function() {

        var test = modulusVariables;
        expect(test).to.be.a('function');
        expect(test()).to.be.a('number');
        expect(test()).to.equal(368);

      });

    });

    describe('equal', function() {

      it('should determine if the two strings are equal', function() {

        var test = equal;

        expect(test).to.be.a('function');
        expect(test()).to.be.a('boolean');
        expect(test()).to.equal(true);

      });

    });

    describe('notEqual', function() {

      it('should evaluate the comparison to true', function() {

        var test = notEqual;

        expect(test).to.be.a('function');
        expect(test()).to.be.a('boolean');
        expect(test()).to.equal(true);

      });

    });

    describe('stillNotEqual', function() {

      it('null and undefined are not the same', function() {

        var test = stillNotEqual;

        expect(test).to.be.a('function');
        expect(test()).to.be.a('boolean');
        expect(test()).to.equal(false);

      });

    });

    describe('brackets', function() {

      it('should return the 4 character in the string', function() {

        var test = brackets;

        expect(test).to.be.a('function');
        expect(test()).to.be.a('string');
        expect(test()).to.equal('5');

      });

    });

    describe('typeOfOperator', function() {

      it('should use the typof operator properly', function() {

        var test = typeOfOperator;

        expect(test).to.be.a('function');
        expect(test()).to.be.a('string');
        expect(test()).to.equal('object');

      });

    });

    describe('assignment', function() {

      it('should evaluate to return \'Michael\'', function() {

        var test = assignment;

        expect(test).to.be.a('function');
        expect(test()).to.be.a('string');
        expect(test()).to.equal('Michael');

      });

    });
    
});
