var name = 'window'
const person = {
    name: 'person',
    sayName: function () {
        console.log(this.name);
    }
}

function sayName() {
    var sss = person.sayName
    sss() // window  默认调用,sss指向函数地址,直接调用sss
    person.sayName(); // person 隐式绑定 
    (person.sayName)(); // person   隐式绑定
    (b = person.sayName)() // window  赋值语句返回值是这个函数
}

sayName()