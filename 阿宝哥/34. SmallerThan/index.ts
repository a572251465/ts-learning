export default {}

// 实现一个 SmallerThan 工具类型，用于比较数值类型的大小。具体的使用示例如下所示：
type SmallerThan<
  N extends number,
  M extends number,
  NArr extends any[] = [],
  MArr extends any[] = []
  > = N extends M ? false : (
    NArr['length'] extends N ? true : (
      MArr['length'] extends M ? false : (
        SmallerThan<N, M, [...NArr, 1], [...MArr, 1]>
      )
    )
)

type S0 = SmallerThan<0, 1>; // true
type S1 = SmallerThan<2, 0>; // false
type S2 = SmallerThan<8, 10>; // true


type a = [any] extends [1] ? 1 : 2

type c = any extends 1 ? 1 : 2

type b = 1 extends any ? 1 : 2

type d = keyof any
