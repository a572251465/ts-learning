import CamelCase from "./10、CamelCase";

export default {}

type ComponentEmitsType<T> = {
  [P in keyof T as `on${CamelCase<P>}`]?: T[P] extends ((...args: infer A) => any) ? (...args: A) => void : T[P]
}

type Source = {
  'handle-open': (flag: boolean) => true,
  'preview-item': (data: { item: any, index: number }) => true,
  'close-item': (data: { item: any, index: number }) => true,
}

type SourceEmit = ComponentEmitsType<Source>
