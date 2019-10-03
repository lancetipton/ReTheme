import { deepMerge, isObj } from './helpers'


/**
 * Default theme
 */
let defaultTheme = {}

/**
 * Overwrites the default them with passed in theme
 * If merge is passed as true, will merge the current default theme with the passed in theme
 * @param {Object} [theme={}] - Theme to overwrite of merge with the default theme
 * @param {boolean} [merge=false] - Should the passed in theme be merged with the default theme
 *
 * @returns {void}
 */
const setDefaultTheme = (theme, merge=false) => {
  
  // Ensure the passed in theme is an object
  if(!isObj(theme))
    return console.warn(
      `setDefaultTheme method requires an theme object as the first argument. Receive: `,
      theme
    )
  
  // Check if the default theme should be merged, or overwritten
  defaultTheme = merge
    ? deepMerge(defaultTheme, theme)
    : theme
}

/**
 * Gets the default theme
 *
 * @returns {Object} - The default theme
 */
const getDefaultTheme = () => defaultTheme

export {
  getDefaultTheme,
  setDefaultTheme,
}
