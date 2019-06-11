import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeContext from './context'

export default class ReThemeProvider extends Component {

  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const { children, value } = this.props
    return (
      <ThemeContext.Provider value={ value || {} }>
        { children }
      </ThemeContext.Provider>
    )
  }
}
