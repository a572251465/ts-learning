export default {}

// 得到元组类型中的最后一个元素
type LastItem<T, LastNode = never> = T extends [infer A, ...infer B] ? LastItem<B, A> : LastNode
type A = LastItem<[string, number, boolean]> // boolean
type B = LastItem<['B', 'F', 'E']> // 'E'
type C = LastItem<[]> // never
