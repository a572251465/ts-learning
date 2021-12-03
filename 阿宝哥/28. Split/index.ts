export default {}

// 实现一个 Split 工具类型，根据给定的分隔符（Delimiter）对包含分隔符的字符串进行切割。可用于定义 String.prototype.split 方法的返回值类型。具体的使用示例如下所示：
type Item = 'semlinker,lolo,kakuqo';

type Split<
  S extends string,
  Delimiter extends string,
  T extends any[] = []
  > = S extends `${infer A},${infer B}` ? Split<B, Delimiter, [A, ...T]> : S extends "" ? [] : [...T, S]

  type ElementType = Split<Item, ','>; // ["semlinker", "lolo", "kakuqo"]
type ElementType1 = Split<'', ','>; // ["semlinker", "lolo", "kakuqo"]
