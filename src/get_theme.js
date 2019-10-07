import { getDefaultTheme } from './default_theme'
import { deepMerge, isObj } from 'jsutils'
import { getDimensions } from './dimensions'

/**
 * Merges the default theme with the user theme base ond the MERGE_THEME variable
 * @param {Object} userTheme - user defined theme object
 * @param {boolean} merge - Should merge with default theme
 * @param {boolean} useDimensions - Should subset theme that matches current dimensions
 *
 * @returns {object|array} - theme object
 */
export const getTheme = (userTheme, merge, useDimensions) => {

  // Get the default theme
  const defTheme = getDefaultTheme()

  // Get the correct theme object, and merge with default if merge argument is true
  const mergedTheme = !isObj(userTheme)
    ? defTheme
    : merge
      ? deepMerge(getDefaultTheme(), userTheme)
      : userTheme

  // Get subset theme that matches current dimensions is useDimensions is true
  return useDimensions
    ? getDimensions(mergedTheme)
    : mergedTheme
}

