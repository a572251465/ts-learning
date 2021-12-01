type User = {
  id: number;
  kind: string;
};

// ---------------------------  错误  ----------------------------------
// extends 从语义上看是继承的意思，意思是包含兼容，所以T中包含属性<id， kind>, 但是不一定只有这两个
// function makeCustomer<T extends User>(u: T): T {
//   return {
//     id: u.id,
//     kind: 'customer'
//   }
// }

// -------------------------- 正确 --------------------------------------
// 方式1
function makeCustomer1<T extends User>(u: T): User {
  return {
    id: u.id,
    kind: 'customer'
  }
}

// 方法2
function makeCustomer2<T extends User>(u: T): T {
  return {
    ...u,
    id: u.id,
    kind: 'customer'
  }
}

// 方法3
function makeCustomer3<T extends User>(u: T) {
  return {
    id: u.id,
    kind: 'customer'
  }
}
