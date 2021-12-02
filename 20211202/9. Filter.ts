export default {}

// 保留元组类型T中的A类型

type Filter<T, TYPE, S extends any[] = []> = (
  T extends [infer A, ...infer B] ? (
    [A] extends [TYPE] ? Filter<B, TYPE, [...S, A]> : Filter<B, TYPE, S>
  ) : S
)

type A = Filter<[1,'BFE', 2, true, 'dev'], number> // [1, 2]
type B = Filter<[1,'BFE', 2, true, 'dev'], string> // ['BFE', 'dev']
type C = Filter<[1,'BFE', 2, any, 'dev'], string> // ['BFE', any, 'dev']
