/** @module dimensions_utils */

'use strict'

import { isObj, deepMerge } from './helpers'


const sizeMap = { mobile: 340, tablet: 760, desktop: 1080 },

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
  desktop:[ 'mobile', 'tablet', 'desktop' ],
  tablet: [ 'mobile', 'tablet' ],
  mobile: [ 'mobile' ]
}



/**
 * Joins the theme styles based on the passed in size
 * @param {string} size - current view size ( mobile, tablet, desktop )
 * @param {Object} theme - current theme
 *
 * @returns {Object} - joined theme sizes (Mobile First!)
 */
export const joinThemeDimensions = (size, theme) => {

  // If theres no theme, or not valid size, just return the passed in theme
  if(!isObj(theme) || sizeArrays.desktop.indexOf(size) == -1 )
    return theme
  
  // Check if there is a valid current size
  return !sizeArrays[size]
    // If no current size, check if there's a mobile theme
    ? isObj(theme.mobile)
      // If there is, merge with the root theme and return it ( Mobile First! )
      ? deepMerge(theme, theme.mobile)
      // Otherwise just return the theme object
      : theme
    : sizeArrays[size]
      .reduce((joined, size) => {

        // Check if there is a theme option at that size
        return isObj(theme[size])
          // If theme is, merge it with the current joined theme
          ? deepMerge(joined, theme[size])
          // Otherwise just return the joined theme
          : joined

      // Pass in the original theme object to overwrite with the sizes styles
      }, theme)
}
