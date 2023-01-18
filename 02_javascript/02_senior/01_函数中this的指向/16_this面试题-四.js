var name = 'window'

function Person(name) {
    this.name = name
    this.obj = {
        name: 'obj',
        foo1: function () {
            return function () {
                console.log(this.name);
            }
        },
        foo2: function () {
            return () => {
                console.log(this.name);
            }
        }
    }
}

var person1 = new Person('person1')
var person2 = new Person('person2')

person1.obj.foo1()() // window
person1.obj.foo1.call(person2)() // window
person1.obj.foo1().call(person2) // person2

person1.obj.foo2()() // obj  箭头函数 this指向上层作用域foo2函数  foo2的this隐式绑定到obj
person1.obj.foo2.call(person2)() // person2
person1.obj.foo2().caller(person2) // obj