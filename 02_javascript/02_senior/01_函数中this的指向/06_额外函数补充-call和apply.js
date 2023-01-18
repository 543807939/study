function foo() {
    console.log('foo:', this, arguments);
}

foo()

foo.apply('apply')
foo.call('call')

// 区别

// call 传入参数列表
foo.call('call', '张三', '李四', '王五')
//apply传入数组
foo.apply('apply', ['王五五', '李四四', '张三三'])