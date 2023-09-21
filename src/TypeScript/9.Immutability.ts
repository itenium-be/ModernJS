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

function noReAssignment<T>(value: Readonly<T>) {}



type Mutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};


function noNullOrUndefined<T>(value: NonNullable<T>) {}
