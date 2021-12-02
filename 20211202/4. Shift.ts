export default {}

// 移除元组类型中的第一个类型
type Shift<T> = T extends any[] ? T extends [any, ...infer R] ? R : [] : never

type A = Shift<[1, 2, 3]> // [2,3]
type B = Shift<[1]> // []
type C = Shift<[]> // []
