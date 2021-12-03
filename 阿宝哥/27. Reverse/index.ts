export default {}

// 实现一个 Reverse 工具类型，用于对元组类型中元素的位置颠倒，并返回该数组。元组的第一个元素会变成最后一个，最后一个元素变成第一个。
type Reverse<
  T extends Array<any>,
  R extends Array<any> = []
  > = T extends [infer L, ...infer S] ? [...Reverse<S>, L] : R

  type R0 = Reverse<[]> // []
  type R1 = Reverse<[1, 2, 3]> // [3, 2, 1]
