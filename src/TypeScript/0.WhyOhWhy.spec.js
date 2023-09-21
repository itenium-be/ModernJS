// No TS extension -- that is not going to work for these ;)


describe("Go Home JS, You're Drunk!", () => {
  // Because making fun of JavaScript is so easy
  it('sorts like a champ 😲', () => {
    const unsorted = [5, 1, 1000, 10]
    const sorted = unsorted.sort()
    expect(sorted).toEqual([1, 10, 1000, 5])
  })















  it('can be done', () => {
    const unsorted = [5, 1, 1000, 10]
    const sorted = unsorted.sort((a, b) => a - b)
    expect(sorted).toEqual([1, 5, 10, 1000])
  })








  test('Classic Bananas 😵', () => {
    const result = 'b' + 'a' + + 'a' + 'a'
    expect(result.toLowerCase()).toBe('banana')
  })








  test('Better Bananas 🦇', () => {
    const result = Array(16).join('wat' - 1).toLowerCase() + ' Batman!'















    expect(result).toBe(
      'nannannannannannannannannannannannannannannan Batman!'
    )
  })






  test('Bananas explained', () => {
    expect(+'a').toBe(NaN)
  })
})









describe('Type Coercion & Other Fun', () => {
  // The implicit conversion of a value from one data type to another
  // Exercise for at home: http://zero.milosz.ca/

  test('Where to even begin... 😬', () => {
    expect(Number.MIN_VALUE > 0).toBe(true)

    expect(Math.min() > Math.max()).toBe(true)
    expect(Math.min() < Math.max()).toBe(false)
  })

  test('what is null', () => {
    expect(null == 0).toBe(false)
    expect(null > 0).toBe(false)
    expect(null >= 0).toBe(true)
  })










  it('can do maths!', () => {
    const result = (true + true) * (true + true) - true
    expect(result).toBe(3)
  })










  test("but... don't really do maths if the results matter! 😨", () => {
    const result = 0.1 + 0.2
    expect(result).toBe(0.30000000000000004)
  })

  test("it's no biggy", () => {
    const result = 10000000000000000 + 1
    expect(result).toBe(10000000000000000)
  })
  test('there is bigint now', () => {
    const result = BigInt('10000000000000000')
    expect(result + 1n).toBe(10000000000000001n)
  })









  test('Array to string 😧', () => {
    const result = [1, 2, 3] + [4, 5, 6]
    expect(result).toBe('1,2,34,5,6')
  })









  test('JS Fail 🤯', () => {
    const result =
      (![] + [])[+[]] +
      (![] + [])[+!+[]] +
      ([![]] + [][[]])[+!+[] + [+[]]] +
      (![] + [])[!+[] + !+[]]







    expect(result).toBe('fail')
  })








  it('can generate pretty much anything 🔩', () => {
    const result =
      (![] + [] + [][[]])[+!![] + [+[]]] +   // 'i' == ('false' + 'undefined')[10]
      (!![] + [])[+[]] +                     // 't' == 'true'[0]
      ([] + {})[+!![] + [+!![]]] +           // 'e' == '[object Object]'[11]
      ([][[]] + [])[+!![]] +                 // 'n' == 'undefined'[1]
      (![] + [] + [][[]])[+!![] + [+[]]] +   // 'i' == ('false' + 'undefined')[10]
      ([][[]] + [])[+[]] +                   // 'u' == 'undefined'[0]
      'm'                                    // well, except g h k m p q v w x & z

    expect(result).toBe('itenium')
  })
})


// Find more 'fun' at: https://github.com/denysdovhan/wtfjs
