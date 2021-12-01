export default {}

interface IA {
  name: string,
  age: number,
  school: string
}
// Partial
type PartialA<T> = {
  [P in keyof T]?: T[P]
}
type Required1<T> = {
  [P in keyof T]-?: T[P]
}
type Readonly1<T> = {
  readonly [P in keyof T]: T[P]
}
type Pick1<T, K extends keyof T> = {
  [P in keyof T as P extends K ? P : never]: T[P]
}
type Pick2<T, K extends keyof T> = {
  [P in K]: T[P]
}
type Omit1<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
type A = Partial<IA>
type A1 = PartialA<IA>
// Required
type B = Required<A>
type B1 = Required1<A1>
// Readonly
type C = Readonly<IA>
type C1 = Readonly1<IA>
// Pick
type D = Pick<IA, 'name'>
type D1 = Pick1<IA, 'name'>
type D2 = Pick2<IA, 'name'>
// Omit
type E = Omit<IA, 'name'>
type E1 = Omit1<IA, 'name'>

type F = [number, boolean, string]
type H = F[number]
