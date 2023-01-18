import chai, { assert } from 'chai';
import { add, subtract, divide, multiply } from '../calc/index';

describe('#add', function () {
  it('should return 4 if passed 2+2', function () {
    return add(2, 2).then(res => assert.equal(res, 4));
  });
});

describe('#subtract', function () {
  it('should return 5 if passed 10-5', function () {
    return subtract(10, 5).then(res => assert.equal(res, 5));
  });
});

describe('#divide', function () {
  it('should return 2 if passed 100/50', function () {
    return divide(100, 50).then(res => assert.equal(res, 2));
  });
});

describe('#multiply', function () {
  it('should return 30 if passed 10*3', function () {
    return multiply(10, 3).then(res => assert.equal(res, 30));
  });
});
