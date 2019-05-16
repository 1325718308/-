主流浏览器

	浏览器			内核

	IE			trident
	Chorme			webkit/blink
	firefox			Gecko
	Opera			presto
	Safari			webkit


javascript数据类型

	原始值：（存储在栈列stack）
		Number,String，Boolean, unfifined,null



	引用值：（存储在堆里heap）
		array,Object,function,...date RegExp



预编译

第一步、

1、创建AO(Activation Object) 对象，也叫执行期上下文

2、找形参和变量声明，将变量和形参名作为AO属性名，值为undifined

3、形参值和实参值相统一

4、在函数体里找函数声明，将函数体作为其值

第二步、

1、开始执行函数


js闭包:

	1、什么是闭包?
		简单来说，闭包就是在一个定义在函数内部的函数，或者将一个函数内部的函数保存在外部，由于在js 中存在作用域的问题，
		所以在函数内部定义的变量在外部是无法直接获取的。而闭包就是函数内部和外部的桥梁，这样在函数外部接可以得到函数内
		部的值。并且闭包可以实现函数属性和方法的私有化。

	2、闭包有什么危害？
		因为闭包会将内部变量储存在内存中，如果长时间不清除的话会造成内存泄漏的问题，影响程序的性能。

	3、如何解决闭包带来的危害？
		因为闭包会将内部变量储存在内存中，如果长时间不清除的话会造成内存泄漏的问题，影响程序的性能。解决方法：对于不使
		用的变量及时的清除。

es6中箭头函数和普通函数的区别:

	1、箭头函数是匿名函数，不能作为构造函数，不能使用new。
	2、箭头函数不绑定arguments，用...代替
		function A(a){
			console.log(arguments);
		}
		let B=(b)=>{
			console.log(arguments);
		}
		let C = (...c) => {
  			console.log(c);
		}

		A(1,2,3,4,5); // [1, 2, 3, 4, 5, 8, callee: ƒ, Symbol(Symbol.iterator): ƒ]
		B(1,2,3,4,5); // // Uncaught ReferenceError: arguments is not defined
		C(1,2,3,4,5); // [3, 82, 32, 11323]

	3、箭头函数通过call()或apply()方法调用时，对this并没有影响，但是普通函数是可以通过call()或apply()改变this的指向的。
		let obj = {
    			a: 10,
    			b: function(n) {
        		let f = (n) => n + this.a;
        		return f(n);
    		},
   			c: function(n) {
        		let f = (n) => n + this.a;
       			let m = {
            		a: 20
        		};
        		return f.call(m,n); //箭头函数通过call/apply调用时，不会改变this指向，所以这里的this还是obj
    		},
   	 		d: function(n) {
        		let f = function(n){ return (n + this.a)}
        		let m = {
            		a: 20
        		};
        		return f.call(m,n); //通过call改变了this指向,所以这里的this指向了m
    		}
		};
		console.log(obj.b(1));  // 11
		console.log(obj.c(1)); // 11
		console.log(obj.d(1)); // 21

	4、箭头函数没有圆形属性
		var a=()=>{
			return 1;
		}

		function b() {
			return 2;
		}

		console.log(a.prototype) //undifined
		console.log(b.prototype) //{constructor: ƒ}

	5、this的区别
		普通函数的this指向它的直接调用者，箭头函数this指向它所处的对象；

		普通函数的this:
		//匿名函数定时器setTimeOut由于没有默认的宿主对象,所以默认this指向window
		var obj = {
			say:function(){
				setTimeOut(function (){
					console.log(this)
				})
			}
		}

		var obj1 = {
			say:function(){
				console.log(this)
			}
		}
		obj.say() //window
		obj1.say() //obj1
		箭头函数this:
		//箭头函数在obj的作用域中，所以this指向obj
		var obj3 = {
			say:function(){
				setTimeOut(()=>{
					console.log(this)
				})
			}
		}
		obj3.say() //obj3

webpack
	
	webpack 是一个前端模块化打包工具，主要由入口，出口，loader，plugins四个部前端的打包工具还有一个gulp，
	不过gulp侧重于前端开发的过程，而webpack侧重于模块，例如他会将css文件看作一个模块，通过css-loader将
	css打包成符合css的静态资源。

react 性能优化

	（1）重写shouldComponentUpdate()来避免不必要的操作；

		shouldComponentUpdate(){
			if(某个状态变化){
				return true //更新dom
			}else{
				return false //阻止更新
			}
		}

	（2）使用key来帮助React识别列表中所有子组件的最小变化。

react中组件传值
	
	父传子：props
	子传父：函数回调
	兄弟组件：函数回调、emit事件监听


		


		

