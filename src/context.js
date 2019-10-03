import React from 'react'
import { getDefaultTheme } from './default_theme'

/**
 * Creates the initial theme context
 */
export const ThemeContext = React.createContext(getDefaultTheme())
