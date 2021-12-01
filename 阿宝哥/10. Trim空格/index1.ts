type TrimLeft<V extends string> = V extends ` ${infer R}` ? TrimLeft<R> : V;

// 测试用例
  type a = TrimLeft<' semlinker '>
//=> 'semlinker'

export default {}
