export default {}

// 实现一个 RemoveIndexSignature 工具类型，用于移除已有类型中的索引签名。具体的使用示例如下所示：
interface Foo {
  [key: string]: any;
  [key: number]: any;
  bar(): void;
}

type RemoveIndexSignature<T> = {
  [P in keyof T as P extends `${infer L}${infer R}` ? P : never]: T[P]
}

  type FooWithOnlyBar = RemoveIndexSignature<Foo>; //{ bar: () => void; }
