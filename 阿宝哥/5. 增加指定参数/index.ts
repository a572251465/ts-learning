type Fn = (a: number, b: string) => number
type AppendArgument<F, A> = F extends (...args: infer C) => infer B ? (
  (x: A, ...args: C) => B
) : never

  type FinalFn = AppendArgument<Fn, boolean>
// (x: boolean, a: number, b: string) => number


export default {}
