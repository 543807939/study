// 1. setTimeout
setTimeout(function () {
    console.log(this);
}, 0);

// 2. 元素的事件 指向触发的对象

const btn = document.querySelector('button')
btn.addEventListener('click', function () {
    console.log(this);
})

// 3. forEach  默认指向this 可以传第二个参数绑定
const arr = [1, 2, 3]
arr.forEach(function (item) {
    console.log(item, this);
})

arr.forEach(function (item) {
    console.log(item, this, 'Number');
}, 11)