export default {}
type IsEqual<T, U> =
  (<G>() => G extends T ? 1 : 2) extends
    (<G>() => G extends U ? 1 : 2)
    ? true
    : false;

// 找出E类型在元组类型T中的下标
type FindIndex<T, Value, S extends any[] = []> = (
  T extends [infer A, ...infer B] ? (
    IsEqual<A, Value> extends true ? S['length'] : FindIndex<B, Value, [...S, A]>
  ) : never
)

type A = [any, never, 1, '2', true]
type B = FindIndex<A, 1> // 2
type C = FindIndex<A, 3> // never
type D = FindIndex<A, true>
let b:B = 2
// let c:C = 2
let d:D = 4
