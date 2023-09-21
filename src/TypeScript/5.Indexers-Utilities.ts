describe('Indexers', () => {
  type OptionFlags<T> = {
    [Property in keyof T]: boolean
  }

  type OptionalOptionFlags<T> = {
    [key in keyof T]?: boolean
  }

  type RequiredOptionFlags<T> = {
    [P in keyof T]-?: boolean
  }





  type EventConfig<Events extends { kind: string }> = {
    // Remapping with "as"
    [E in Events as E['kind']]: (event: E) => void
  }

  type Square = { kind: 'square', x: number, y: number }
  type Circle = { kind: 'circle', radius: number }
  type ShapesEventHandlers = EventConfig<Square | Circle>
})
















describe('Partial & Required', () => {
  // Everything Optional
  function patchValue<T>(value: Partial<T>) {}

  // Everything Required
  function setValue<T>(value: Required<T>) {}


  // Multiple Levels?
  // With Conditional Type + Recursion
  type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
  }
})








describe('Exclude & Extract', () => {
  // Used for Pick & Omit below!
  type Shapes =
    | { kind: 'circle'; radius: number }
    | { kind: 'square'; x: number }
    | { kind: 'triangle'; x: number; y: number };

  type SquareOrTriangle = Exclude<Shapes, { kind: 'circle' }>



  type FnOnly = Extract<string | number | (() => void), Function>;
})










describe('Pick & Omit', () => {
  type Employee = {
    id: number
    firstName: string
    name: string
    birth?: Date
    createdOn: Date
  }

  type UpdateEmployee = Omit<Employee, 'id' | 'createdOn'>

  type CreateEmployee = Pick<UpdateEmployee, 'firstName' | 'name'>
})











describe('Promises :: Awaited', () => {
  type AwaitedString = Awaited<Promise<string>>
  type MultiAwaited = Awaited<boolean | Promise<number>>
})









// The return type of a function
function createCircle() {
  return {
    kind: 'circle' as const,
    radius: 1.0
  }
}

function transformCircle(circle: ReturnType<typeof createCircle>) {}





// For library developers ;)

// Array of parameters:
// Parameters<Type>
// ConstructorParameters<Type>

// "this"
// ThisParameterType<Type>
// OmitThisParameter<Type>
// ThisType<Type>
