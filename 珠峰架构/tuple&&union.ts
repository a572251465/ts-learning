export default {}

type ElementOf<T> = T extends Array<infer K> ? K : never
type TTuple = [string, number];

type ToUnion = ElementOf<TTuple>; // string | number
