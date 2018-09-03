/**
 * es6常用代码片段
 */
//一、数组
//1.遍历
let arr = [1,2,3,4]
arr.forEach(v=>{
    console.log(v)
})
//遍历数组。打印结果：
1 
2 
3 
4


console.log(arr.map(v=>(v*2)))//map方式，数组每一项乘以2，然后生成一个新的数组。打印结果：[2,4,6,8]
console.log(arr.every(v=>v>0))//做数组判断,判断是否每一项都大于0.打印结果：true
console.log(arr.filter(v=>v>3))//过滤数组，保留大于3的。打印结果：[4]

//2.数组去重
let arr1 = [1,2,3,4]
let arr2 = [4,3,6,8]
console.log([...new Set([...arr1,...arr2])])
//3.数组拼接
console.log(arr1.concat(arr2))//原生js concat方式
console.log([...arr1,...arr2])//...方式


//一、对象
const obj1={
    name:'Kitty',
    age:2
}
const obj2={
    fullName:'Jhon-kitty',
    sex:'male'
}
//遍历
Object.keys(obj1).forEach(v=>{
    console.log(v,obj1[v])
})

//对象扩展符
console.log({...obj1,job:'eat',age:3})//对象扩展符
console.log({...obj1,...obj2,job:'eat',age:3})//对象合并