describe('ECMAScript 2024 Sneak Preview', () => {
  // Top level await
  // Decorators

  describe('pipeline operator (| >)', () => {
    test("doesn't work yet in VSCode 😀", () => {
      // Without pipeline operator
      const result = Math.ceil(Math.pow(Math.max(0, -10), 1/3))

      // With pipeline operator
      // const calculatedValue = -10
      //   |> (n => Math.max(0, n))
      //   |> (n => Math.pow(n, 1/3))
      //   |> Math.ceil
    })
  })


  describe('RegExp v flag', () => {
    const input = 'abcdef';

    test('substraction with nested character class', () => {
      const result = input.replace(/[a-z--[aeiuo]]/gv, '')
      expect(result).toEqual('ae')
    })
  })


  describe('Immutable Records & Tuples', () => {
    // test('Records', () => {
    //   const profile = #{
    //     name: 'Brendan Eich',
    //     age: 62,
    //   }
    //   const mutated = profile.with({age: 63})
    // })

    // test('tuples', () => {
    //   const nrTuple = #[10, 20, 30];
    // })
  })



  describe('Temporal - because Date...', () => {
    // I should create some tests with
    // import { Temporal } from '@std/proposal-temporal'

    // Temporal.Now.instant() - current system exact time
    // Temporal.Now.timeZoneId() - current system time zone
    // Temporal.Now.zonedDateTime(calendar) - current date and wall-clock time in the system time zone and specified calendar
    // Temporal.Now.zonedDateTimeISO() - current date and wall-clock time in the system time zone and ISO-8601 calendar
    // Temporal.Now.plainDate(calendar) - current date in the system time zone and specified calendar
    // Temporal.Now.plainDateISO() - current date in the system time zone and ISO-8601 calendar
    // Temporal.Now.plainTimeISO() - current wall-clock time in the system time zone and ISO-8601 calendar
    // Temporal.Now.plainDateTime(calendar) - current system date/time in the system time zone, but return an object that doesn't remember its time zone so should NOT be used to derive other values (e.g. 12 hours later) in time zones that use Daylight Saving Time (DST).
    // Temporal.Now.plainDateTimeISO() - same as above, but return the DateTime in the ISO-8601 calendar
  })


  describe('Realms API', () => {
    // const realm = new Realm();
    // realm.evaluate('3 * 5');

    // // Throws a TypeError
    // realm.evaluate('this');
    // realm.evaluate('new Array()');
    // realm.evaluate('Object.keys({})');
  })
})
