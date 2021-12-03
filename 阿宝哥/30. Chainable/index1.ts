export default {}

// type A <T = string|number|boolean> =  T extends 123 ? 1 : 2
// type A =   string|number|boolean extends 123 ? 1 : 2

type IsEqual<T, S> = T extends S ? true : false;
type IsTypeEqual<T, S> =
  IsEqual<T, S> extends true ?
    IsEqual<S, T> extends true ? true : false : false

type a = IsTypeEqual<any, string>

type b = 1 extends any ? true : false
type c = any extends 1 ? true : false
type d = any extends number ? 1 : 2

let e: d = 1
