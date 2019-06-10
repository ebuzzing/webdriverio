"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getErrorFromFailedTest = exports.tellReporter = exports.isMochaEachHooks = exports.isEmpty = exports.getTestStatus = void 0;

require("source-map-support/register");

var _process = _interopRequireDefault(require("process"));

var _compoundError = _interopRequireDefault(require("./compoundError"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get allure test status by TestStat object
 * @param test {Object} - TestStat object
 * @param config {Object} - wdio config object
 * @private
 */
const getTestStatus = (test, config) => {
  if (config.framework === 'jasmine') {
    return _constants.testStatuses.FAILED;
  }

  if (test.error.name) {
    return test.error.name === 'AssertionError' ? _constants.testStatuses.FAILED : _constants.testStatuses.BROKEN;
  }

  const stackTrace = test.error.stack.trim();
  return stackTrace.startsWith('AssertionError') ? _constants.testStatuses.FAILED : _constants.testStatuses.BROKEN;
};
/**
 * Check is object is empty
 * @param object {Object}
 * @private
 */


exports.getTestStatus = getTestStatus;

const isEmpty = object => !object || Object.keys(object).length === 0;
/**
 * Is mocha beforeEach / afterEach hook
 * @param title {String} - hook title
 * @returns {boolean}
 * @private
 */


exports.isEmpty = isEmpty;

const isMochaEachHooks = title => _constants.mochaEachHooks.some(hook => title.includes(hook));
/**
 * Call reporter
 * @param {string} event  - event name
 * @param {Object} msg - event payload
 * @private
 */


exports.isMochaEachHooks = isMochaEachHooks;

const tellReporter = (event, msg = {}) => {
  _process.default.emit(event, msg);
};
/**
 * Properly format error from different test runners
 * @param {Object} test - TestStat object
 * @returns {Object} - error object
 * @private
 */


exports.tellReporter = tellReporter;

const getErrorFromFailedTest = test => {
  if (test.errors && Array.isArray(test.errors)) {
    return test.errors.length === 1 ? test.errors[0] : new _compoundError.default(...test.errors);
  }

  return test.error;
};

exports.getErrorFromFailedTest = getErrorFromFailedTest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJnZXRUZXN0U3RhdHVzIiwidGVzdCIsImNvbmZpZyIsImZyYW1ld29yayIsInRlc3RTdGF0dXNlcyIsIkZBSUxFRCIsImVycm9yIiwibmFtZSIsIkJST0tFTiIsInN0YWNrVHJhY2UiLCJzdGFjayIsInRyaW0iLCJzdGFydHNXaXRoIiwiaXNFbXB0eSIsIm9iamVjdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJpc01vY2hhRWFjaEhvb2tzIiwidGl0bGUiLCJtb2NoYUVhY2hIb29rcyIsInNvbWUiLCJob29rIiwiaW5jbHVkZXMiLCJ0ZWxsUmVwb3J0ZXIiLCJldmVudCIsIm1zZyIsInByb2Nlc3MiLCJlbWl0IiwiZ2V0RXJyb3JGcm9tRmFpbGVkVGVzdCIsImVycm9ycyIsIkFycmF5IiwiaXNBcnJheSIsIkNvbXBvdW5kRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7OztBQU1PLE1BQU1BLGFBQWEsR0FBRyxDQUFDQyxJQUFELEVBQU9DLE1BQVAsS0FBa0I7QUFDM0MsTUFBSUEsTUFBTSxDQUFDQyxTQUFQLEtBQXFCLFNBQXpCLEVBQW9DO0FBQ2hDLFdBQU9DLHdCQUFhQyxNQUFwQjtBQUNIOztBQUVELE1BQUlKLElBQUksQ0FBQ0ssS0FBTCxDQUFXQyxJQUFmLEVBQXFCO0FBQ2pCLFdBQU9OLElBQUksQ0FBQ0ssS0FBTCxDQUFXQyxJQUFYLEtBQW9CLGdCQUFwQixHQUF1Q0gsd0JBQWFDLE1BQXBELEdBQTZERCx3QkFBYUksTUFBakY7QUFDSDs7QUFFRCxRQUFNQyxVQUFVLEdBQUdSLElBQUksQ0FBQ0ssS0FBTCxDQUFXSSxLQUFYLENBQWlCQyxJQUFqQixFQUFuQjtBQUNBLFNBQU9GLFVBQVUsQ0FBQ0csVUFBWCxDQUFzQixnQkFBdEIsSUFBMENSLHdCQUFhQyxNQUF2RCxHQUFnRUQsd0JBQWFJLE1BQXBGO0FBRUgsQ0FaTTtBQWNQOzs7Ozs7Ozs7QUFLTyxNQUFNSyxPQUFPLEdBQUlDLE1BQUQsSUFBWSxDQUFDQSxNQUFELElBQVdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixNQUFaLEVBQW9CRyxNQUFwQixLQUErQixDQUF0RTtBQUVQOzs7Ozs7Ozs7O0FBTU8sTUFBTUMsZ0JBQWdCLEdBQUdDLEtBQUssSUFBSUMsMEJBQWVDLElBQWYsQ0FBb0JDLElBQUksSUFBSUgsS0FBSyxDQUFDSSxRQUFOLENBQWVELElBQWYsQ0FBNUIsQ0FBbEM7QUFFUDs7Ozs7Ozs7OztBQU1PLE1BQU1FLFlBQVksR0FBRyxDQUFDQyxLQUFELEVBQVFDLEdBQUcsR0FBRyxFQUFkLEtBQXFCO0FBQzdDQyxtQkFBUUMsSUFBUixDQUFhSCxLQUFiLEVBQW9CQyxHQUFwQjtBQUNILENBRk07QUFJUDs7Ozs7Ozs7OztBQU1PLE1BQU1HLHNCQUFzQixHQUFJNUIsSUFBRCxJQUFVO0FBQzVDLE1BQUlBLElBQUksQ0FBQzZCLE1BQUwsSUFBZUMsS0FBSyxDQUFDQyxPQUFOLENBQWMvQixJQUFJLENBQUM2QixNQUFuQixDQUFuQixFQUErQztBQUMzQyxXQUFPN0IsSUFBSSxDQUFDNkIsTUFBTCxDQUFZYixNQUFaLEtBQXVCLENBQXZCLEdBQTJCaEIsSUFBSSxDQUFDNkIsTUFBTCxDQUFZLENBQVosQ0FBM0IsR0FBNEMsSUFBSUcsc0JBQUosQ0FBa0IsR0FBR2hDLElBQUksQ0FBQzZCLE1BQTFCLENBQW5EO0FBQ0g7O0FBQ0QsU0FBTzdCLElBQUksQ0FBQ0ssS0FBWjtBQUNILENBTE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvY2VzcyBmcm9tICdwcm9jZXNzJ1xuaW1wb3J0IENvbXBvdW5kRXJyb3IgZnJvbSAnLi9jb21wb3VuZEVycm9yJ1xuaW1wb3J0IHsgdGVzdFN0YXR1c2VzLCBtb2NoYUVhY2hIb29rcyB9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG4vKipcbiAqIEdldCBhbGx1cmUgdGVzdCBzdGF0dXMgYnkgVGVzdFN0YXQgb2JqZWN0XG4gKiBAcGFyYW0gdGVzdCB7T2JqZWN0fSAtIFRlc3RTdGF0IG9iamVjdFxuICogQHBhcmFtIGNvbmZpZyB7T2JqZWN0fSAtIHdkaW8gY29uZmlnIG9iamVjdFxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFRlc3RTdGF0dXMgPSAodGVzdCwgY29uZmlnKSA9PiB7XG4gICAgaWYgKGNvbmZpZy5mcmFtZXdvcmsgPT09ICdqYXNtaW5lJykge1xuICAgICAgICByZXR1cm4gdGVzdFN0YXR1c2VzLkZBSUxFRFxuICAgIH1cblxuICAgIGlmICh0ZXN0LmVycm9yLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRlc3QuZXJyb3IubmFtZSA9PT0gJ0Fzc2VydGlvbkVycm9yJyA/IHRlc3RTdGF0dXNlcy5GQUlMRUQgOiB0ZXN0U3RhdHVzZXMuQlJPS0VOXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhY2tUcmFjZSA9IHRlc3QuZXJyb3Iuc3RhY2sudHJpbSgpXG4gICAgcmV0dXJuIHN0YWNrVHJhY2Uuc3RhcnRzV2l0aCgnQXNzZXJ0aW9uRXJyb3InKSA/IHRlc3RTdGF0dXNlcy5GQUlMRUQgOiB0ZXN0U3RhdHVzZXMuQlJPS0VOXG5cbn1cblxuLyoqXG4gKiBDaGVjayBpcyBvYmplY3QgaXMgZW1wdHlcbiAqIEBwYXJhbSBvYmplY3Qge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKG9iamVjdCkgPT4gIW9iamVjdCB8fCBPYmplY3Qua2V5cyhvYmplY3QpLmxlbmd0aCA9PT0gMFxuXG4vKipcbiAqIElzIG1vY2hhIGJlZm9yZUVhY2ggLyBhZnRlckVhY2ggaG9va1xuICogQHBhcmFtIHRpdGxlIHtTdHJpbmd9IC0gaG9vayB0aXRsZVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgaXNNb2NoYUVhY2hIb29rcyA9IHRpdGxlID0+IG1vY2hhRWFjaEhvb2tzLnNvbWUoaG9vayA9PiB0aXRsZS5pbmNsdWRlcyhob29rKSlcblxuLyoqXG4gKiBDYWxsIHJlcG9ydGVyXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgIC0gZXZlbnQgbmFtZVxuICogQHBhcmFtIHtPYmplY3R9IG1zZyAtIGV2ZW50IHBheWxvYWRcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCB0ZWxsUmVwb3J0ZXIgPSAoZXZlbnQsIG1zZyA9IHt9KSA9PiB7XG4gICAgcHJvY2Vzcy5lbWl0KGV2ZW50LCBtc2cpXG59XG5cbi8qKlxuICogUHJvcGVybHkgZm9ybWF0IGVycm9yIGZyb20gZGlmZmVyZW50IHRlc3QgcnVubmVyc1xuICogQHBhcmFtIHtPYmplY3R9IHRlc3QgLSBUZXN0U3RhdCBvYmplY3RcbiAqIEByZXR1cm5zIHtPYmplY3R9IC0gZXJyb3Igb2JqZWN0XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgZ2V0RXJyb3JGcm9tRmFpbGVkVGVzdCA9ICh0ZXN0KSA9PiB7XG4gICAgaWYgKHRlc3QuZXJyb3JzICYmIEFycmF5LmlzQXJyYXkodGVzdC5lcnJvcnMpKSB7XG4gICAgICAgIHJldHVybiB0ZXN0LmVycm9ycy5sZW5ndGggPT09IDEgPyB0ZXN0LmVycm9yc1swXSA6IG5ldyBDb21wb3VuZEVycm9yKC4uLnRlc3QuZXJyb3JzKVxuICAgIH1cbiAgICByZXR1cm4gdGVzdC5lcnJvclxufVxuIl19