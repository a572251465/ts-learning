
type FirstCase<T, K = ''> = T extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}` : K
type CamelCase<T, K extends string = ''> = FirstCase<
    T extends `${infer L}-${infer R}` ? CamelCase<FirstCase<R>, `${K}${L}`> : `${K}${FirstCase<T>}`
  >

type a1 = CamelCase<'handle-open-flag'>         // HandleOpenFlag
type a2 = CamelCase<'open-flag'>                // OpenFlag

export default CamelCase
