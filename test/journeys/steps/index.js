const {Given, Then, When} = require('cucumber');

const {enterText, openSite} = require('../support/actions');
const {expectText} = require('../support/assertions');

Given(/^I visit the site '(.+)'$/, openSite);

Then(/^I expect '(.+)' to contain '(.+)'$/, expectText);

When(/^I enter '(.+)' in the '(.+)' field$/, (value, selector) => {
  enterText(selector, value);
});
