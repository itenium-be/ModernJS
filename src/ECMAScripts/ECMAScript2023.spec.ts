// Shebang
// #!/usr/bin/env node

describe('ECMAScript 2023', () => {
  describe('Array.prototype.toSorted', () => {
    test('sort() does so in place, it mutates the array', () => {
      const arr = [9, 3, 5, 1]
      const sameArr = arr.sort()

      expect(arr).toEqual([1, 3, 5, 9])
      expect(sameArr).toEqual([1, 3, 5, 9])
      expect(arr).toBe(sameArr)
    })

    test('toSorted() creates a new array', () => {
      // Old way: arr.slice().sort()

      const arr = [9, 3, 5, 1]
      const newArr = arr.toSorted()

      expect(arr).toEqual([9, 3, 5, 1])
      expect(newArr).toEqual([1, 3, 5, 9])
    })

    it('can sort with lambda since ES2019', () => {
      // Chrome70+ uses TimSort (hybrid, stable, O(n log n))
      // https://en.wikipedia.org/wiki/Timsort
      const arr = [{name: 'Tom'}, {name: 'Thomas'}]
      const sorted = arr.sort((a, b) => a.name.localeCompare(b.name))
      expect(sorted).toEqual([{name: 'Thomas'}, {name: 'Tom'}])
    })
  })


  describe('Array.prototype.toReversed', () => {
    test('reverse() is also in place', () => {
      const arr = [9, 3, 5, 1]
      const sameArr = arr.reverse()

      expect(arr).toEqual([1, 5, 3, 9])
      expect(sameArr).toEqual([1, 5, 3, 9])
      expect(arr).toBe(sameArr)
    })

    test('toReversed() creates a new array', () => {
      const arr = [9, 3, 5, 1]
      const newArr = arr.toReversed()

      expect(arr).toEqual([9, 3, 5, 1])
      expect(newArr).toEqual([1, 5, 3, 9])
    })
  })


  describe('Array.prototype.with', () => {
    it('replaces an element and returns a new array', () => {
      // This is very usefull for example when replacing a
      // single element in an array in a reducer
      const arr = [9, 3, 5, 1]
      const newArr = arr.with(2, '42')

      expect(arr).toEqual([9, 3, 5, 1])
      expect(newArr).toEqual([9, 3, '42', 1])
    })
  })


  describe('Array.prototype.findLast', () => {
    type ObjA = {a: number}

    it('returns the last match or undefined', () => {
      const arr = [{a: 1}, {a: 1}]
      const lastA = arr.findLast((x: ObjA) => x.a === 1)

      expect(lastA).toEqual({a: 1})
      expect(arr[1]).toBe(lastA)
    })

    it('also has findLastIndex', () => {
      const arr = [{a: 1}, {a: 1}]
      const lastA = arr.findLastIndex((x: ObjA) => x.a === 1)

      expect(lastA).toBe(1)
    })
  })


  describe('Array.prototype.toSpliced', () => {
    test('splice() is in place', () => {
      const arr = [9, 3, 5, 1]
      const deletedEls = arr.splice(2, 1, -1, -2)

      expect(arr).toEqual([9, 3, -1, -2, 1])
      expect(deletedEls).toEqual([5])
    })

    test('toSpliced() creates a new array', () => {
      const arr = [9, 3, 5, 1]
      const newArr = arr.toSpliced(2, 1, -1, -2)

      expect(arr).toEqual([9, 3, 5, 1])
      expect(newArr).toEqual([9, 3, -1, -2, 1])
    })
  })
})
