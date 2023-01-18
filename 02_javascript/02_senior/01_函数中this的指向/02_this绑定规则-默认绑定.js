// 函数独立调用：this指向window

// 1. 普通函数独立调用
function bar() {
    console.log('bar:', this);
}

bar()

// 2. 对象内的方法被独立调用
const user = {
    name: '张三',
    foo() {
        console.log('foo', this);
    }
}

const foo = user.foo
foo()

// 3. 高阶函数
function baz(fn) {
    fn()
}

baz(user.foo)