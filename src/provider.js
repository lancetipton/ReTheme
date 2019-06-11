import React, { Component } from 'react'
import ThemeContext from './context'

export default class ReThemeProvider extends Component {

  render() {
    const { children, value } = this.props
    return (
      <ThemeContext.Provider value={ value || {} }>
        { children }
      </ThemeContext.Provider>
    )
  }
}
