const { deepMerge } = require('../helpers')

describe('Merge Theme', () => {

  describe('deepMerge', () => {

    it('should merge objects together into new object', () => {

      const obj1 = { test: 'I am a obj 1', sub: [ 1, 2, 3 ] }
      const obj2 = { test: 'I am a obj 2', sub: [ 4, 5, 6 ] }
      const obj3 = deepMerge(obj1, obj2)

      expect(obj3).not.toEqual(obj1)
      expect(obj3).not.toEqual(obj2)
      expect(obj3.test).toEqual('I am a obj 2')
      expect(obj3.sub.indexOf(1)).toEqual(0)
      expect(obj3.sub.indexOf(4)).toEqual(3)

    })

    it('should handel non-objects passed in as a param', () => {

      const obj1 = { test: 'I am a obj 1', sub: [ 1, 2, 3 ] }
      const obj2 = { test: 'I am a obj 2', sub: [ 4, 5, 6 ] }
      const obj3 = deepMerge(obj1, "I am not an object", obj2)

      expect(obj3).not.toEqual(obj1)
      expect(obj3).not.toEqual(obj2)
      expect(obj3.test).toEqual('I am a obj 2')
      expect(obj3.sub.indexOf(1)).toEqual(0)
      expect(obj3.sub.indexOf(4)).toEqual(3)

    })

    it('should merge passed in arrays', () => {

      const arr1 = [ 1, 2, 3 ]
      const arr2 = [ 4, 5, 6 ]
      const arr3 = deepMerge(arr1, arr2)

      expect(arr3.indexOf(1)).toEqual(0)
      expect(arr3.indexOf(4)).toEqual(3)

    })

    it('should handel objects with functions', () => {

      const obj1 = { test: 'I am a obj 1', method: () => {} }
      const obj2 = { test: 'I am a obj 2', sub: [ 4, 5, 6 ] }
      const obj3 = deepMerge(obj1, obj2)

      expect('method' in obj3).toEqual(true)
      expect('sub' in obj3).toEqual(true)

    })

  })

})
