describe('ECMAScript 2019', () => {
  describe('flat & flatMap', () => {
    test('old school 1 level flat', () => {
      const arr = [[1, 2], 3, [5, 9, [0, 1]]]
      const result = ([] as any).concat(...arr)
      expect(result).toEqual([1, 2, 3, 5, 9, [0, 1]])
    })

    it('flattens 1 level', () => {
      const arr = [[1, 2], 3, [5, 9, [0, 1]]]
      const result = arr.flat()
      expect(result).toEqual([1, 2, 3, 5, 9, [0, 1]])
    })

    test('or x levels', () => {
      const arr = [[1, 2], 3, [5, 9, [0, 1]]]
      const result = arr.flat(2)
      expect(result).toEqual([1, 2, 3, 5, 9, 0, 1])
    })

    test('flatMap is always 1 level', () => {
      const arr = [[1, 2], 3, [5, 9]]
      const result = arr.flatMap(nr => typeof nr === 'number' ? -1 : nr.map(n => n * 2))
      expect(result).toEqual([2, 4, -1, 10, 18])
    })
  })

  describe('trimStart/End', () => {
    it('trims only spaces 😭', () => {
      expect('   A'.trimStart()).toBe('A')
      expect('A     '.trimEnd()).toBe('A')
    })

    it('already had padStart/End from ES2017', () => {
      expect('A'.padStart(5)).toBe('    A')
      expect('A'.padEnd(5, '0')).toBe('A0000')
    })
  })
})
