import defaultTheme from './default_theme'

let MERGE_THEME = true

/**
 * Set if the default theme should be merged with the user defined theme
 * Default is to true
 * @param {boolean} value - true or false, if the default and user theme should be merged
 */
export const setThemeMerge = value => MERGE_THEME = Boolean(value)

/**
 * Deep merges an array of objects together
 * @param {array} sources - array of objects to join
 * @returns {object|array} - merged object or array
 */
export const deepMerge = (...sources) => (
  sources.reduce(
    (merged, source) =>
      source instanceof Array
        ? // Check if it's array, and join the arrays
        [ ...((merged instanceof Array && merged) || []), ...source ]
        : // Check if it's an object, and loop the properties
        source instanceof Object
          ? Object.entries(source)
            // Loop the entries of the object, and add them to the merged object
            .reduce(
              (joined, [ key, value ]) => ({
                ...joined,
                [key]:
                  // Check if the value is not a function and is an object
                  // Also check if key is in the object
                  // Set to value or deepMerge the object with the current merged object
                  (
                    typeof value !== 'function' &&
                    value instanceof Object &&
                    key in joined &&
                    // This will always return an object
                    // So if it gets called then value is not getting set
                    deepMerge(joined[key], value)
                  ) ||
                  // Otherwise just set the value
                  value
              }),
              // Pass in merged at the joined object
              merged
            )
          : // If it's not an array or object, just return the merge object
          merged,
    {}
  )
)

/**
 * Merges the default theme with the user theme base ond the MERGE_THEME variable
 * @param {Object} userTheme
 */
export default const mergeTheme = (userTheme) => (MERGE_THEME && deepMerge(defaultTheme, userTheme) || userTheme)
