type NaiveFlat<T extends any[]> = {
  [P in keyof T]: T[P] extends any[] ? NaiveFlat<T[P]> : T[P]
}[number]

// 测试用例：
  type NaiveResult = NaiveFlat<[['a'], ['b', ['c']], ['d']]>
// NaiveResult的结果： "a" | "b" | "c" | "d"

export default {}
