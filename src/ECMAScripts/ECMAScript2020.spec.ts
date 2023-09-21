describe('ECMAScript 2020', () => {
  test('dynamic imports', async () => {
    const toImport = './store.ts'
    const {store} = await import(toImport)
    expect(store).toEqual({})
  })

  // it('knows the current url', () => {
  //   // Not sure what this will give in a node context ;)
  //   const storeUrl = new URL('store.json', import.meta.url)
  //   expect(storeUrl).toBe('yaye')
  // })

  describe('BigInt', () => {
    test('max number', () => {
      expect(9_007_199_254_740_991).toBe(Number.MAX_SAFE_INTEGER)
    })

    test('too big', () => {
      const nrWithSquigly = 98765432123456789
      expect(typeof nrWithSquigly).toBe('number')

      // const bigInt = 98765432123456789n
      // expect(typeof bigInt).toBe('bigint')
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
      expect(obj?.lvl1?.lvl2).toBe(5)
      expect(obj.lvl1.lvl2.aie?.oops).toBeUndefined()
    })

    it('also works for dynamic properties', () => {
      const user = {age: 12}
      const userName = (user as any)?.['name']
      expect(userName).toBeUndefined()
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
