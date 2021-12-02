export default {}

// 实现一个 OptionalKeys 工具类型，用来获取对象类型中声明的可选属性。具体的使用示例如下所示：
type Person = {
  id: string;
  name: string;
  age: number;
  from?: string;
  speak?: string;
};

type OptionalKeys<T> = NonNullable<{
  [P in keyof T]: undefined extends T[P] ? P : never
}[keyof T]>
type PersonOptionalKeys = OptionalKeys<Person> // "from" | "speak"

