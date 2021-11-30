type TupleToString<T, Prev extends string = ''> = T extends  [infer L, ...infer R] ? L extends string ? TupleToString<R, `${Prev}${L}`> : never : Prev

type A = TupleToString<['a', 'b', 'c']> // 'abc'
type B = TupleToString<[]>              // ''
type C = TupleToString<['a']>           // 'a'

export default {}
