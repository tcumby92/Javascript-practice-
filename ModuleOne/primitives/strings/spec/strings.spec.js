/* global strings, describe, it, expect, should */

describe('Javascript Strings', function () {
  'use strict';

  describe('stringExample', function () {
    'use strict';

    it('should be a function', function () {
      expect(stringExample).to.be.a('function');

    });

    it('return a string data type', function () {
      expect(typeof stringExample()).to.equal('string');
    });

    it('the first letter should be \'t\'', function () {
      expect(stringExample()[0]).to.equal('t');
    });

    // Add more assertions here
  });

  describe('stringIndex', function () {
    'use strict';

    it('should be a function', function () {
      expect(stringIndex).to.be.a('function');

    });

    it('should return a number', function () {
      expect(stringIndex()).to.be.a('string');
    });

    it('should return the length of a string', function () {
      expect(stringIndex()).to.equal('e');
    });

  });

  describe('stringMaker', function () {
    'use strict';
    
    var test = stringMaker();
    var testStr = 'California, rest in peace... Simutaneous release...'

    it('should be a function', function () {
      expect(stringMaker).to.be.a('function');

    });

    it('should return a string', function () {
      expect(test).to.be.a('string');
    });

    it('should return the length of a string', function () {
      expect(test.length).to.equal(51);
    });
    it('should quote the Red Hot Chili Peppers', function () {
      expect(test).to.equal(testStr);
    });

  });

  describe('stringSpecialChar', function () {
    'use strict';
    
    var test = stringSpecialChar();
    var testStr = 'can\'t stop, won\'t stop';

    it('should be a function', function () {
      expect(stringMaker).to.be.a('function');

    });

    it('should return a string', function () {
      expect(test).to.be.a('string');
    });

    it('should return the length of a string', function () {
      expect(test.length).to.equal(22);
    });
    it('should be a Jeff Chang title', function () {
      expect(test).to.equal(testStr);
    });

  });

  describe('stringMultiLine', function () {
    'use strict';
    
    var test = stringMultiLine();
    var testStr = 'string on line 1,\n string on line 2,\n string on line 3';

    it('should be a function', function () {
      expect(stringMaker).to.be.a('function');

    });

    it('should return a string', function () {
      expect(test).to.be.a('string');
    });

    it('should return the length of a string', function () {
      expect(test.length).to.equal(54);
    });
    it('should be a print on 3 separate lines', function () {
      expect(test).to.equal(testStr);
    });

  });

  describe('stringEquality', function () {
    'use strict';
    
    var test = stringEquality();
    var testStr = '35234235^%@^%@^%$@^$%@^#';

    it('should be a function', function () {
      expect(stringEquality).to.be.a('function');

    });
    
    it('should return the length of a string', function () {
      expect(test.length).to.equal(6);
    });

    it('should return a string type', function () {
      expect(test).to.equal('string');
    });

    

  });

  describe('stringCount', function () {
    'use strict';
    
    var test = stringCount;
    var testStr = 'string on line 1,\n string on line 2,\n string on line 3';

    it('should be a function', function () {
      expect(test).to.be.a('function');
    });

    it('should return a number', function () {
      expect(test()).to.be.a('number');
    });

    it('should return the length of a string', function () {
      expect(test()).to.equal(25);
    });
  });

  describe('stringHelper1', function () {
    'use strict';
    
    var test = stringHelper1;
    var testStr = 'string on line 1,\n string on line 2,\n string on line 3';

    it('should be a function', function () {
      expect(test).to.be.a('function');
    });

    it('should return a number', function () {
      expect(test()).to.be.a('string');
    });

    it('should return the length of a string', function () {
      expect(test().length).to.equal(7);
    });

    it('should cut and return \'wounded\' from the string', function () {
      expect(test()).to.equal('wounded');
    });
  });

  describe('stringHelper2', function () {
    'use strict';
    
    var test = stringHelper2;
    var testStr = 'string on line 1,\n string on line 2,\n string on line 3';

    it('should be a function', function () {
      expect(test).to.be.a('function');
    });

    it('should return a number', function () {
      expect(test()).to.be.a('string');
    });

    it('should return the length of a string', function () {
      expect(test().length).to.equal(29);
    });

    it('should return a string in all caps from the string', function () {
      expect(test().substring(9, 14)).to.equal('GOING');
    });
  });
    
});
