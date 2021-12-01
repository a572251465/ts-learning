type Trim<V extends string, Result extends string = ''> = (
  V extends `${infer L}${infer R}` ? Trim<R, `${L extends ' ' ? '' : L}${Result}`> : Result
)

// 测试用例
  type a = Trim<' semlinker '>
//=> 'semlinker'
