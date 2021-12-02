export default {}

// 得到元组类型中的第一个元素
type FirstItem<T> = T extends any[] ? T[0] : never
type A = FirstItem<[string, number, boolean]> // string
type B = FirstItem<['B', 'F', 'E']> // 'B'
type C = FirstItem<[]> // 'B'
