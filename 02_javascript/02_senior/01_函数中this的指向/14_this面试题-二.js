var name = 'window'

var person1 = {
    name: 'person1',
    foo1() {
        console.log(this.name);
    },
    foo2: () => {
        console.log(this.name);
    },
    foo3() {
        return function () {
            console.log(this.name);
        }
    },
    foo4() {
        return () => {
            console.log(this.name);
        }
    }
}

var person2 = {
    name: 'person2'
}

person1.foo1() // person1  隐式绑定
person1.foo1.call(person2) // person2  显式绑定

person1.foo2() // window  箭头函数 指向全局作用域
person1.foo2.call(person2) // window  箭头函数不绑定this

person1.foo3()() // window 返回了一个函数  默认绑定 
person1.foo3.call(person2)() // window  同上
person1.foo3().call(person2) // person 返回函数 显式绑定

person1.foo4()() // person1 返回一个箭头函数 直接调用 
person1.foo4.call(person2)() // person2 返回箭头函数 指向上层作用域this 
person1.foo4().call(person2) // person1