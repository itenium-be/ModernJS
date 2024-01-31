describe('ES2016', () => {
  test('Array.prototype.includes()', () => {
    expect([1, 2].includes(1)).toBe(true)
  })

  test('Exponentiation operator', () => {
    expect(2 ** 3).toBe(8)
    expect(2 ** 3).toBe(Math.pow(2, 3))
  })
})















describe('ES2017', () => {
  test('async functions', async () => {
    expect(await Promise.resolve(1)).toBe(1)
  })

  test('Object.entries', () => {
    const obj = {a: 1, b: 2}
    expect(Object.keys(obj)).toEqual(['a', 'b'])
    expect(Object.values(obj)).toEqual([1, 2])

    const result = Object.entries(obj)
    expect(result[0]).toEqual(['a', 1])
    expect(result[1]).toEqual(['b', 2])
  })
})
















describe('ES2018', () => {
  // Object rest/spread

  test('RegExp enhancements', async () => {
    // Named captures
    // Lookbehind
    // s (dotall) flag
    // See: https://itenium.be/blog/javascript/regex-in-javascript/
  })

  test('Asynchronous Iteration', async () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve(2),
    ]
    for await (const line of promises) {
      expect(typeof line).toBe('number')
    }
  })
})
