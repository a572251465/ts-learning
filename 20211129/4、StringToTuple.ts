type StringToTuple<T, Prev extends any[] = []> = T extends `${infer L}${infer R}` ? StringToTuple<R, [...Prev, L]> : Prev

type A = StringToTuple<'BFE.dev'> // ['B', 'F', 'E', '.', 'd', 'e','v']
type B = StringToTuple<''> // []

export default {}
