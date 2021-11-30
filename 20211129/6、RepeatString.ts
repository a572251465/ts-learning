type RepeatString<T extends string, K extends number, Prev extends any[] = [], S extends string = ''> =
  Prev['length'] extends K ? S : RepeatString<T, K, [...Prev, T], `${S}${T}`>

type A = RepeatString<'a', 3> // 'aaa'
type B = RepeatString<'a', 0> // ''

let a: B = ''

export default {}
