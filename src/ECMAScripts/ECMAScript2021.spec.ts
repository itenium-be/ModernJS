describe('ECMAScript 2021', () => {
  test('numeric separators', () => {
    expect(1_000).toBe(1000)
  })


  describe('String.protype.replaceAll', () => {
    test('replace only replaces the first occurrence', () => {
      const result = 'Too  many  spaces'.replace('  ', ' ')
      expect(result).toBe('Too many  spaces')
    })

    it('was solved with a regex', () => {
      const result = 'Too  many  spaces'.replace(/  /g, ' ')
      expect(result).toBe('Too many spaces')
    })

    test('and now there is replaceAll', () => {
      const result = 'Too  many  spaces'.replaceAll('  ', ' ')
      expect(result).toBe('Too many spaces')
    })
  })


  describe('logical assignment operators', () => {
    describe('&&=', () => {
      it('assigns when both are truthy', () => {
        let x = 3
        x &&= 5
        expect(x).toBe(5)
      })

      test('like &&...', () => {
        let x = 0
        x &&= 5
        expect(x).toBe(0)
      })
    })

    test('||=', () => {
      let x = 0
      x ||= 5
      expect(x).toBe(5)
    })

    describe('Nullish Coalescing (??)', () => {
      it('was introduced in ES2020', () => {
        expect(undefined || 42).toBe(42)
        expect(0 || 42).toBe(42)

        expect(undefined ?? 42).toBe(42)
        expect(null ?? 42).toBe(42)
        expect(0 ?? 42).toBe(0)
      })

      test('??= works for undefined', () => {
        let x: number | undefined = undefined
        x ??= 5
        expect(x).toBe(5)
      })

      test('and for null', () => {
        let x: number | null = null
        x ??= 5
        expect(x).toBe(5)
      })

      test('but not for a falsy value', () => {
        let x = 0
        x ??= 5
        expect(x).toBe(0)
      })
    })
  })


  describe('Promises', () => {
    test('finally as of ES2018', done => {
      Promise.resolve(1)
        .then(value => expect(value).toBe(1))
        .finally(() => done())
    })

    test('Promise.any() resolves as soon as one resolves', async () => {
      const first = await Promise.any([
        Promise.reject(1),
        Promise.resolve(true),
        Promise.resolve(false),
      ])
      expect(first === true || first === false).toBeTruthy()
    })

    test('contrast to Promise.race() which returns the first resolve/reject', async () => {
      try {
        await Promise.race([
          Promise.reject(1),
          Promise.resolve(true),
        ])
      } catch(err) {
        expect(err).toBe(1)
      }
    })

    test('typically you want all of them', async () => {
      const all = await Promise.all([
        Promise.resolve(true),
        Promise.resolve(false),
      ])
      expect(all).toEqual([true, false])
    })

    test('but if one fails, you only get that', async () => {
      let all: any = undefined
      try {
        all = await Promise.all([
          Promise.resolve(true),
          Promise.reject(false),
        ])
      } catch(err) {
        expect(err).toBe(false)
      }
      expect(all).toBeUndefined()
    })

    test('introducing allSettled', async () => {
      const all = await Promise.allSettled([
        Promise.resolve(true),
        Promise.reject('reason'),
        Promise.resolve(false),
      ])

      // Oh noes! No true type safety due the "as x"
      const errors = all.filter(x => x.status === 'rejected') as PromiseRejectedResult[]
      expect(errors.length).toBe(1)
      expect(errors[0].reason).toBe('reason')

      const success = all.filter(x => x.status === 'fulfilled')
      expect(success[0]).toEqual({status: 'fulfilled', value: true})
      expect(success[1]).toEqual({status: 'fulfilled', value: false})
    })

    test('or more TypeScripty', async () => {
      const all = await Promise.allSettled([
        Promise.resolve(true),
        Promise.reject('reason'),
      ])

      function isRejected<T>(result: PromiseSettledResult<T>): result is PromiseRejectedResult {
        return result.status === 'rejected'
      }

      const errors = all.filter(isRejected)
      expect(errors[0].reason).toBe('reason')
    })
  })
})
