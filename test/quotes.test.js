/* global it, describe */
const { assert } = require('chai');
const App = require('../flow/quotes');

describe('quotes', () => {
  it('should be an array', () => {
    assert.strictEqual(Array.isArray(App), true);
  });

  it('should contain four items', () => {
    assert.strictEqual(App.length, 4);
  });

  it('each item should contain a body and author property', () => {
    for (let i = 0; i < App.length; i++) {
      const elem = App[i];
      assert.isDefined(elem.author, true);
      assert.isDefined(elem.body, true);
    }
  });
});
