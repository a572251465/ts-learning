export default {}
// 计算元组类型的长度
type LengthOfTuple<T> = T extends any[] ? T['length'] : never

type A = LengthOfTuple<['B', 'F', 'E']> // 3
type B = LengthOfTuple<[]> // 0
