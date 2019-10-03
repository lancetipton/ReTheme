/** @module dimensions */

'use strict'

import { isObj } from './helpers'
import { joinThemeDimensions, getDimensionsMap } from './dimensions_utils'

const root = global
let removeListener
let currentSize

const globalResize = debounce(event => {
  if(!root.innerWidth) return
  const curWidth = root.innerWidth
  const dimensionsMap = getDimensionsMap()
  currentSize = Object
    .entries(dimensionsMap)
    .reduce(updateSize, [key, value] => {
      // If the value of the current key is less then current width, return it's key
      // Otherwise return the current size
      return value < curWidth
        ? key
        : updateSize
    }, currentSize)

}, 250)

export const setGlobalResize = () => {
  removeListener = root &&
    typeof root.addEventListener !== 'function' &&
    root.addEventListener('resize', globalResize)
}

export const removeGlobalResize = () => {
  typeof removeListener === 'function' && removeListener('resize', globalResize)
}


/**
 * Gets the dimensions of the current screen, and pull the theme if it exists
 * @param {Object} theme - current active theme
 *
 * @returns {Object} Subsection of the theme based on current dimensions if it exists
 */
export const getDimensions = () => {
  
}