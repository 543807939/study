/* 
    1. 创建一个新对象
    2. 将this指向这个对象
    3. 将这个对象的__proto__指向函数的prototype
    4. 执行函数
    5. 如果函数返回非空对象,则返回该对象;否则返回创建的新对象
*/

function bar() {
    console.log('bar:', this);
    this.name = '张三'
}

new bar()