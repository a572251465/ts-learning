interface Animal {
  name: string;
  age: number;
}

interface Person {
  name: string;
  age: number;
  gender: number
}
// 要判断目标类型`Person`是否能够兼容输入的源类型`Animal`
function getName(animal: Animal): string {
  return animal.name;
}

let p = {
  name: 'zhufeng',
  age: 10,
  gender: 0
}

let p1: {name: string, age: number, school: string} = {
  name: 'lihh',
  age: 20,
  school: 'sdfds'
}
getName(p1)

getName(p);
//只有在传参的时候两个变量之间才会进行兼容性的比较，赋值的时候并不会比较,会直接报错
let a: Animal = {
  name: 'zhufeng',
  age: 10,
  // gender: 0
}

export default {}
