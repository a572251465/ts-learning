const p1 = {
  name: 'lihh',
  age: 10
}

function test(name: string, age: number): number {
  return 0
}

type P = typeof p1
type P1 = typeof test

// 不仅可以获取变量的数据类型 同样可以获取函数的数据类型
