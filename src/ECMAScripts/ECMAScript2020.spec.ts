describe('ECMAScript 2020', () => {
  test('dynamic imports', async () => {
    const toImport = './store.ts'
    const {store} = await import(toImport)
    expect(store).toEqual({})
  })

  // it('knows the current url', () => {
  //   // Doesn't work in a Jest context ;)
  //   const storeUrl = new URL('store.json', import.meta.url)
  //   expect(storeUrl).toBe('yaye')
  // })

  describe('BigInt', () => {
    test('ES2021: numeric separators', () => {
      expect(1_000).toBe(1000)
    })

    test('max number', () => {
      expect(9_007_199_254_740_991).toBe(Number.MAX_SAFE_INTEGER)
    })

    test('"n" the easiest way to create a bigint', () => {
      const bigInt = 98765432123456789n
      expect(typeof bigInt).toBe('bigint')
    })

    test('too big', () => {
      const nrWithSquigly = 98765432123456789
      expect(typeof nrWithSquigly).toBe('number')
      expect(nrWithSquigly).toBe(98765432123456780)
    })
  })


  // See ECMAScript2022 for examples of RegExp matchAll


  describe('globalThis', () => {
    // Browser: window
    // WebWorker: self
    // Node: global

    it('works everywhere', () => {
      expect(global).toBe(globalThis)
    })
  })


  // See ECMAScript2021 for Nullish Coalescing (??) operator


  describe('optional chaining with ?.', () => {
    // finally...

    it('works', () => {
      const obj: any = {lvl1 : {lvl2: 5}}
      expect(obj.lvl1.lvl2).toBe(5)
      expect(obj.lvl1.lvl2.aie).toBeUndefined()
      expect(obj.lvl1.lvl2.aie?.oops).toBeUndefined()
    })

    it('also works for dynamic properties', () => {
      const user = {age: 12}
      const street = (user as any)['adress']?.['street']
      expect(street).toBeUndefined()
    })

    it('also works for function calls', () => {
      const user = {login: () => true}
      const userName = user.login?.()
      expect(userName).toBe(true)

      const result = (user as any).logout?.()
      expect(result).toBeUndefined()
    })
  })
})
