// NodeJS
function doStuff(values: ReadonlyArray<string>): void

// TypeScript
function doStuff(values: readonly string[]) {}


let x: readonly string[] = ['uh'];
// x[0] = 'yaye'
// x.push('ouch')
x = ['hah']



type SomeType = {
  readonly prop: string; // --> not immutable!
}


// Utility Readonly<T>
function noReAssignment<T>(value: Readonly<T>) {}



type Mutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};


// Utility NonNullable<T>
function noNullOrUndefined<T>(value: NonNullable<T>) {}
