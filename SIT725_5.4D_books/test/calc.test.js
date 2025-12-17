const { expect } = require('chai');
const { calcTotal } = require('../utils/calcTotal');

describe('calcTotal()', function () {
  it('should calculate total correctly for valid items', function () {
    const items = [
      { price: 10, qty: 2 },   // 20
      { price: 5.5, qty: 1 }   // 5.5
    ];
    expect(calcTotal(items)).to.equal(25.5);
  });

  it('should return 0 for empty cart', function () {
    expect(calcTotal([])).to.equal(0);
  });

  it('should throw error if items is not an array', function () {
    expect(() => calcTotal('not-array')).to.throw('items must be an array');
  });

  it('should throw error for negative price', function () {
    expect(() => calcTotal([{ price: -1, qty: 1 }])).to.throw('invalid price');
  });
});
