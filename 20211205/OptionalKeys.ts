export default {}

// type Result<T> = {
//   [P in keyof T as Omit<T, P> extends T ? P : never]: P
// }
// type OptionalKeys<T> = NonNullable<Result<T>[keyof Result<T>]>

type OptionalKeys<T, K = keyof T> = K extends keyof T ? (Omit<T, K> extends T ? K : never) : never

type a1 = OptionalKeys<{ foo: number | undefined, bar?: string, flag: boolean }>        // bar
type a2 = OptionalKeys<{ foo: number, bar?: string }>                                   // bar
type a3 = OptionalKeys<{ foo: number, flag: boolean }>                                  // never
type a4 = OptionalKeys<{ foo?: number, flag?: boolean }>                                // foo|flag
type a5 = OptionalKeys<{}>                                                              // never
