// ctrl +shift +L 每行的行未
// home + end 利用数组分离 html 文档
// 注意 空行和 单引号html标签
//http://www.css88.com/tool/html2js/
var arr = 
['<!DOCTYPE html>',
    '<html lang="en"><head>',
    '    <meta charset="UTF-8">',
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
    '    <meta http-equiv="X-UA-Compatible" content="ie=edge">',
    '    <title>Document</title>',
    '    <link rel="stylesheet" href="css/ie8index.css">',
    '    <!-- <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.js"></script> -->',
    '    <!--[if lt IE 9]>',
    '	<script src="bower_components/html5shiv/dist/html5shiv.js"></script>',
    '<![endif]-->',
    '    <!--[if lte IE 8]>',
    '<script src="http://cdn.bootcss.com/jquery/1.9.0/jquery.min.js"></script>',
    '<![endif]-->',
    '</head><body>',
    '    <div class="container">',
    '        <div class="head">',
    '            <p>GTD Tools</p>',
    '        </div>',
    '        <div class="theme">',
    '            <div class="left">',
    '                <div class="left-head">',
    '                    <div class="allTasks com-hover">',
    '                        <span>所有任务</span>',
    '                   <span id="allTasksBra" class="bracket">(11)</span>',
    '                    </div>',
    '                </div>',
    '                <div class="left-classify">',
    '                    <div class="left-classhead ">',
    '                        <span>分类列表</span>',
    '                    </div>',
    '                    <div class="com-classify">',
    '                        <div class="com-classwrap">',
    '                            <div class="com-classhead com-hover com-selected">',
    '                                <span class="comicon-file"></span>',
    '                                <div class="com-head">默认分类</div>',
    '                                <span class="comicon-delete dele-defalut"></span>',
    '                            </div>',
    '                        </div>',
    '                        <ul class="com-nav1">',
    '                            <li>',
    '                                <div class="Tasks com-hover task1">',
    '                                    <span class="taskhead">task3</span>',
    '                                    <span class="bracket">(1)</span>',
    '                                </div>',
    '                            </li>',
    '                            <li>',
    '                                <div class="Tasks com-hover task2">',
    '                                    <span class="taskhead">task2</span>',
    '                                    <span class="bracket">(6)</span>',
    '                                </div>',
    '                            </li>',
    '                            <li>',
    '                                <div class="Tasks com-hover task3">',
    '                                    <span class="taskhead">task3</span>',
    '                                    <span class="bracket">(4)</span>',
    '                                </div>',
    '                            </li>',
    '                        </ul>',
    '                    </div>',
    '                    <div class="com-classify">',
    '                        <div class="com-classwrap">',
    '                            <div class="com-classhead com-hover ">',
    '                                <span class="comicon-file"></span>',
    '                                <div class="com-head">新分分类</div>',
    '                                <span class="comicon-delete"></span>',
    '                            </div>',
    '                        </div>',
    '                        <ul class="com-nav1">',
    '                            <li>',
    '                                <div class="Tasks com-hover task3">',
    '                                    <span class="taskhead">task3</span>',
    '                                    <span class="bracket">(1)</span>',
    '                                </div>',
    '                            </li>',
    '                            <li>',
    '                                <div class="Tasks com-hover task1">',
    '                                    <span class="taskhead">task1</span>',
    '                                    <span class="bracket">(6)</span>',
    '                                </div>',
    '                            </li>',
    '                            <li>',
    '                                <div class="Tasks com-hover task2">',
    '                                    <span class="taskhead">task2</span>',
    '                                    <span class="bracket">(4)</span>',
    '                                </div>',
    '                            </li>',
    '                        </ul>',
    '                    </div>',
    '                </div>',
    '                <div class="left-foot">',
    '                    <div id="leftFoot" class="com-add com-hover">',
    '                        <span class="comicon-add"></span>',
    '                        <span>新增分类</span>',
    '                    </div>',
    '                </div>',
    '            </div>',
    '            <div class="middle">',
    '                <div class="md-head">',
    '                    <ul class="md-nav">',
    '                        <li class="com-hover com-selected">所有</li>',
    '                        <li class="com-hover">未完成</li>',
    '                        <li class="com-hover">已完成</li>',
    '                    </ul>',
    '                </div>',
    '                <div class="md-tasks">',
    '                    <div class="task1" style="display:none">',
    '                        <div class="com-tasksByDate">',
    '                            <div class="com-date">2017-04-28</div>',
    '                            <ul class="com-nav">',
    '                                <li class="unfulfilled com-hover" title="wancheng1">to-do1</li>',
    '                                <li class="fulfilled com-hover" title="wancheng2">to-do2</li>',
    '                            </ul>',
    '                        </div>                        <div class="com-tasksByDate">',
    '                            <div class="com-date">2017-04-18</div>',
    '                            <ul class="com-nav">',
    '                                <li class="fulfilled com-hover" title="to-do1">to-do1</li>',
    '                                <li class="unfulfilled com-hover" title="to-do2">to-do2</li>',
    '                            </ul>',
    '                        </div>',
    '                        <div class="com-tasksByDate">',
    '                            <div class="com-date">2017-02-22</div>',
    '                            <ul class="com-nav">',
    '                                <li class="fulfilled com-hover" title="to-do1">to-do1</li>',
    '                                <li class="unfulfilled com-hover" title="to-do2">to-do2</li>',
    '                            </ul>',
    '                        </div>',
    '                        <div class="com-tasksByDate">',
    '                            <div class="com-date">2017-03-28</div>',
    '                            <ul class="com-nav">',
    '                                <li class="unfulfilled com-hover" title="to-do1">to-do1</li>',
    '                                <li class="fulfilled com-hover" title="to-do2">to-do2</li>',
    '                            </ul>',
    '                        </div>',
    '                    </div>',
    '                    <div class="task2" style="display:none">                        <div class="com-tasksByDate">',
    '                            <div class="com-date">2015-05-28</div>',
    '                            <ul class="com-nav">',
    '                                <li class="fulfilled com-hover" title="to-do1">to-do1</li>',
    '                                <li class="fulfilled com-hover" title="to-do2">to-do2</li>',
    '                                <li class="unfulfilled com-hover" title="to-do3">to-do3</li>',
    '                                <li class="unfulfilled com-hover" title="to-do4">to-do4</li>',
    '                            </ul>',
    '                        </div>',
    '                        <div class="com-tasksByDate">',
    '                            <div class="com-date">2015-05-28</div>',
    '                            <ul class="com-nav">',
    '                                <li class="fulfilled com-hover" title="to-do1">to-do1</li>',
    '                                <li class="unfulfilled com-hover" title="to-do2">to-do2</li>',
    '                            </ul>',
    '                        </div>',
    '                    </div>',
    '                    <div class="task3" style="display:none">',
    '                        <div class="com-tasksByDate">',
    '                            <div class="com-date">2016-07-20</div>',
    '                            <ul class="com-nav">',
    '                                <li class="fulfilled com-hover" title="to-do1">to-do1</li>',
    '                                <li class="unfulfilled com-hover" title="to-do2">to-do2</li>',
    '                            </ul>',
    '                        </div>',
    '                        <div class="com-tasksByDate">',
    '                            <div class="com-date">2016-07-22</div>',
    '                            <ul class="com-nav">',
    '                                <li class="fulfilled com-hover" title="to-do1">to-do1</li>',
    '                                <li class="unfulfilled com-hover" title="to-do2">to-do2</li>',
    '                            </ul>',
    '                        </div>',
    '                        <div class="com-tasksByDate">',
    '                            <div class="com-date">2016-07-24</div>',
    '                            <ul class="com-nav">',
    '                                <li class="unfulfilled com-hover" title="to-do1">to-do1</li>',
    '                            </ul>',
    '                        </div>',
    '                    </div>',
    '                </div>',
    '                <div class="md-add">',
    '                    <div class="com-add com-hover">',
    '                        <span class="comicon-add"></span>',
    '                        <span>新增任务</span>',
    '                    </div>',
    '                </div>',
    '            </div>',
    '            <div class="right">',
    '                <div class="right-head">',
    '                    <div class="com-righthead">',
    '                        <input type="text" class="todohead">',
    '                        <span class="validate" style="display:none">字符1-10位</span>',
    '                        <div class="com-icon" style="display:none">',
    '                            <span class="comicon-write"></span>',
    '                            <span class="comicon-fulled"></span>',
    '                        </div>',
    '                    </div>',
    '                </div>',
    '                <div class="right-date">',
    '                    <div class="datewrap">',
    '                        <span>任务日期:</span>',
    '                        <input type="text" class="datetext">',
    '                        <span class="validate" style="display:none">字符1-10位</span>',
    '                    </div>',
    '                </div>',
    '                <div class="right-foot">',
    '                    <div class="writable">',
    '                        <textarea name="tarea" id="tarea" cols="100" rows="10" onpropertychange="checkLen(this,200);" oninput="checkLen(this,200);"',
    '                            onkeyup="checkLen(this,200);"></textarea>',
    '                    </div>',
    '                    <div class="count">',
    '                        <span>0</span>                        <span>/200</span>',
    '                    </div>',
    '                    <div class="bt-group"> ',
    '                        <button>添加/更新</button>',
    '                        <button>删除</button>',
    '                    </div>',
    '                </div>',
    '            </div>',
    '        </div>',
    '    </div>',
    '    <script src="js/ie8index.js"></script>',
    '</body></html>'].join('');
console.log(arr);
function findLabel(arr) {
    var strArr = arr.match(/<\w+/ig);
    strArr = strArr.join(" ").replace(/</g,'').split(' ');
    var set = new Set(strArr);
    strArr = Array.from(set);
    strArr = strArr.join(" ").replace(/head|meta|title|link|script/g,'').split(' ');
    for (let i = 0 ; i < strArr.length; i++) {
        if(strArr[i]===''){
            strArr.splice(i,1);
            i--;
        }
    }
    return strArr;    
}
arr = findLabel(arr);
console.log(arr.join(","));
debugger;
    