function foo() {
    console.log('foo函数:', this);
}

// 1. 方式一：直接调用  指向window
foo()

// 2. 方式二：通过对象调用  指向调用它的对象
const obj = {
    name: '张三',
    foo
}
obj.foo()