/* global it, describe */
const { assert } = require('chai');
const App = require('../flow/truncate');
const { shortProject } = require('../src/mocks/projects');

describe('truncate', () => {
  it('should be a function', () => {
    assert.isFunction(App);
  });

  it('should return the original text input if the word length is less than 50', () => {
    const text = shortProject.description;
    assert.strictEqual(App(text), text);
  });
});
