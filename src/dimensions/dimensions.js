/** @module dimensions */

'use strict'

import { isObj } from 'jsutils'
import { joinThemeDimensions, getDimensionsMap } from './dimensions_utils'

let currentSize

/**
 * Gets the dimensions of the current screen, and pull the theme if it exists
 * @param {Object} theme - current active theme
 *
 * @returns {Object} Subsection of the theme based on current dimensions if it exists
 */
export const getDimensions = theme => {

  if(!window.innerWidth) return theme

  const curWidth = window.innerWidth
  const dimensionsMap = getDimensionsMap()

  const currentSize = Object
    .entries(dimensionsMap)
    .reduce((updateSize, [ key, value ]) => {

      // If the cur width if more then or equal, just return the updates size
      if(curWidth <= value) return updateSize
      else if(value <= curWidth){
        if(updateSize){
          if(value > dimensionsMap[updateSize]){
            updateSize = key
          }
        }
        else updateSize = key
      }

      return updateSize

    // Default to small ( mobile first )
    }, 'small')

  return joinThemeDimensions(currentSize, theme)

}