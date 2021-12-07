export default {}

// 判断是否为any类型

// 备注：任何类型跟any交叉都是any
// 方法1
type IsAny<T> = 0 extends 1 & T ? true : false

// 备注：unknown 只能复制给unknown 以及any
// type IsAny<T> = [unknown] extends [T] ? [T] extends [string] ? true : false : false

type A = IsAny<string> // false
type B = IsAny<any> // true
type C = IsAny<unknown> // false
type D = IsAny<never> // false
type E = IsAny<number> // false

type test = 1 & 1