/* global strings, describe, it, expect, should */

describe('Javascript Numbers', function () {
  'use strict';

    describe('numberChecker', function() {

      it('should return an integer value', function() {

        expect(numberChecker()).to.be.a('number');

      });

    });

    describe('numberSum', function() {

      it('should return the sum of 4234 and 07080', function() {
        var test = numberSum;
        expect(test).to.be.a('function');
        expect(test()).to.be.a('number');
        expect(test()).to.equal(11314);

      });

    });

    describe('numberModulus', function() {

      it('should return the remainder of dividing 11314 by 37', function() {

        var test = numberModulus;
        expect(test).to.be.a('function');
        expect(test()).to.be.a('number');
        expect(test()).to.equal(29);

      });

    });

    describe('numberHelper1', function() {

      it('should convert the string \'8675309\' to a number', function() {

        var test = numberHelper1;
        expect(test).to.be.a('function');
        expect(test()).to.be.a('number');
        expect(test()).to.equal(8675309);

      });

    });

    describe('numberHelper2', function() {

      it('should convert the number 8675309 to a string', function() {

        var test = numberHelper2;

        expect(test).to.be.a('function');
        expect(test()).to.be.a('string');
        expect(test()).to.equal('8675309');

      });

    });
    
});
