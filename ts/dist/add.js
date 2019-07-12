"use strict";
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
    sex[sex["girl"] = 1] = "girl";
    sex[sex["se"] = 2] = "se";
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
var Person = (function () {
    function Person(name, age) {
        console.log(name);
        this.name = name,
            this.age = age;
    }
    Person.prototype.say = function () {
        console.log('hello' + name);
    };
    return Person;
}());
