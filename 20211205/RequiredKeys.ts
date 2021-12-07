export default {}

// 获取对象类型中的必须属性的联合类型
type Result<T> = {
  [P in keyof T as Omit<T, P> extends T ? never : P]: P
}
type RequiredKeys<T> = Result<T>[keyof Result<T>]

type a1 = RequiredKeys<{ foo: number | undefined, bar?: string, flag: boolean }>        // foo|flag
type a2 = RequiredKeys<{ foo: number, bar?: string }>                                   // foo
type a3 = RequiredKeys<{ foo: number, flag: boolean }>                                  // foo|flag
type a4 = RequiredKeys<{ foo?: number, flag?: boolean }>                                // never
type a5 = RequiredKeys<{}>    