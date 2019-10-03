const { getTheme } = require('../merge_theme')
const { getDefaultTheme, setDefaultTheme } = require('../default_theme')

describe('Merge Theme', () => {

  beforeEach(() => setDefaultTheme({}))

  describe('getTheme', () => {

    it('should return the default theme, if no theme is passed in', () => {

      setDefaultTheme({ test: 'I am default theme', method: () => {}, sub: [ 4, 5, 6 ] })

      const defTheme = getTheme()
      
      expect(defTheme.test).toEqual('I am default theme')
      expect(typeof defTheme.method).toEqual('function')
      expect('sub' in defTheme).toEqual(true)

    })

    it('should merge passed in theme with default theme, when merge is true', () => {

      setDefaultTheme({ test: 'I am default theme', method: () => {} })
      
      const userTheme = { test: 'I am user theme', sub: [ 4, 5, 6 ] }
      
      const joinedTheme = getTheme(userTheme, true)
      
      expect(joinedTheme.test).toEqual('I am user theme')
      expect('sub' in joinedTheme).toEqual(true)
      expect('method' in joinedTheme).toEqual(true)
      expect(Array.isArray(joinedTheme.sub)).toEqual(true)
      expect(typeof joinedTheme.method).toEqual('function')

    })

    it('should NOT merge passed in theme with default theme, when merge is falsy', () => {

      setDefaultTheme({ test: 'I am default theme', method: () => {}, sub: [ 4, 5, 6 ] })
      
      const userTheme = { test: 'I am user theme' }
      
      const joinedTheme = getTheme(userTheme)
      
      expect(joinedTheme.test).toEqual('I am user theme')
      expect(typeof joinedTheme.method).toEqual('undefined')
      expect('sub' in joinedTheme).toEqual(false)

    })

  })

})
