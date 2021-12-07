export default {}

// 方案1
// type IsEqual<T, K> = (<G>() => G extends T ? 1 : 0) extends (<G>() => G extends K ? 1 : 0) ? true : false
// type IsNever<T> = IsEqual<T, never>

// 方案2
type IsNever<T> = [T] extends [never] ? [never] extends [T] ? true : false : false

// 判断是否为never类型
type A = IsNever<never> // true
type B = IsNever<string> // false
type C = IsNever<undefined> // false
type D = IsNever<any> // false