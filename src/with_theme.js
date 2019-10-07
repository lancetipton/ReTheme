import React from 'react'
import { ThemeContext } from './context'
import { getTheme } from './get_theme'

const withTheme = Component => {
  return class extends React.Component {
    
    render() {
      return (
        <ThemeContext.Consumer>
          {value => {

            const { theme, merge, dimensions } = value
            
            return (
              <Component
                theme={ getTheme(theme, merge, dimensions) }
                { ...this.props }
              />
            )
            
          }}
        </ThemeContext.Consumer>
      )
    }
  }
}

export default withTheme