
const { getDefaultTheme, setDefaultTheme } = require('../default_theme')

describe('Default Theme', () => {
  
  beforeEach(() => setDefaultTheme({}))

  describe('getDefaultTheme', () => {
    it('should return the default theme', () => {

      const defTheme = getDefaultTheme()

      expect(typeof defTheme).toBe("object")

    })
  })

  describe('setDefaultTheme', () => {

    it('should update the default theme with the passed in theme', () => {

      const newTheme = { foo: 'bar' }
      setDefaultTheme(newTheme)
      const defTheme = getDefaultTheme()

      expect(newTheme).toEqual(defTheme)

    })
    
    it('should merge the passed in theme when the merge param is passed as true', () => {

      setDefaultTheme({ foo: 'bar' })
      setDefaultTheme({ boo: 'baz' }, true)
      const defTheme = getDefaultTheme()

      expect(defTheme.foo).toBe('bar')
      expect(defTheme.boo).toBe('baz')
      
      setDefaultTheme({ foo: 'RAB' }, true)

      expect(defTheme.foo).toBe('RAB')
      expect(defTheme.boo).toBe('baz')

    })

  })

})
