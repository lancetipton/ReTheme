import React, { Component } from 'react'
import ThemeContext from './context'

export default class ReThemeProvider extends Component {

  render() {
    const { children, value, merge } = this.props
    const doMerge = Boolean(merge || (!merge && merge !== false)) || false

    return (
      <ThemeContext.Provider value={ value || {} } merge={ doMerge }>
        { children }
      </ThemeContext.Provider>
    )
  }
}
