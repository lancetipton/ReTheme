/** @module dimensions_utils */

'use strict'

import { deepMerge, isObj } from 'jsutils'


const sizeMap = { small: 340, medium: 760, large: 1080 }

export const setDimensionsMap = updatedSizes => {
  updatedSizes.map(key => {
    // Ensure key is a valid size map key
    sizeMap[key] &&
      // Ensure the updated size is a number
      typeof updatedSizes[key] === 'number' &&
      // Update the sizeMap with the updatedSize
      (sizeMap[key] = updatedSizes[key])
  })
}

export const getDimensionsMap = () => sizeMap

/**
 * Sizes for settings styles
 */
export const sizeArrays = {
  large:[ 'small', 'medium', 'large' ],
  medium: [ 'small', 'medium' ],
  small: [ 'small' ]
}


/**
 * Joins the theme styles based on the passed in size
 * @param {string} size - current view size ( small, medium, large )
 * @param {Object} theme - current theme
 *
 * @returns {Object} - joined theme sizes (small First!)
 */
export const joinThemeDimensions = (size, theme) => {

  // If theres no theme, or not valid size, just return the passed in theme
  if(!isObj(theme) || sizeArrays.large.indexOf(size) == -1 )
    return theme
  
  const { small, medium, large, ...useTheme } = theme
  
  // Check if there is a valid current size
  return !sizeArrays[size]
    // If no current size, check if there's a small theme
    ? isObj(theme.small)
      // If there is, merge with the root theme and return it ( small First! )
      ? deepMerge(useTheme, theme.small)
      // Otherwise just return the theme object
      : useTheme
    : sizeArrays[size]
      .reduce((joined, size) => {

        // Check if there is a theme option at that size
        return isObj(theme[size])
          // If theme is, merge it with the current joined theme
          ? deepMerge(joined, theme[size])
          // Otherwise just return the joined theme
          : joined

      // Pass in the original theme object to overwrite with the sizes styles
      }, useTheme)
}
