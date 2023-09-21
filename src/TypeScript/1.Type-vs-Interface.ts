// Type vs Interface?

interface IBase {}
interface IBase {additional: number}
interface IDerived extends Base {}

type Base = {}
type Derived = Base & {}
