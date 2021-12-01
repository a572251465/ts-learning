class Animal{
  name:string = ''
}
class Bird extends Animal{
  swing:number = 0
}

let a:Animal;
a = new Bird();

let b:Bird;
//并不是父类兼容子类，子类不兼容父类
// b = new Animal(); ERROR

// 注：兼容性处理：多的可以赋值给少的，但是少的不能赋值给多的，针对于class 如果父类的结构跟子类的结构相同的话 是可以的

export default {}
