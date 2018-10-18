/**
 * @param {string} selector
 * @param {string} value
 */
function enterText(selector, value) {
  browser.setValue(selector, value);
}
exports.enterText = enterText;

/**
 * @param {string} url
 */
function openSite(url) {
  browser.url(`${browser.options.baseUrl}${url}`);
}
exports.openSite = openSite;
