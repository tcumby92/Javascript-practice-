/* global strings, describe, it, expect, should */

describe('Javascript Booleans', function () {
  'use strict';

    describe('booleanChecker', function() {

      it('should return a boolean value', function() {

        expect(booleanChecker).to.be.a('function');
        expect(booleanChecker()).to.be.a('boolean');

      });

    });

    describe('numberEquality', function() {

      it('should evaluate the statement to return true', function() {
        var test = numberEquality;
        expect(test).to.be.a('function');
        expect(test()).to.be.a('boolean');
        expect(test()).to.equal(true);

      });

    });

    describe('stringEquality', function() {

      it('should change the strings so the statement returns true', function() {

        var test = stringEquality;
        expect(test).to.be.a('function');
        expect(test()).to.be.a('boolean');
        expect(test()).to.equal(true);

      });

    });

    describe('typeChecker', function() {

      it('should correct the type so the statement returns true', function() {

       var test = typeChecker;
        expect(test).to.be.a('function');
        expect(test()).to.be.a('boolean');
        expect(test()).to.equal(true);

      });

    });

    describe('booleanFalsy', function() {

      it('should change the if condition so the else statement executes', function() {

        var test = booleanFalsy;
        var testStr = 'Here I am, send me an angel!';

        expect(test).to.be.a('function');
        expect(test()).to.be.a('string');
        expect(test()).to.equal(testStr);

      });

    });
    
    describe('booleanTruthy', function() {

      it('should use \'negation\' to make the if statement execute', function() {

        var test = booleanTruthy;
        var testStr = 'This is not so null afterall';

        expect(test).to.be.a('function');
        expect(test()).to.be.a('string');
        expect(test()).to.equal(testStr);

      });

    });
    
});
