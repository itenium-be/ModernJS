describe('First Website (1991)', () => {})

describe('HTML (1993)', () => {})
describe('Netscape & Yahoo (1994)', () => {})
describe('Opera & IE (1995)', () => {})
describe('CSS (1996)', () => {})

describe('ES1 (1997) - Guy L. Steele Jr.', () => {
  // Aka Mocha aka LiveScript
  // Renamed to JavaScript to piggy back on the success of Java
  // JavaScript: confusing recruiters since 1997
})

describe('ES2 (1998)', () => {
  // Telenet & Pandora & ADSL & Skynet
  // Google
})
describe('ES3 (1999)', () => {
  // Napster
  // IE5
})










































// JavaScript winter?






















describe('JSON (2001)', () => {})


















// ES4 abandoned in 2003
// "Political differences"



















describe('Firefox (2004)', () => {})
















describe('SASS & jQuery (2006)', () => {})













describe('iPhone (2007)', () => {})


















describe('HTML5 (2008)', () => {
  // Chrome & Android
  // Github & StackOverflow
  // JavaScript: The Good Parts
})















describe('Node (2009)', () => {
  // Coffeescript
})























describe('ES5 (2009)', () => {
  // "use strict"
  // JSON.parse/stringify
  // Array & Object.prototype stuff
})























// AngularJS & Jasmine: 2010
// Bootstrap: 2011
// TypeScript: 2012
// React & IE11 & Dart: 2013
// Vue: 2014
// Angular & GraphQL: 2015

















describe('ES2015 - Is Winter Over?', () => {
  // let / const
  // Arrow functions
  // Classes
  // Dynamic obj key values {['field' + index]: true}
  // Template strings `val=${val}`
  // Promises
  // Generators: function* fn() { yield true } const gen = fn(); gen.next().value (ended / reset())
  // for(let num of seq) {}
  // Functions: Default arguments & rest operator
  // Spread operator
  // Destructuring: for(let [key, value] of Object.entries(obj)) {}
  // Modules: import/export
  // Map, Set, WeakSet, WeakMap
})













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
