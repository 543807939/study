// 1. new 最高
// 2. bind
// 3. call/apply
// 4. 显式绑定
// 5. 隐式绑定


// 隐式绑定
function bar() {
    console.log('bar', this);
}

// 显式绑定
const user = {
    name: '张三',
    bar
}

// bind 绑定
const binded = user.bar.bind('aaa')
binded() // aaa 说明 bind 高于显式绑定

// new 绑定
new binded() // 空对象 说明 new > bind

binded.call('bbb') // aaa对象  说明 bind高于call