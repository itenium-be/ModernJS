import { data } from './TopLevelAwait'

describe('ECMAScript 2022', () => {
  describe('.at()', () => {
    it('allows negative indexing', () => {
      const arr = [9, 3, 5, 1]

      const lastEl = arr[arr.length - 1]
      const atLastEl = arr.at(-1)

      expect(lastEl).toBe(atLastEl)
    })

    it('also works for strings', () => {
      const lastEl = '12345'.at(-1)
      expect(lastEl).toBe('5')
    })
  })


  describe('Object.hasOwn', () => {
    it('tests if an object has a property', () => {
      const person = {name: 'Bill'}
      const hasProp = Object.hasOwn(person, 'name')
      expect(hasProp).toBeTruthy()

      const hasXProp = Object.hasOwn(person, 'x')
      expect(hasXProp).toBeFalsy()
    })

    it('is a replacement for hasOwnProperty', () => {
      const person = {name: 'Bill'}
      const hasProp = person.hasOwnProperty('name')
      expect(hasProp).toBeTruthy()
    })

    test('because hasOwnProperty, well...', () => {
      const person = {name: 'Bill'}
      expect(typeof person.hasOwnProperty).toBe('function');

      (person as any).hasOwnProperty = 'Haha'
      expect(typeof person.hasOwnProperty).toBe('string')
    })

    it('only detects direct properties', () => {
      const person = Object.create({name: 'Bill'})
      const hasProp = person.hasOwnProperty('name')
      const hasPropNew = Object.hasOwn(person, 'name')

      expect(hasProp).toBeFalsy()
      expect(hasPropNew).toBeFalsy()
    })
  })


  describe('new RegExp /d flag', () => {
    const input = '12345678910'

    test('regEx is kind weird too', () => {
      const regEx = /1(\d)/g
      // matchAll introduced in ES2020
      const result = input.matchAll(regEx)
      const [match12, match10] = [...result]

      expect(match12[0]).toBe('12')
      expect(match10.index).toBe(9)
      expect(match10.input).toBe(input)
      expect(match10.indices).toBeUndefined()
    })

    describe('add the indices', () => {
      const regEx = /1(\d)/gd
      let match10: RegExpMatchArray & {indices: any}

      beforeEach(() => {
        const result = [...input.matchAll(regEx)]
        match10 = result[1] as any
      })

      it('adds the indices', () => {
        expect(match10[0]).toBe('10')
        expect(match10.indices.length).toBe(2)
      })

      test('indices[0] are the start/end indices of the full matched text', () => {
        expect(match10.index).toBe(9)
        expect(match10.indices[0]).toEqual([9, 11])
        expect(input.substring(9, 11)).toBe('10')
      })

      test('indices[1] are the start/end indices of the first matched group', () => {
        expect(match10.indices[1]).toEqual([10, 11])
        expect(input.substring(10, 11)).toBe('0')
      })

      test("indices[2] doesn't exist because there is only one matched group", () => {
        expect(match10.indices[2]).toBeUndefined()
      })
    })
  })


  describe('true private class fields', () => {
    class Person {
      private age: number
      #wage: number
      // or in TypeScript:
      // accessor wage: number

      constructor() {
          this.age = 5
          this.#wage = 7
      }
    }

    test('private is still accessible', () => {
      const p = new Person()
      expect((p as any).age).toBe(5)
    })

    // test('but the # cannot be referenced', () => {
    //   const p = new Person()
    //   expect((p as any).#wage).toBe(7)
    // })
  })


  describe('class statics', () => {
    class Counter {
      static #value: number

      static {
        this.#value = 0
      }

      static add() {
        Counter.#value++
      }
    }
  })


  describe('error causes', () => {
    it('will hopefully be provided by library errors', () => {
      try {
        throw new Error('Oh noes', {cause: 'reason'})
      }
      catch(err: any) {
        expect(err.cause).toBe('reason')
      }
    })
  })
})
