import React from 'react'
import { ThemeContext } from './context'

/**
 *
 * @param {Object} props - Theme provider props
 * @param {Object|Array} props.children - Child components to wrap the with theme provider
 * @param {Object} props.theme - User defined theme
 * @param {boolean} props.merge - Should merge user theme with default theme
 * @param {boolean} props.dimensions - Should use mobile, tablet, desktop theme dimensions
 *
 * @returns {Component|Object} - ThemeContext.Provider - Provides the theme to the Context consumer
 */
export const ReThemeProvider = props => {

  const { children, theme, merge, dimensions } = props

  return (
    <ThemeContext.Provider
      theme={ theme }
      merge={ Boolean(merge || (!merge && merge !== false)) || false }
      useDimensions={ Boolean(dimensions !== false && dimensions !== null) }
    >
      { children }
    </ThemeContext.Provider>
  )
}
