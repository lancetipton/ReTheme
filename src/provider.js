import React, { Component } from 'react'
import { ThemeContext } from './context'

const ReThemeData = {}

/**
 *
 * @param {Object} props - Theme provider props
 * @param {Object|Array} props.children - Child components to wrap the with theme provider
 * @param {Object} props.theme - User defined theme
 * @param {boolean} props.merge - Should merge user theme with default theme
 * @param {boolean} props.dimensions - Should use small, medium, large theme dimensions
 *
 * @returns {Component|Object} - ThemeContext.Provider - Provides the theme to the Context consumer
 */
export default class ReThemeProvider extends Component {

  render() {

    const { children, theme, merge, dimensions } = this.props
    
    if(!ReThemeData.theme || ReThemeData.theme !== theme){
      ReThemeData.theme = theme
      ReThemeData.merge = Boolean(merge || (!merge && merge !== false)) || false,
      ReThemeData.dimensions = Boolean(dimensions !== false && dimensions !== null)
    }

    return (
      <ThemeContext.Provider value={ ReThemeData } >
        { children }
      </ThemeContext.Provider>
    )
  }
}