import React from 'react'
import { ThemeContext } from './context'
import { getTheme } from './get_theme'

export const withTheme = Component => {
  return props => {
    return (
      <ThemeContext.Consumer>
        {(theme, merge, useDimensions) => (
          <Component
            theme={getTheme(theme, merge, useDimensions)}
            { ...props }
          />
        )}
      </ThemeContext.Consumer>
    )
  }
}
