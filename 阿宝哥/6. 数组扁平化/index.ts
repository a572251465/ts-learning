
type AddLine<T, S extends string = ''> = T extends `${infer L}${infer B}` ? AddLine<B, `${S extends '' ? '' : `${S} | `}${L}`> : S
type ArrayToString<T, Prev extends string = ''> = T extends [infer A, ...infer B] ? A extends string ? ArrayToString<B, `${Prev}${A}`> : never : Prev
type NaiveFlat<T extends any[], S extends string = ''> = T extends [infer A, ...infer B] ? NaiveFlat<B, `${S}${ArrayToString<A>}`> : AddLine<S>

// 测试用例：
  type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], ['d']]>
// NaiveResult的结果： "a" | "b" | "c" | "d"

export default {}
