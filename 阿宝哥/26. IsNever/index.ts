export default {}

// 实现一个 IsNever 工具类型，判断指定的类型是否为 never 类型。具体的使用示例如下所示：
// type IsNever<T> = [T] extends [never] ? true : false
type IsEqual<T, U> = (<G>() => G extends T ? 1 : 0) extends (<G>() => G extends U ? 1 : 0) ? true : false
type IsNever<T> = IsEqual<T, never>


type I0 = IsNever<never> // true
type I1 = IsNever<never | string> // false
type I2 = IsNever<null> // false
type I3 = IsNever<any> // false
