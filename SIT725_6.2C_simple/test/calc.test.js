const { expect } = require('chai');
const { addNumbers } = require('../utils/addNumbers');

describe('addNumbers()', function () {
  it('should add two numbers correctly', function () {
    expect(addNumbers(2, 3)).to.equal(5);
  });

  it('should work with negative numbers', function () {
    expect(addNumbers(-2, 5)).to.equal(3);
  });

  it('should throw error for invalid input', function () {
    expect(() => addNumbers(2, 'a')).to.throw('inputs must be numbers');
  });
});
