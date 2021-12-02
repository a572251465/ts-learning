export default {}

// 实现一个 UnionToIntersection 工具类型，用于把联合类型转换为交叉类型。具体的使用示例如下所示
type UnionToIntersection<U> = (U extends any ? (k: U) => any : never) extends (k: infer U) => any ? U : never

// 测试用例
type U0 = UnionToIntersection<string | number> // never
type U1 = UnionToIntersection<{ name: string } | { age: number }> // { name: string; } & { age: number; }
