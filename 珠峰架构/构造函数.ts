export default {}

type IConstructor = new (...args: any) => any
type IConstructorParameters<T extends IConstructor> = (
  T extends new (...args: infer P) => any ? P : never
)
type IConstructorInstance<T extends IConstructor> = (
  T extends new (...args: any[]) => infer P ? P : never
)

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() { console.log(this.name) }
}

type A = typeof Person
type B = IConstructorParameters<A>
type C = IConstructorInstance<A>

