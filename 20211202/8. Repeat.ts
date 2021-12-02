export default {}

// 复制类型T为C个元素的元组类型
type Repeat<T, Num, S extends any[] = []> = (
  S['length'] extends Num ? S : Repeat<T, Num, [T, ...S]>
)

type A = Repeat<number, 3> // [number, number, number]
type B = Repeat<string, 2> // [string, string]
type C = Repeat<1, 1> // [1, 1]
type D = Repeat<0, 0> // []

// let a:A = []
// let b:B = []
// let c:C = []
