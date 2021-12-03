export default {}

// 实现一个 ToPath 工具类型，用于把属性访问（. 或 []）路径转换为元组的形式。具体的使用示例如下所示：
type toPathBrackets<T extends string, S extends string = ''> = T extends `${infer A}[${infer B}]${infer C}` ? toPathBrackets<C, `${A}.${B}${C}${S}`> : S
type ToPath<S extends string, R extends any[] = []> = S extends `${infer A}.${infer B}` ? ToPath<B, [...R, A]> : [...R, S]



type c = toPathBrackets<'foo[0].bar.baz'>
type d = ToPath<toPathBrackets<"foo[0].bar.baz">>
