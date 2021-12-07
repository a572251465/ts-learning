export default {}

let married: boolean = false
const married1: boolean = true

let num: number = 10

let str: string = '11'

// 数组数据类型
const arr1: number[] = [1, 2, 3]
const arr2: Array<number> = [3, 4, 5]

// 元组类型
const arr3: [number, string] = [1, '3']

// 普通枚举类型
enum IStatus {
  ADD,
  DELETE,
  EDIT,
  SELECT
}
// 常数枚举类型
const enum Colors {
  Red,
  Yellow,
  Blue
}

let test: any
test = true
test = 1
test = '1'
test = function () {}

type A = 1 extends any ? true : false

let x: number
x = null
x = undefined


// void 表示函数没有返回值
function greeting(name: string): void {
  console.log('hello', name)
}

function xx(): void {
  return null
}

function yy(): void {
  return undefined
}

// 表示联合类型
let aaa: number | string
aaa = 1
aaa = '1'

// 使用断言 将联合类型断言为一种固定的类型
let bbb: number | string
(bbb as number).toFixed(2)
