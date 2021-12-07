export default {}

// 实现一个 Add 工具类型，用于实现对数值类型对应的数值进行加法运算。具体的使用示例如下所示：

type Add<T, R, TArr extends any[] = [], RArr extends any[] = []> = (
  TArr['length'] extends T ? RArr['length'] extends R ? [...TArr, ...RArr]['length'] : Add<T, R, TArr, [...RArr, 1]> : Add<T, R, [...TArr, 1], RArr>
)

type A0 = Add<5, 5>; // 10
type A1 = Add<8, 18> // 28
type A2 = Add<10, 15>; // 40
