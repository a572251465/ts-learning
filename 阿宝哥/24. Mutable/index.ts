export default {}

// 实现一个 Mutable 工具类型，用于移除对象类型上所有属性或部分属性的 readonly 修饰符。具体的使用示例如下所示：
type Foo = {
  readonly a: number;
  readonly b: string;
  readonly c: boolean;
};

type Mutable<T, Keys extends keyof T = keyof T> = {
  -readonly [P in Keys]: T[P]
} & Omit<T, Keys>

type a = Readonly<Omit<Foo, 'a'>>

const mutableFoo: Mutable<Foo, 'a'> = { a: 1, b: '2', c: true };

mutableFoo.a = 3; // OK
// mutableFoo.b = '6'; // Cannot assign to 'b' because it is a read-only property.
