describe('Tuples', () => {
  type UseState<T> = [T, (value: T) => void]



  function useState<T>(initial: T): UseState<T> {
    return [initial, value => {}]
  }



  test('Typical React useState usage', () => {
    const [value, setValue] = useState(true)
  })


  // Infer as a readonly tuple with 2 values
  const args = ['yaye', 42] as const;
  function doSomething(pair: readonly [string, number]) {}



  // Tuples & Rest
  type StringNumberBooleans = [string, number, ...boolean[]]
  type StringBooleansNumber = [string, ...boolean[], number]
  type BooleansStringNumber = [...boolean[], string, number]
})







describe('Record<Keys, Type> Utility', () => {
  interface CatInfo {
    age: number;
    breed: string;
  }

  type CatName = 'miffy' | 'boris' | 'mordred';

  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: 'Persian' },
    boris: { age: 5, breed: 'Maine Coon' },
    mordred: { age: 16, breed: 'British Shorthair' },
  };
})
