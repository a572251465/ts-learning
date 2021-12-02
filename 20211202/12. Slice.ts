export default {}
type IEnd<S, E> = S extends 1 ? E extends 1 ? true : false : false
type Slice<T extends any[], Start, End = T['length'], S extends any[] = [], StartFlag = 0, EndFlag = 0, IdenArr extends any[] = []> = (
  T extends [infer L, ...infer R] ? (
    Start extends IdenArr['length'] ? Slice<R, Start, End, [...S, L], 1, End extends Start ? 1 : 0, [...IdenArr, L]> : (
      IEnd<StartFlag, EndFlag> extends true ? S : (
        End extends IdenArr['length'] ? Slice<R, Start, End, [...S, L], 1, 1, [...IdenArr, L]> : (
          Slice<R, Start, End, StartFlag extends 0 ? S : [...S, L], StartFlag, 0, [...IdenArr, L]>
          )
        )
      )
    ) : S
  )


// 截取元组中的部分元素
type A1 = Slice<[any, never, 1, '2', true, boolean], 0, 2>          // [any,never,1]
// type A2 = Slice<[any, never, 1, '2', true, boolean], 1, 3>          // [never,1,'2']
// type A3 = Slice<[any, never, 1, '2', true, boolean], 1, 2>          // [never,1]
// type A4 = Slice<[any, never, 1, '2', true, boolean], 2>             // [1,'2',true,boolean]
// type A5 = Slice<[any], 2>                                           // []
// type A6 = Slice<[], 0>                                              // []
