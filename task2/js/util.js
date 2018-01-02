
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    // your implement
    return Object.prototype.toString.call(arr).slice(8,-1)==='Array';

}

var arr = [];
console.log(isArray(arr));

function isFunction(fn) {
    return Object.prototype.toString.call(fn)==='[object funtion]';
}

//了解值类型和引用类型的区别，了解各种对象的读取、遍历方式，并在util.js中实现以下方法：
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(o, c) {
    // your implement
    c = c || {};
    for(sub in o) {
    	if(!o.hasOwnProperty(sub)) {
    		continue;
    	}

    	if(typeof sub === 'object') {
    		var c = Array.isArray(sub) ? [] : {};
    		cloneObject(sub, c);

    	}
    	else {
    		c[sub] = o[sub]; 
    	}

    }
    return c;
}

// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log("abObj.a",abObj.a);
console.log("abObj.b.b1[0]",abObj.b.b1[0]);

console.log("tarObj.a",tarObj.a);      // 1
console.log("tarObj.b.b1[0]",tarObj.b.b1[0]);    // "hello"




/*   第三节 学习数组、字符串、数字等相关方法，在util.js中实现以下函数   */


// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    // your implement
    var ans = [];
    var temp = {};
    arr.forEach(function(val, index){
    	if(!temp[val]){
    		temp[val] = 1;
    		ans.push(val);
    	}

    });
    return ans;
}

// 使用示例
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]
                
// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    // your implement
    return str.replace(/^\s*|\s*$/g,"");

}

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    // your implement
    return str.replace(/^\s*|\s*$/g,"");
}

// 使用示例
var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'

//debugger;
// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    // your implement
    // arr.forEach(fn);
    for (var i = 0; i < arr.length; i++) {
    	  fn.call(null,arr[i],i);
    }
    console.log('each finished');
}

// 其中fn函数可以接受两个参数：item和index

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
var output = function (item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html
// 使用示例
var arr = ['java', 'c', 'php', 'html'];
output = function(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    return Object.keys(obj).length;
}

// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3




/*先来一些简单的，在你的util.js中完成以下任务：*/


// 为element增加一个样式名为newClassName的新样式

function addClass(element, newClassName) {
    // your implement
    var clist = element.className.split('');
    if(clist.indexof(newClassName) === -1) {
    	clist.push(newClassName);
    }

    element.className = clist.join('');
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // your implement
    var clist = element.className.split('');
    var index = clist.indexof(oldClassName);
    if(index > -1) {
    	clist.splice(index,1);
    }

    element.className = clist.join('');
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    // your implement
    return element.parentNode && siblingNode.parentNode && element.parentNode === siblingNode.parentNode;

}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
    var reObj = element.getBoundingCliectRect();

    return {
    	x: reObj.left,
    	y: reObj.top
    }
}
// your implement

// 实现一个简单的Query
function $(selector) {

    var seleArr = selector.split('');
    var DomObj = null;
    var parent = document;
    for (var i = 0,len = seleArr.length; i < len; i++) {
        DomObj = getDOMObject(seleArr[i], parent);
        parent = DomObj;
    }

    return DomObj;
    
}

/**
 * [getDOMObject description]
 * @param  {[string]}     str     [一种选择器类型的字符串描述]
 * @param  {[父节点list]} parent  [DOMlist]
 * @return {[DOM]}                [$选择的DOM]
 */
function getDOMObject(str, parent) {
    var ans = null;
    var temp = null ;
    if(str[0] === '#') {
        var id  = str[0].slice(1);

        ans = parent.getElementById(id);
    }
    else if(str[0] === '.') {
        var clName = str[0].slice(1);
		    temp = parent.getElementsByTagName('*');
        for (var i = 0,len = temp.length; i < len; i++) {
            if(len[i].className === clName){
                ans = len[i];
                break;
            }
        }
    }
    else if(str[0] === '[') {
        var attr = str[0].slice(1,-1);
		    temp = parent.getElementsByTagName('*');
        for (var i = 0,len = temp.length; i < len; i++) {
            if(len[i].hasAttribute(attr)){
                ans = len[i];
                break;
            }
        }
    }
    else {
        ans = parent.getElementsByTagName(str[0]);
    }

    return ans;

}

function findById(str) {
    var id  = str[0].slice(1);

    return document.getElementById(id);
}

function findByClassName(str) {
    var clName = str[0].slice(1);
    var ans = null;
    var temp = document.getElementsByTagName('*');
    for (var i = 0,len = temp.length; i < len; i++) {
        if(len[i].className === clName){
            ans = len[i];
            break;
        }
    }

    return ans;
}

function findByTagName(str) {

    return document.getElementsByTagName(str[0]);
}

function findByAttr(str) {
    var attr = str[0].slice(1,-1);
    var ans = null;
    var temp = document.getElementsByTagName('*');
    for (var i = 0,len = temp.length; i < len; i++) {
        if(len[i].hasAttribute(attr)){
            ans = len[i];
            break;
        }
    }

    return ans;
}

// 可以通过id获取DOM对象，通过#标示，例如
$("#adom"); // 返回id为adom的DOM对象

// 可以通过tagName获取DOM对象，例如
$("a"); // 返回第一个<a>对象

// 可以通过样式名称获取DOM对象，例如
$(".classa"); // 返回第一个样式定义包含classa的对象

// 可以通过attribute匹配获取DOM对象，例如
$("[data-log]"); // 返回第一个包含属性data-log的对象

$("[data-time=2015]"); // 返回第一个包含属性data-time且值为2015的对象

// 可以通过简单的组合提高查询便利性，例如
$("#adom .classa"); // 返回id为adom的DOM所包含的所有子节点中，第一个样式定义包含classa的对象


//我们来继续用封装自己的小jQuery库来实现我们对于JavaScript事件的学习，还是在你的util.js，实现以下函数

// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    // your implement
    if(element.addEventListener) {
    	element.addEventListener("click",listener,false);
    }
    else {

        element.attachEvent("on"+type,listener);
    }

}

// 例如：
function clicklistener(event) {
    event = event || window.event;
    var target = event.target || event.srcElement;

}
addEvent($("#doma"), "click", a);

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    // your implement
    if(element.removeEventListener) {
    	element.removeEventListener(event,listener);
    }
    else{
    	element.detachEvent('on'+event,listener);
    }
}
// 接下来我们实现一些方便的事件方法

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    // your implement
    addEvent(element,'click',listener);
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    // your implement
    addEvent(element,'Enter',listener);
}

$.on = addEvent;
$.un = removeEvent;
$.click = addClickEvent;
$.Enter = addEnterEvent;

// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    // your implement
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    // your implement
}

// 获取cookie值
function getCookie(cookieName) {
    // your implement
}


