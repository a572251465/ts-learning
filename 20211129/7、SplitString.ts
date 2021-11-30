type SplitString<T, K, S extends any[] = []> = T extends `${infer L}-${infer R}` ? SplitString<R, K, [...S, L]> : S["length"] extends 0 ? [T] : [...S, T]

type A1 = SplitString<'handle-open-flag', '-'>        // ["handle", "open", "flag"]
type A2 = SplitString<'open-flag', '-'>               // ["open", "flag"]
type A3 = SplitString<'handle.open.flag', '.'>        // ["handle", "open", "flag"]
type A4 = SplitString<'open.flag', '.'>               // ["open", "flag"]
type A5 = SplitString<'open.flag', '-'>               // ["open.flag"]
