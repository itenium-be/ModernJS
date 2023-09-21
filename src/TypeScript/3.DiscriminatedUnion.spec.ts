type ShapeType = 'rectangle' | 'circle'

type PoorShape = {
  kind: ShapeType
  /** Radius for circle */
  width: number
  /** Optional: Only filled in for rectangles! */
  height?: number
}












type Circle = {
  kind: 'circle'
  radius: number
}

type Rectangle = {
  kind: 'rectangle'
  width: number
  height: number
}

type Shapes = Rectangle | Circle








function getArea(shape: Shapes) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'rectangle':
      return shape.width * shape.height
    default:
      const _exhaustiveCheck: never = shape
      return _exhaustiveCheck
  }
}





describe('Arrow functions vs Unions', () => {
  test('Do avoid as T', () => {
    const shapes: Shapes[] = [
      {kind: 'circle', radius: 5},
      {kind: 'rectangle', width: 3, height: 9},
    ]

    // Non-null assertion operator
    // '!' --> find could return undefined, but we're sure there is a circle:
    // Alternative: strictNullChecks tsc parameter
    const circle = shapes.find(shape => shape.kind === 'circle')!
    expect((circle as Circle).radius).toBe(5)
    expect((<Circle>circle).radius).toBe(5)

    // Narrowing with Type Predicates
    const isCircle = (shape: Shapes): shape is Circle => shape.kind === 'circle'

    const circles = shapes.filter(isCircle)
    expect(circles[0].radius).toBe(5)
  })
})
