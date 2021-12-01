export default {}

class Person {
  constructor(name: string) {
  }
}

interface ICreateClass {
  new(name: string): Person
}

function createClass(clazz: ICreateClass) {
  const instance = new clazz('name')
}
