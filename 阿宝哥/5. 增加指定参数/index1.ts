// Parameters 表示获取函数参数类型
// ReturnType 表示用来获取返回值类类型

type Fn = (a: number, b: string) => number
type AppendArgument<F extends (...args: any) => any, A> = (x: A, ...args: Parameters<F>) => ReturnType<F>

  type FinalFn = AppendArgument<Fn, boolean>
// (x: boolean, a: number, b: string) => number


export default {}
