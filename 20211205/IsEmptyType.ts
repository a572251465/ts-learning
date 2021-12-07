export default {}

// type IsEqual<T, K> = (<G>() => G extends T ? 1 : 0) extends (<G>() => G extends K ? 1: 0) ? true : false
// type IsEmptyType<T> = IsEqual<T, {}>

/**
 * 1. 将数字类型赋值给{} 以及object 效果是不同的, 因此使用number判断可以剔除object等
 * 2. 通过keyof来判断对象是否空属性，能满足的最后就剩下{} 以及unknown
 * 3. unknown 能extends any 但是其余的不行
 */
type IsEmptyType<T> = (
  number extends T ? (
    keyof T extends never ? (
      T extends {} ? true : false
    ) : false
  ) : false
)

let a: {} = 1
// let b: object = 2 // error
type d = keyof {}
type e = keyof Object

// 判断是否为没有属性的对象类型{}
type A = IsEmptyType<string> // false
type B = IsEmptyType<{ a: 3 }> // false
type C = IsEmptyType<{}> // true
type D = IsEmptyType<any> // false
type E = IsEmptyType<object> // false
type F = IsEmptyType<Object> // false
type G = IsEmptyType<unknown> // false