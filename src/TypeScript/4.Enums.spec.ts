describe('You may not need/want an enum', () => {
  type SimpleGameState = 'start' | 'running' | 'end'


  const simpleGameState = {
    start: 0,
    running: 1,
    end: 2
  } as const
})


describe('create a type from an array', () => {
  const gameStates = ['start', 'running', 'end'] as const;
  type ElementType <T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<infer ElementType>
    ? ElementType
    : never;

  type GameStates = ElementType<typeof gameStates>;

  let gameState: GameStates = 'start';
  gameState = 'end';
})


enum GameState {
  Start = 1,
  Hacking,
  CrisisMeeting,
  Running = Hacking | CrisisMeeting,
  End = 'theEnd',
}

type AllGameStates = keyof typeof GameState


describe('enums actually output JS!', () => {
  test('Object.keys is a bit eh...', () => {
    const result = Object.keys(GameState)
    expect(result).toEqual(['1', '2', '3', 'Start', 'Hacking', 'CrisisMeeting', 'Running', 'End'])
  })

  enum State {
    Start,
    Running,
    End,
  }

  test('With a normal enum', () => {
    const keys = Object.keys(State)
    expect(keys).toEqual(['0', '1', '2', 'Start', 'Running', 'End'])

    const values = Object.values(State)
    expect(values).toEqual(['Start', 'Running', 'End', 0, 1, 2])

    const entries = Object.entries(State)
    expect(entries).toEqual([
      ['0', 'Start'], ['1', 'Running'], ['2', 'End'],
      ['Start', 0], ['Running', 1], ['End', 2],
    ])

    // Can also for-loop over it:
    // for (const value in State) {}
  })



  test('So... You may want to reconsider enums if you need this kind of functionality!', () => {
    const result = Object.values(State)
      .map(key => typeof key === 'number' ? State[key] : undefined)
      .filter(val => !!val)

    expect(result).toEqual(['Start', 'Running', 'End'])
  })






  enum OrUseStringEnums {
    Running = 'Hacking/CrisisMeeting',
    End = 'End'
  }

  it("works as you'd expect", () => {
    const keys = Object.keys(OrUseStringEnums)
    expect(keys).toEqual(['Running', 'End'])

    const values = Object.values(OrUseStringEnums)
    expect(values).toEqual(['Hacking/CrisisMeeting', 'End'])
  })
})
