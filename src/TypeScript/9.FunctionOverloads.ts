// Function Overloading
interface IdLabel { id: number }
interface NameLabel { name: string }


function createLabel(id: number): IdLabel
function createLabel(name: string): NameLabel
function createLabel(nameOrId: string | number): IdLabel | NameLabel
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw 'NotImplemented'
}


createLabel(1)
