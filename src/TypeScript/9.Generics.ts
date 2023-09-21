// GENERICS
// Constraints
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}


// Maybe your backend always wraps the actual return type?
interface Box<Type> {
  contents: Type;
}


// Type default
function create<T extends HTMLElement = HTMLDivElement, U = T[]>(element?: T, children?: U) {}



// infer
type Flatten<T> = T extends Array<infer ItemType> ? ItemType : T
