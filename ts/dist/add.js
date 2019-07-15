"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = true;
var age = 28;
var myName = "某某某";
var pets1 = ["旺财", "小黑"];
var pets2 = ["旺财", "小黑"];
var pets3 = [{ name: "旺财" }, { name: "小黑" }];
var pets4 = [{ name: "旺财" }, { name: "小黑" }];
var arr1 = ["hello swr", 28];
var arr2 = ["hello swr", 28, true];
var person = ['某某某', 28];
var sex;
(function (sex) {
    sex[sex["boy"] = 0] = "boy";
    sex[sex["girl"] = 5] = "girl";
    sex[sex["se"] = 6] = "se";
})(sex || (sex = {}));
var orderStatus;
(function (orderStatus) {
    orderStatus["WAIT_FOR_PAY"] = "\u5F85\u652F\u4ED8";
    orderStatus["UNDELIVERED"] = "\u5B8C\u6210\u652F\u4ED8\uFF0C\u5F85\u53D1\u8D27";
    orderStatus["DELIVERED"] = "\u5DF2\u53D1\u8D27";
    orderStatus["COMPLETED"] = "\u5DF2\u786E\u8BA4\u6536\u8D27";
})(orderStatus || (orderStatus = {}));
var person2 = "某某某";
person2 = 28;
var str1;
str1 = "hello swr";
str1 = 28;
str1 = null;
str1 = undefined;
function say(name) {
    console.log("hello1", name);
    return undefined;
}
var xx;
function error(message) {
    throw new Error(message);
}
function loop() {
    while (true) {
        console.log("陷入死循环啦");
    }
}
function parse(str) {
    return JSON.parse(str);
}
var json2 = parse("1515");
function say5() {
    return "ok";
}
function say7(name) {
    console.log("hello", name);
}
function say8(name, age) {
    console.log("hello", name, age);
}
function ajax(url, method) {
    if (method === void 0) { method = "GET"; }
    console.log(url, method);
}
function sum(a) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(args);
    return eval(args.join("+"));
}
function pickCard(x) {
    if (typeof x == "object") {
        console.log(1);
    }
    else if (typeof x == 'number') {
        console.log(2);
    }
}
var Person2 = (function () {
    function Person2(name, age) {
        console.log(name);
        this.name = name,
            this.age = age;
    }
    Person2.prototype.say = function () {
        console.log('hello' + name);
    };
    return Person2;
}());
var Person1 = (function () {
    function Person1(name, age) {
        this.name = name,
            this.age = age;
    }
    Person1.prototype.say = function () {
        console.log('hello' + name);
    };
    return Person1;
}());
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.say = function () {
        return "hello swr";
    };
    return Person;
}());
var Child = (function (_super) {
    __extends(Child, _super);
    function Child(name, age, childName) {
        var _this = _super.call(this, name, age) || this;
        _this.childName = childName;
        return _this;
    }
    Child.prototype.childSay = function () {
        return this.childName;
    };
    return Child;
}(Person));
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Person6 = (function (_super) {
    __extends(Person6, _super);
    function Person6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Person6.prototype.eat = function () {
        console.log("吃米饭");
    };
    return Person6;
}(Animal));
function getUserInfo(user) {
    console.log(user.name + " " + user.age);
}
var total = function (a, b) {
    return a + b;
};
var arr = ['规范数组', 'iamswr'];
console.log(arr);
var Person9 = (function () {
    function Person9(name) {
        this.name = name;
    }
    Person9.prototype.eat1 = function (any) {
        console.log("\u5403" + any);
    };
    Person9.prototype.sleep = function () {
        console.log('睡觉');
    };
    return Person9;
}());
var Person10 = (function () {
    function Person10(name) {
        this.name = name;
    }
    Person10.prototype.eat = function (any) {
        console.log("\u5403" + any);
    };
    Person10.prototype.sleep = function () {
        console.log('睡觉');
    };
    return Person10;
}());
function deal(value) {
    return value;
}
var MyMath = (function () {
    function MyMath() {
        this.arr = [];
    }
    MyMath.prototype.add = function (value) {
        this.arr.push(value);
    };
    return MyMath;
}());
var mymath = new MyMath();
mymath.add(1);
mymath.add(2);
mymath.add(3);
