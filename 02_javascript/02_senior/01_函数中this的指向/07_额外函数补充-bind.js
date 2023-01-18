function foo(name, age, nickname, height) {
    console.log('bind:', name, age, nickname, height);
    this.name = name
    this.age = age
    this.nickname = nickname
    this.height = height
}

const user = {
    length: 30
}

var fn = foo.bind(user, '张三', 14, '法外狂徒')
fn(188)