//  
// 一、JavaScript运行三部曲
// 1.语法分析：JavaScript代码在编译前期的准备工作，如果代码里有低级语法错误，会直接报错。
// 2.预编译：JavaScript代码在执行前期的准备工作。
// 3.解释执行：开始执行代码。
// 二、预编译
// 1.预编译前奏：

// 1)imply global暗示全局变量：即任何变量如果未经声明就直接使用，那么这个变量就会自动提升为全局对象所拥有。
// 例如：a = 123 ，这里的a变量会自动提升为全局变量。
// 2)所有的声明的全局变量，都归window所拥有。
// 例如：var a = 123; 相当于window.a = 123;

// 2.预编译
// 预编译四部曲
// 第一步：创建AO对象（Activation Object）,也叫执行器上下文。
// 第二步：找形参和变量声明，将变量和形参作为AO对象的属性名，值统一为undifined.
// 第三步：形参值和实参值相统一。
// 第四步：在函数体里找函数声明，将函数体作为其值。


a = 100;
function demo(e) {
    function e() { }
    arguments[0] = 2;
    console.log(e); //2
    if (a) {
        var b = 123;
        function c() {

        }
    }
    var c;
    a = 10;
    var a;
    console.log(b) //undified
    f = 123;
    console.log(c); //undified fn
    console.log(a); //10
}
var a;
demo(1);
console.log(a); //100
console.log(f); //123
        /**GO{
    a: 100;
    demo:function(){},
    f:123
}*
/**
    AO{
        e:2;
        b:undified;
        c:undified fn;
        a:10;
    }
**/

