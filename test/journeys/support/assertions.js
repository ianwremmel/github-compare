const {assert} = require('chai');

/**
 * @param {string} selector
 * @param {string} value
 */
function expectText(selector, value) {
  const text = browser.getText(selector);
  assert.equal(text, value, `Expected ${selector} to contain ${value}`);
}
exports.expectText = expectText;
