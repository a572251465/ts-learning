export default {}

// 实现一个 ToNumber 工具类型，用于实现把数值字符串类型转换为数值类型。具体的使用示例如下所示：

type ToNumber<T extends string, S extends any[] = [], L extends number = S['length']> = (
  `${L}` extends T ? L : ToNumber<T,  [...S, 1]>
)

type T0 = ToNumber<"0">; // 0
type T1 = ToNumber<"10">; // 10
type T2 = ToNumber<"20">; // 20
