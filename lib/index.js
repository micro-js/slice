/**
 * Vars
 */

var sliced = Array.prototype.slice

/**
 * Expose slice
 */

module.exports = slice['default'] = slice

/**
 * slice
 */

function slice (array, begin, end) {
  return sliced.call(array, begin, end)
}
