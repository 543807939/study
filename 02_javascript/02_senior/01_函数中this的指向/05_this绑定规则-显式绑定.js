function foo() {
    console.log('foo:', this);
}

foo.call('张三')
foo.call(undefined)
foo.call(null)

// 如果传入的参数是 基本数据类型 则会指向这个基本数据类型的包装类型
// 如果传入的参数没有包装类型 则指向window