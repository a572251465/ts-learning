export default {}

// 实现一个 Shift 工具类型，用于移除 T 数组类型中的第一个类型。具体的使用示例如下所示：
type Shift<T extends any[]> = T extends [infer A, ...infer args] ? args : never

// 测试用例
type S0 = Shift<[1, 2, 3]>
type S1 = Shift<[string,number,boolean]>
