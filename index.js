// let a = 2;
// console.log(a);
// 'user strict'
// let qyw = 'qyw';
// let spesk = ${qyw};
// document.write(spesk);

//include()--->ES6
// let arr = ["qyw","邱玉微","学生"];
// let temp = "邱玉微";
// console.log(arr.includes(temp));

//复制字符串 repeat()
// console.log("*".repeat(2));

// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(123));
// console.log(Number.isNaN({}));
// console.log(Number.isNaN("taiji"));
// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN(parseInt("abc")));

// let json = {
//     '0':'qq',
//     '1':'邱玉微',
//     '2':'学生',
//     length:3
// }
// console.log(json);
//把json数组转换成array  Array.from
// let arr = Array.from(json);
// console.log(arr);

//Array.of
// let arr = Array.of(4,5,6);
// console.log(arr);

//for..of数组索引循环
// let arr = ["qyw","邱玉微","学生"];
// for (let index of arr.keys()){
//     console.log(index);
// }

//同时输出索引的内容和索引 entries
// let arr = ["qyw","邱玉微","学生"];
// for (let [index,val] of arr.entries()){
//     console.log(index+":"+val);
// }

//find() 实例方法
// let arr = [1,2,3,4,5,6];
// console.log(arr.find(function (value,index,arr) {
//     return value>2;
// }))

//fill()  索引值是左闭右开
// let arr = ["qyw","邱玉微","学生"];
// console.log(arr.fill("仁爱学生",2,3));

//entries() 切分数组
// let arr = ["qyw","邱玉微","学生"];
// let list = arr.entries();
// console.log(list.next().value);
// console.log(list.next().value);
// console.log(list.next().value);

// 'user strict'   //ES5 严谨模式
// function add(a,b) {
//     //'user strict' //ES6
//     return a+b;
// }
// console.log(add(1,2));

//ES6箭头函数
// var add = (a,b=2)=>a+b;
// console.log(add(1));

//对象的函数解构 json
// let a= undefined;
// function fun(a=4) {
//     console.log(a);
// }
// fun(a);
// let json = {
//     a:"qyw",
//     b:undefined
// }
// function fun(a) {
//     console.log(a,b="web");
// }
// fun(json);

//数组解构
// let arr = ['qyw','邱玉微','学生'];
// function fun(a,b,c,d){
//     console.log(a,b,c,d);
// }
// fun(...arr);

//in 用法
// let obj ={
//     a:'qyw',
//     b:'邱玉微'
// };
// console.log('c' in obj);    //c 指索引值

//数组判断
// let arr = [,,,];         //不给值默认为undefined
// console.log(arr.length); //3
// console.log(0 in arr);   //判断索引为0的值是否为null

//数组遍历
// let arr = ["qyw","邱玉微","学生"];
//forEach
// arr.forEach(((value, index) => console.log(index,value)));
//filter
// arr.filter(x => console.log(x));
//some
// arr.some(x => console.log(x));
//map替换
// console.log(arr.map(x=>"web"));
//数组转换成字符串  join
// console.log(arr.toString());
// console.log(arr.join("//"));

//对象赋值
// let name = "qyw";
// let school = "Renai";
// var obj = {name,school};
// console.log(obj);

//key值构建
// let name = "qyw";
// let obj = {
//     [name]: "邱玉微"
// }
// console.log(obj);

//自定义对象方法
// let obj = {
//     add:function (a,b) {
//         return a+b;
//     }
// }
// console.log(obj.add(1,2));

//Object.is() 对象比较
// let obj1 = {name:'qyw'};
// let obj2 = {name: 'qyw'};
// console.log(obj1.name===obj2.name);
// console.log(Object.is(obj1.name,obj2.name));
// //===同值相等，is严格相等
// console.log(+0===-0);
// console.log(NaN===NaN);     //NaN 非数字的数字类型
// console.log(Object.is(+0,-0));
// console.log(Object.is(NaN,NaN));

//assion  合并/复制对象的属性
// let a = {a:"qyw"};
// let b = {b:"邱玉微"};
// let c = {c:"web"};
// let d = Object.assign(a,b,c);
// console.log(d);

//Symbol     相当于数据类型
// let a = new String;
// let b = new Number;
// let c = new Boolean;
// let d = new Array;
// let e = new Object;
// let f = Symbol();
// console.log(typeof(d));

//Symbol的打印
// let qyw = Symbol("邱玉微");
// console.log(qyw);
// console.log(qyw.toString());

//Symbol在对象中的应用
// let qyw = Symbol();
// let obj = {
//     [qyw]:"邱玉微"
// };
// console.log(obj[qyw]);
// obj[qyw] = '学生';
// console.log(obj[qyw]);

//Symbol对象元素的保护作用
// let obj = {name:'qyw',skill:'web'};
// let age = Symbol();
// obj[age]=18;
// console.log(obj);
// for (let item in obj){
//     console.log(obj[item]);
// }
// console.log(obj[age]);

//set的声明
// let setArr = new Set(['qyw','邱玉微','web']);
// setArr.add('Java');
// console.log(setArr);
//has查找set中的值
// console.log(setArr.has('qyw'));
//set值的增删改查
// setArr.delete('web');   //删除一个
// setArr.clear();         //删除全部
// console.log(setArr);
//循环输出----for..of
// for(let item of setArr){
//     console.log(item);
// }
//循环输出----forEach
// setArr.forEach(value => console.log(value));
//size属性    可获得Set值的数量
// console.log(setArr.size);

//WeakSet的声明
// let weakObj = new WeakSet();
// let obj = {a:"qyw",b:"邱玉微"};
// // let obj1 = obj;                     //打印一个
// let obj1 = {a:"qyw",b:"邱玉微"};       //打印两个
// weakObj.add(obj);
// weakObj.add(obj1);
// console.log(weakObj);

//map数据类型
//json
// let json = {
//     name:'qyw',
//     skill:'web'
// };
// console.log(json.name);
//=>
// var map = new Map();
// map.set(json,'I am');
// console.log(map);       //Map(1) {{…} => "I am"}
// map.set('qyw',json);
// console.log(map);       //Map(2) {{…} => "I am", "qyw" => {…}}
//map增删查
//get 取值
// console.log(map.get('qyw'));
//delete  删除特定值
// map.delete(json);
// console.log(map);
//clear  删除全部值
// map.clear();
//size
// console.log(map.size);
//has
// console.log(map.has('qyw'));