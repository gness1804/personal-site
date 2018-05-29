/* global it, describe */
const { assert } = require('chai');
const App = require('../flow/projects');

describe('projects', () => {
  it('should be an array', () => {
    assert.strictEqual(Array.isArray(App), true);
  });

  it('should contain four items', () => {
    assert.strictEqual(App.length, 4);
  });

  it('should have objects with numerical ids', () => {
    for (let i = 0; i < App.length; i++) {
      const elem = App[i];
      assert.strictEqual(typeof elem.id, 'number');
    }
  });
});
