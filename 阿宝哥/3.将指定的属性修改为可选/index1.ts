// omit 排除指定类型 pick 挑选出指定类型
type SetOptional<T, P extends keyof T> = {
  [K in keyof Omit<T, P>]: T[K]
} & {
  [F in keyof Pick<T, P>]?: T[F]
}

type Foo = {
  a: number;
  b?: string;
  c: boolean;
}
// 测试用例
type SomeOptional = SetOptional<Foo, 'a' | 'b'>;
let a: SomeOptional = {
  c: false
}

// type SomeOptional = {
// 	a?: number; // 该属性已变成可选的
// 	b?: string; // 保持不变
// 	c: boolean;
// }
export default {}
