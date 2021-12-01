type SetOptional<T, K extends keyof T> = {
  [P in keyof T as P extends K ? P : never]?: T[P]
} & {
  [P in keyof T as P extends K ? never : P]: T[P]
}

type Foo = {
  a: number;
  b?: string;
  c: boolean;
}
// 测试用例
type SomeOptional = SetOptional<Foo, 'a' | 'b'>;

export default {}
