export default {}

// 实现一个 IsUnion 工具类型，判断指定的类型是否为联合类型。具体的使用示例如下所示：
type IsUnion<T, U = T> = T extends U ? ([T, U] extends [U, T] ? false : true) : never

  type I0 = IsUnion<string|number> // true
  type I1 = IsUnion<string|never> // false
  type I2 =IsUnion<string|unknown> // false
