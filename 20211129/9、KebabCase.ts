export default {}

type Change<L extends string,K extends string> = `${K}${Uppercase<L> extends L ? `${K extends '' ? '' : '-'}${Lowercase<L>}` : L}`
type KebabCase<T, K extends string= ''> = T extends `${infer L}${infer R}` ? KebabCase<R, Change<L, K>> : K

type a1 = KebabCase<'HandleOpenFlag'>           // handle-open-flag
type a2 = KebabCase<'OpenFlag'>                 // open-flag
