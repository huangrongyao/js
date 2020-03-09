# Dart 入门
Dart是由谷歌开发的计算机编程语言,它可以被用于web、服务器、移动应用 和物联网等领域的开发。Dart诞生于2011年，号称要取代JavaScript。但是过去的几年中一直不温不火。直到Flutter的出现现在被人们重新重视。

要学Flutter的话我们必须首先得会Dart。

[Dart官网](https://dart.dev/ "Dart官网")

## Dart 开发工具：
Dart的开发工具有很多： IntelliJ IDEA  、 WebStorm、 Atom、Vscode等
在Vscode中配置Dart的插件：
1、找到vscode插件安装dart
2、找到vscode插件安装code runner     Code Runner  可以运行我们的文件
## 入口函数

## 定义变量
1. dart是一个强大的脚本类语言，可以不预先定义变量类型 ，自动会类型推倒
2. dart中定义变量可以通过var关键字也可以通过类型来申明变量
```dart
 var str='this is var';
 String str='this is var';
 int str=123;
```
注意：var 和 类型不要同时写

## 定义常量
Dart中使用final 和 const修饰符来定义常量
1. const值不变 一开始就得赋值
2. final 可以开始不赋值 只能赋一次 ; 而final不仅有const的编译时常量的特性，最重要的它是运行时常量，并且final是惰性初始化，即在运行时第一次使用前才初始化
```dart
const PI=3.14159;
final PI=3.14159;
```
3. 永远不改量的量，请使用final或const修饰它，而不是使用var或其他变量类型。
4. 区别：final 可以开始不赋值 只能赋一次 ; 而final不仅有const的编译时常量的特性，最重要的它是运行时常量，并且final是惰性初始化，即在运行时第一次使用前才初始化

## 命名规则
1. 变量名称必须由数字、字母、下划线和美元符($)组成。
2. 注意：标识符开头不能是数字。
3. 标识符不能是保留字和关键字。
4. 变量的名字是区分大小写的如: age和Age是不同的变量。在实际的运用中,也建议,不要用一个单词大小写区分两个变量。
5. 标识符(变量名称)一定要见名思意 ：变量名称建议用名词，方法名称建议用动词

## 常用数据类型

#### 字符串（Strings）
##### 1. 字符串的定义方式

1.1 用var定义字符串 定义时会自动推断变量的类型（不能再赋值其他类型了）
```dart
var str1 = 'this is str1';
var str2 = "this is str2";
var str3 = '''this is str3''';
var str4 = """this is str4
this is str4""";
```
1.2 通过类型关键字来声明字符串
```dart
String str1='this is str1';
String str2="this is str2";
String str3='''this is str3''';
String str4="""this is str4
this is str4""";
```
三个单引号或者双引号 支持换行

##### 2. 字符串的拼接
```dart
  String str1 = '你好';
  String str2 = 'Dart';
  print("$str1 $str2");  // 你好Dart
  print(str1 + str2);    // 你好Dart
  print(str1 + " " + str2); // 你好 Dart
```

#### 数值类型
1. int（整型）
```dart
 int a = 123
```
2. double（浮点型）
```dart
 double b = 123.12
```

#### 布尔类型 bool
 ```dart
bool flag = false
```
注意:Dart中判断相等用== ,不会进行类型转换,也没有===
```dart
var a = 123;
var b = '123';
print(a == b)  // false
```
#### 数组/集合类型 List
 1. 第一种定义List的方式
 ```dart
    var l1=['aaa','bbbb','cccc'];
    print(l1);
    print(l1.length);
    print(l1[1]);
```
 2. 第二种定义List的方式
 ```dart
    var l2=new List();
    l2.add('张三');
    l2.add('李四');
    l2.add('王五');
    print(l2);
    print(l2[2]);
```
 3. 定义List指定类型
```dart
    var l3=new List<String>();
    l3.add('张三');
    l3.add(123); // 报错
    print(l3);
```

#### 字典类型 Maps 类似对象
1. 第一种定义 Maps的方式
```dart
    var person={
      "name":"张三",
      "age":20,
      "work":["程序员","送外卖"]
    };
    print(person);
    print(person["name"]); // Dart不能用点语法了
    print(person["age"]);
    print(person["work"]);
```

2. 第二种定义 Maps的方式
```dart
    var p=new Map();
    p["name"]="李四";
    p["age"]=22;
    p["work"]=["程序员","送外卖"];
    print(p);
    print(p["age"]);
```

## 判断数据类型
1. 通过is 关键字来判断数据类型
```dart
  var str=123;
  if(str is String){
    print('是string类型');
  }else if(str is int){
     print('int');
  }else{
     print('其他类型');
  }
```
2. isEmpty:判断字符串是否为空
```dart
var str='';
if(str.isEmpty){
  print('str空');
}else{
  print('str不为空');
}
```
3..isNaN:判断是否为非数字
```dart
 var myNum=0/0;
// print(myNum);
 if(myNum.isNaN){
    print('NaN');
 }
```

## 数据类型的转换

1. Number类型转换成String类型 toString()
```dart
var myNum=12;
var str=myNum.toString();
print(str is String);
```

2. String类型转成Number类型  int.parse()/double.parse()
```dart
String str='123';
var myNum=int.parse(str);
print(myNum is int);
```
```dart
String str='123.1';
var myNum=double.parse(str);
print(myNum is double);
```
```dart
// try  ... catch
String price='';
try{
   var myNum=double.parse(price); // 转换失败会报错
   print(myNum);
}catch(err){
   print(0);
}
```

## 赋值运算中的++ 和 - -

在赋值运算里面 如果++ -- 写在前面 这时候先运算 再赋值，如果++ --写在后面 先赋值后运行运算
```dart
var a=10;
var b=a--;
print(a);  //9
print(b);  //10
```

## for 循环
```dart
for (int i = 1; i<=100; i++) {
  print(i);
}
// 第一步，声明变量int i = 1;
// 第二步，判断i <=100
// 第三步，print(i);
// 第四步，i++
// 第五步 从第二步再来，直到判断为false 
```
## while 与 do while

```dart
while(表达式/循环条件){
}
do{
  语句/循环体
}while(表达式/循环条件);

注意：
1、最后的分号不要忘记
2、循环条件中使用的变量需要经过初始化
3、循环体中，应有结束循环的条件，否则会造成死循环。
```

## break 与 continue
break语句功能:
   1、在switch语句中使流程跳出switch结构。
   2、在循环语句中使流程跳出当前循环,遇到break 循环终止，后面代码也不会执行

强调:
1、如果在循环中已经执行了break语句,就不会执行循环体中位于break后的语句。
2、在多层循环中,一个break语句只能向外跳出一层
3、break可以用在switch case中 也可以用在 for 循环和 while循环中

continue语句的功能:
1、只能在循环语句中使用,使本次循环结束，即跳过循环体重下面尚未执行的语句，接着进行下次的是否执行循环的判断。
2、continue可以用在for循环以及 while循环中，但是不建议用在while循环中，不小心容易死循环

## List常用属性与方法

####常用属性：
        length          长度
        reversed        翻转
        isEmpty         是否为空
        isNotEmpty      是否不为空

####常用方法：
        add         增加
        addAll      拼接数组
        indexOf     查找  传入具体值
        remove      删除  传入具体值
        removeAt    删除  传入索引值
        fillRange   修改
        insert(index,value);            指定位置插入
        insertAll(index,list)           指定位置插入List
        toList()    其他类型转换成List
        join()      List转换成字符串
        split()     字符串转化成List
        forEach
        map
        where
        any
        every

## map常用属性与方法
####常用属性：
        keys            获取所有的key值
        values          获取所有的value值
        isEmpty         是否为空
        isNotEmpty      是否不为空

####常用方法:
        remove(key)     删除指定key的数据
        addAll({...})   合并映射  给映射内增加属性
        containsValue   查看映射内的值  返回true/false
        forEach
        map
        where
        any
        every

## 方法的定义 作用域
####自定义方法
```dart
//自定义方法的基本格式：
返回类型  方法名称（参数1，参数2,...）{
  方法体
  return 返回值;
}
```
```dart
void printInfo(){
  print('我是一个自定义方法');
}

int getNum(){
  var myNum=123;
  return myNum;
}

String printUserInfo(){

  return 'this is str';
}
```

####方法的传参 默认参数、可选参数
```dart
 String printUserInfo(String username,[String sex='男',int age]){  //行参
      if(age!=null){
        return "姓名:$username---性别:$sex--年龄:$age";
      }
      return "姓名:$username---性别:$sex--年龄保密";
    }
print(printUserInfo('小李','女',30));
```
#### 命名参数 （传参时参数名需要对应）
```dart
  String printUserInfo(String username,{int age,String sex='男'}){  //行参
      if(age!=null){
        return "姓名:$username---性别:$sex--年龄:$age";
      }
      return "姓名:$username---性别:$sex--年龄保密";
  }
  print(printUserInfo('张三',age:20,sex:'未知'));
```

## class 
Dart所有的东西都是对象，所有的对象都继承自Object类。
Dart是一门使用类和单继承的面向对象语言，所有的对象都是类的实例，并且所有的类都是Object的子类
一个类通常由属性和方法组成。

##### 面向对象编程(OOP)的三个基本特征是：封装、继承、多态
   1. 封装：封装是对象和类概念的主要特性。封装，把客观事物封装成抽象的类，并且把自己的部分属性和方法提供给其他对象调用, 而一部分属性和方法则隐藏。
   2. 继承：面向对象编程 (OOP) 语言的一个主要功能就是“继承”。继承是指这样一种能力：它可以使用现有类的功能，并在无需重新编写原来的类的情况下对这些功能进行扩展。
   3. 多态：允许将子类类型的指针赋值给父类类型的指针, 同一个函数调用会有不同的执行效果 。

```dart
class Person{
  String name="张三";
  int age=23;
  void getInfo(){
      print("${this.name}----${this.age}");
  }
  void setInfo(int age){
    this.age=age;
  }
}
void main(){
  //实例化
  Person p1=new Person();
  // print(p1.name);
  p1.setInfo(28);
  p1.getInfo();
}
```
####类中的构造函数/构造方法(实例化时会自动触发)
 1. 默认构造函数
构造函数默认是和类的名称一样
```dart
class Person{
  String name;
  int age;
 //默认构造函数
//   Person(String name,int age){
//       this.name=name;
//       this.age=age;
//   }
  //默认构造函数的简写
  Person(this.name,this.age);
  void printInfo(){
    print("${this.name}----${this.age}");
  }
}
void main(){
  Person p1=new Person('张三',20);
  p1.printInfo();
  Person p2=new Person('李四',25);
  p2.printInfo();
}
```
 2. 命名构造函数
构造函数可以写多个
```dart
class Person {
	  String name;
	  int age;
	  //默认构造函数的简写
	  Person(this.name, this.age);
	  Person.now() {
		print('我是命名构造函数');
	  }
	  Person.setInfo(String name, int age) {
		 this.name = name;
		 this.age = age;
	  }
	  void printInfo() {
		print("${this.name}----${this.age}");
	  }
}
void main() {
	  var d=new DateTime.now();   //实例化DateTime调用它的命名构造函数
	  print(d);
	  Person p1=new Person('张三', 20);   //默认实例化类的时候调用的是 默认构造函数
	  Person p2=new Person.now();   //命名构造函数
	  Person p3 = new Person.setInfo('李四', 30);
	  p1.printInfo();
}
```
 3. 类中的私有属性和私有方法
 定义私有属性和私有方法的类必须单独抽离成一个文件 
 私有属性和私有方法前面加一个_
 ```dart
	// lib/animal.dart 文件
	class Animal{
	  String _name;   //私有属性
	  int age; 
	  //默认构造函数的简写
	  Animal(this._name,this.age);
	  void printInfo(){   
		print("${this._name}----${this.age}");
	  }
	  String getName(){ 
		return this._name;
	  }
	  void _run(){
		print('这是一个私有方法');
	  }
	  execRun(){
		this._run();  //类里面方法的相互调用
	  }
	}

	// lib级目录下的其他文件
	import 'lib/Animal.dart';
	void main(){
	  Animal a=new Animal('小狗', 3);
	  print(a) // 访问不到
	  print(a.getName()); //间接的调用公有方法访问私有属性和私有方法
	  a.execRun();   //间接的调用私有方法

	}
```

 4. 类中的getter和setter修饰符的用法
```dart
	class Rect{
		num height;
		num width; 
		Rect(this.height,this.width);
		get area{
		return this.height*this.width;
		} 
		//Num area(){
		//  return this.height*this.width;
		//}
		set areaHeight(value){
		this.height=value;
		}
	}
	void main(){
		Rect r=new Rect(10,4);
		print("面积:${r.area()}");  // 40
		r.areaHeight=6;
		print(r.area); //24
	}
```

 5. 类的实例化之前赋值
 Dart中我们也可以在构造函数体运行之前初始化实例变量
 ```dart
class Rect{
  int height;
  int width;
  Rect():height=2,width=10{
    print("${this.height}---${this.width}");
  }
  getArea(){
    return this.height*this.width;
  }
}
void main(){
  Rect r=new Rect(); // 2---10
  print(r.getArea());
}
```
 6. 类中的静态属性与静态方法
 类中的静态属性和静态方法可以直接通过类来访问,非静态的属性和方法需要通过类的实例来访问
 ```dart
	class Person {
	  static String name = '张三';
	  static void show() {
		print(name);
	  }
	}

	main(){
	  print(Person.name); // '张三'
	  Person.show();  // '张三'
	}
```
 Dart中的静态成员:
  1、使用static 关键字来实现类级别的变量和函数
  2、静态方法不能访问非静态成员，非静态方法可以访问静态成员

 7. Dart中的对象操作符
    ?     条件运算符 （了解）
    as    类型转换
    is    类型判断
    ..    级联操作 （连缀）  (记住)

	```dart
	class Person {
	  String name;
	  num age;
	  Person(this.name,this.age);
	  void printInfo() {
		print("${this.name}---${this.age}");
	  }
	}

	main(){
		Person p=new Person('张三', 20);
		p?.printInfo();

		Person p1=new Person('张三', 20);
		if(p1 is Person){
			p1.name="李四";
		}
		p1.printInfo();
		print(p1 is Object);  //true

		p2=new Person('张三1', 20);
		p2.printInfo();
		(p2 as Person).printInfo();

	   Person p3=new Person('张三1', 20);
	   p3.printInfo();
	   p3..name="李四"
		 ..age=30
		 ..printInfo();
	  //  p1.name='张三222';
	  //  p1.age=40;
	  //  p1.printInfo();
	}
	```

 8. 类的继承
    1、子类使用extends关键词来继承父类
    2、子类会继承父类里面可见的属性和方法 但是不会继承构造函数
    3、子类能复写父类的方法 getter和setter
	```dart
	class Person {
	  String name;
	  num age;
	  Person(this.name,this.age); // 父类构造函数
	  Person.xxx(this.name,this.age);  // 父类命名函数
	  void printInfo() {
		print("${this.name}---${this.age}");
	  }
	}
	class Web extends Person{
	  String sex;
	  Web(String name, num age,String sex) : super(name, age){
		this.sex=sex;
	  }  // 通过super关键字给父类的构造函数传参  !!!!
		 Web(String name, num age,String sex) : super.xxx(name, age){
		this.sex=sex;
	  }  // 通过super关键字给父类的命名函数传参  !!!!
	  run(){
	   print("${this.name}---${this.age}--${this.sex}");
	  }
	}
	main(){
	  Web w=new Web('张三', 12,"男");
	  w.printInfo();
	  w.run();
	}
	```

  复写父类的方法 以及 子类里面可以调用父类的方法
  ```dart
	class Person {
	  String name;
	  num age;
	  Person(this.name,this.age);
	  void printInfo() {
		print("${this.name}---${this.age}");  
	  }
	  work(){
        print("${this.name}在工作...");
      }
	}

	class Web extends Person{
	  Web(String name, num age) : super(name, age);
	  run(){
		print('run');
		super.work();  //子类调用父类的方法 通过super关键字
	  }
	  //覆写父类的方法
	  @override       //可以写也可以不写  建议在覆写父类方法的时候加上 @override 
	  void printInfo(){
		 print("姓名：${this.name}---年龄：${this.age}"); 
	  }
	}
	main(){
	  Web w=new Web('李四',20);
	  w.printInfo();
	  w.run();
	}
```

#### Dart中抽象类

Dart抽象类主要用于定义标准，子类可以继承抽象类，也可以实现抽象类接口。
  1、抽象类通过abstract 关键字来定义
  2、Dart中的抽象方法不能用abstract声明，Dart中没有方法体的方法我们称为抽象方法。
  3、如果子类继承抽象类必须得实现里面的所有抽象方法
  4、如果把抽象类当做接口实现的话必须得实现抽象类里面定义的所有属性和方法。
  5、抽象类不能被实例化，只有继承它的子类可以

Datr中的多态：
  1、允许将子类类型的指针赋值给父类类型的指针, 同一个函数调用会有不同的执行效果 。
  2、子类的实例赋值给父类的引用。
  3、多态就是父类定义一个方法不去实现，让继承他的子类去实现，每个子类有不同的表现。（例子中的eat，run）

```dart
	// 案例：定义一个Animal 类要求它的子类必须包含eat方法

	abstract class Animal{
	  eat();   //抽象方法
	  run();  //抽象方法
	  printInfo(){
		print('我是一个抽象类里面的普通方法');
	  }
	}

	class Dog extends Animal{
	  @override
	  eat() {
		 print('小狗在吃骨头');
	  }
	  @override
	  run() {
		// TODO: implement run
		print('小狗在跑');
	  }
	  sleep(){
	    print('小狗在睡觉');
	  }
	}
	class Cat extends Animal{
	  @override
	  eat() {
		// TODO: implement eat
		print('小猫在吃老鼠');
	  }
	  @override
	  run() {
		// TODO: implement run
		print('小猫在跑');
	  }
	}

	main(){
	  Dog d=new Dog();
	  d.eat();
	  d.printInfo();

	  Cat c=new Cat();
	  c.eat();
	  c.printInfo();
	  // Animal a=new Animal();   //抽象类没法直接被实例化
	  
	  Animal d=new Dog(); // 子类的实例赋值给父类的引用(不能调用子类中自定义的方法，只能调用父类中定义的标准)
      d.eat();
	  d.sleep(); // 没法调用子类自定义，fu类中没有的方法
	}
```

#### Dart中的接口
  和Java一样，dart也有接口，但是和Java还是有区别的。
  首先，dart的接口没有interface关键字定义接口，而是普通类或抽象类都可以作为接口被实现。
  同样使用implements关键字进行实现。
  但是dart的接口有点奇怪，如果实现的类是普通类，会将普通类和抽象中的属性的方法全部需要覆写一遍。
  而因为抽象类可以定义抽象方法，普通类不可以，所以一般如果要实现像Java接口那样的方式，一般会使用抽象类。
  **建议使用抽象类定义接口**。

**抽象类中只有抽象方法，没有实际的方法，这样的类就可以当作一个接口**
**接口文件可以分离，通过import引入**
```dart
	/*
	定义一个DB库 支持 mysql  mssql  mongodb
	mysql  mssql  mongodb三个类里面都有同样的方法
	*/

// lib/Db.dart
	abstract class Db{   //当做接口   接口：就是约定 、规范
		String uri;      //数据库的链接地址
		add(String data);
		save();
		delete();   // 接口中的抽象方法子类必须全部实现
	}

// lib/Mysql.dart
    import 'Db.dart';
	class Mysql implements Db{
	  @override
	  String uri;

	  Mysql(this.uri);
	  @override
	  add(data) {
		// TODO: implement add
		print('这是mysql的add方法'+data);
	  }
	  @override
	  delete() {
		// TODO: implement delete
		return null;
	  }
	  @override
	  save() {
		// TODO: implement save
		return null;
	  }
	  remove(){
	  }
	}

//  lib同级目录下的一个文件
    import 'lib/MsSql.dart';
	main() {
	  Mysql mysql=new Mysql('xxxxxx');
	  mysql.add('1243214');
	}
```





