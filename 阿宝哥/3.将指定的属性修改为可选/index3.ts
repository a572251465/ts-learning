// Partial 修改为非必输 Pick 挑选 Exclude 排除
type SetOptional<T, K extends keyof T> = Partial<Pick<T, K>> & Pick<T, Exclude<K, keyof T>>

type Foo = {
  a: number;
  b?: string;
  c: boolean;
}
// 测试用例
type SomeOptional = SetOptional<Foo, 'a' | 'b'>;
export default {}
