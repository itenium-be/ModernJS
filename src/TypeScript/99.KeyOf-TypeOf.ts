// http://www.typescriptlang.org/docs/handbook/2/keyof-types.html
// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html


// keyof
type Point = { x: number; y: number }
type P = keyof Point // == 'x' | 'y'

// typeof
