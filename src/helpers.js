/** @module helpers */

'use strict'

/**
 * Checks if data is an object and not an array.
 * @function
 * @param {Object} obj - data to check
 * @returns {boolean}
 */
export const isObj = obj => Boolean(typeof obj === 'object' && !Array.isArray(obj))

/**
 * Deep merges an array of objects together
 * @param {array} sources - array of objects to join
 *
 * @returns {object|array} - merged object or array
 */
export const deepMerge = (...sources) => (
  sources.reduce(
    (merged, source) =>
      source instanceof Array

          // Check if it's array, and join the arrays
        ? [ ...((merged instanceof Array && merged) || []), ...source ]

          // Check if it's an object, and loop the properties
        : source instanceof Object

            // Loop the entries of the object, and add them to the merged object
          ? Object
            .entries(source)
            .reduce((joined, [ key, value ]) => ({

                // Add the joined object data
                ...joined,

                // Check if the value is not a function and is an object
                // Also check if key is in the object
                // Set to value or deepMerge the object with the current merged object
                [key]: ( typeof value !== 'function' &&
                      value instanceof Object &&
                      key in joined &&
                      // This will always return an object
                      // So if it gets called then value is not getting set
                      deepMerge(joined[key], value)

                      // Otherwise just set the value
                  ) || value

                  // Pass in merged as the joined object
              }), merged )

            // If it's not an array or object, just return the merge object
          : merged,

    // Check if the first source is and array and use that as the initial merge object
    // Otherwise use an object
    Array.isArray(sources[0]) && [] || {})
)

/**
 * Limits the amount of calls to a function over time
 * @example
 * debounce(myFunction)
 * // Calls myFunction after the default 250 ms
 * @example
 * debounce(myFunction, 500)
 * // Calls myFunction after 500 ms
 * @example
 * debounce(myFunction, 500, true)
 * // Calls myFunction immediately
 * @function
 * @param {function} func - function to call
 * @param {number} wait - how long to wait between function calls
 * @param {boolean} immediate - should call immediately
 * @return { void }
 */
export const debounce = (func, wait = 250, immediate = false) => {
  let timeout
  return (...args) => {
    if (!isFunc(func)) return null

    const context = this
    const later = () => {
      timeout = null
      !immediate && func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow)
      return isFunc(func) && func.apply(context, args)
  }
}