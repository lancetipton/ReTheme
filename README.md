# Re-Theme
Simple React ant React Native Theme builder / switcher

## ReThemeProvider
 * Import the `ReThemeProvider` into your `App.js` or whatever the entry point is for the app
 * Wrap your app with the `ReThemeProvider`, and pass in your theme
 * Theme will be merged with the default theme

### Example 
```js
import { ReThemeProvider } from 're-theme'

const myCustomTheme = {
  // theme styles go here
}

export const App from Component {
  
  render(){
    return  (
      <ReThemeProvider value={ myCustomTheme } >
        <App />
      </ReThemeProvider>
    )
  }

}
```

## withTheme
  * Import the `withTheme` method into your components
  * Wrap your components in the `withTheme` method
  * `theme` object will now be added to components props

### Example 
```js
import { withTheme } from 're-theme'

const Header from Component {
  
  render(){
    const { theme } = this.props
    
    return  (
      <h1 style={ theme.headingOne } >
        How to train your dragon
      </h1>
    )
  }

}

export withTheme(Header)
```