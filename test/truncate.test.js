/* global it, describe */
const { assert } = require('chai');
const App = require('../flow/truncate');
const { shortProject, longProject } = require('../src/mocks/projects');

describe('truncate', () => {
  it('should be a function', () => {
    assert.isFunction(App);
  });

  it('should return the original text input if the word length is less than or equal to 50', () => {
    const text = shortProject.description;
    assert.strictEqual(App(text), text);
  });

  it('should return truncated text if the word length is more than 50', () => {
    const longTextTruncated =
      'MyGov is an application created in React Native that allows a user to track current Congressional bills and new laws. Using the Sunlight Congress API, the application brings in data on bills and laws including title, date introduced, date of last action, sponsor, current progress (in House Committee, passed by...';
    const text = longProject.description;
    assert.strictEqual(App(text), longTextTruncated);
  });
});
