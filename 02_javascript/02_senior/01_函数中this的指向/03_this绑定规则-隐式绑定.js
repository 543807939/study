// 隐式绑定
function foo() {
    console.log('foo:', this);
}

const user = {
    name: '张三',
    foo
}

user.foo()