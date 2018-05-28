/* global it, describe */
const { assert } = require('chai');
const App = require('../flow/truncate');

describe('truncate', () => {
  it('should be a function', () => {
    assert.isFunction(App);
  });
});
