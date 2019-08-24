import React from 'react'
import ThemeContext from './context'
import { mergeTheme } from './merge_theme'

const withTheme = Component => {
  return class extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          { theme => (<Component theme={mergeTheme(theme)} { ...this.props } />) }
        </ThemeContext.Consumer>
      )
    }
  }
}

export default withTheme
