describe('Unions', () => {
  const fetchPersonByEmail = (email: string) => ({})
  const fetchPersonsByIds = (ids: number[]) => ({})
  const fetchPersonsCreatedAfter = (date: Date) => ({})

  function getPerson(id: string | number | number[] | Date) {
    // Narrowing:
    if (typeof id === 'string') {
      fetchPersonByEmail(id)

    } else if (id instanceof Date) {
      fetchPersonsCreatedAfter(id)

    } else if (Array.isArray(id)) {
      fetchPersonsByIds(id)

    } else {
      fetchPersonsByIds([id])
    }
  }






  function altGetPerson(id: number[] | Date) {
    if ('length' in id) {
      fetchPersonsByIds(id)
    } else {
      fetchPersonsCreatedAfter(id)
    }
  }






  // Custom Assertions
  function assertIsString(val: any): asserts val is string {
    if (typeof val !== 'string') {
      throw new Error('Not a string!')
    }
  }

  function doStuff(x: any) {
    assertIsString(x)
    expect(x.toUpperCase).toBe(Function)
  }






  describe('define a type if used multiple times!', () => {
    type AnyId = string | number | number[]
  })







  describe('Can union anything', () => {
    function compare(a: string, b: string): -1 | 0 | 1 { return 0; }




    function startSlideShow(options: Options | 'default') {}

    describe('type a function', () => {
      const fn: typeof SlideShowStarter = startSlideShow

      type SlideShowStarterFn = (options: Options | 'default') => void
      const fn2: SlideShowStarterFn = startSlideShow
    })
  })
})

type Options = {cycle: true, startIndex: 0}
declare function SlideShowStarter(options: Options | 'default'): void



describe('any / unknown', () => {
  // Can't do anything with "unknown"
  // Can do everything with "any"

  function isBelgianHoliday(date: Date): boolean { return true; }

  test('Write a test for something that is not possible in TS, but is in JS...', () => {
    // const err = isBelgianHoliday(undefined)

    const noDate = undefined as unknown as Date
    const result = isBelgianHoliday(noDate)
    expect(result).toBe(true)
  })
})
