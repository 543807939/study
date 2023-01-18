// 箭头函数中的this指向它上层作用域的this

const obj = {
    name: 'obj',
    foo() {
        var bar = () => {
            console.log('bar', this);
        }
        return bar
    }
}

const fn = obj.foo()

fn.apply('bbb')

// const bar = obj.foo

// const fn = bar()

// fn.apply('bbb')