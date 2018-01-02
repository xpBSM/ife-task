var Eventutil = {
    addHandler: function(element, type, handler) {
        if (element.addElementListener) {
            element.addElementListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        }
    },
    removeHandler: function(element, type, handler) {
        if (element.removeListener) {
            element.removeListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        }
    },
    getEvent: function(event) {
        return event ? event : window.event;
    },
    getTarget: function(event) {
        return event.target ? event.target : event.srcElement;
    },
    preventDfault: function(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getRelatedTarget: function(event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    }
    
};

$(document).ready(function() {
    changeAllTaskNums();
    initLeftStatus();
    initTaskNum();
    $(".left-classify").on(
        "mouseover mouseout",
        comclassifyMouseHander(".com-classhead")
    );
    $(".left-classify").on("click", comclassifyClickHander);
    $("#leftFoot").on("click", addClassifyHander);
    $(".md-nav").on("click", mdnavClickHander);
    $("#midAdd").on("click", midAddTaskClickHander);
    $(".md-tasks").on("click", mdTaskClickHander);
    $('.com-icon').on('click', writeAndFinishClickHander);
    $('.todohead').on('keyup', todoheadKeyUpHander);
    $('.datetext').on('keyup', datetextKeyUpHander);
    $('.bt-group').on('click', buttonClickHander);
});
function comclassifyMouseHander(selector) {
    return function(e) {
        // console.log('enter/out');
        e = Eventutil.getEvent(e);
        var target = Eventutil.getTarget(e),
            related = Eventutil.getRelatedTarget(e),
            match;
        while (
            target &&
            target != document &&
            !(match = matches(target, selector))
        ) {
            target = target.parentNode;
        }
        if (!match) {
            return;
        }
        while (related && related != target && related != document) {
            related = related.parentNode;
        }
        if (related == target) {
            return;
        }
        // console.log(target);
        target = $(target).find(".comicon-delete");
        if (target.hasClass("dele-defalut")) {
            target.removeClass("dele-defalut");
        } else {
            target.addClass("dele-defalut");
        }
    };
}
function matches(elem, selector) {
    // the matchesSelector is prefixed in most (if not all) browsers
    var nodelist = (elem.parentNode || document).querySelectorAll(selector);
    var i = 0;
    while (nodelist[i] && nodelist[i] !== elem) i++;
    return nodelist[i] ? true : false;
}
function comclassifyClickHander(e) {
    e = Eventutil.getEvent(e);
    var target = Eventutil.getTarget(e);
    target = $(target);
    console.log(target.get(), target.hasClass("com-head"));
    //triggle ul show
    if (target.hasClass("comicon-file") ||
        target.hasClass("com-head") ||
        target.hasClass("com-classhead")) {
        target =  target.hasClass("com-classhead") ? target : target.parent();
        $(".com-classhead,.Tasks").removeClass("com-selected");
        target.addClass("com-selected");
        // classify 下的ul
        $('.md-tasks>div[class^="task"]').hide();
        initLeftAll();
        target = target.parent().next();
        if (target.css("display") === "none") {
            target.show();
        } else {
            target.hide();
        }
    } else if (
        target.hasClass("Tasks") ||
        target.hasClass("taskhead") ||
        target.hasClass("bracket")) {
        // tasks click
        $(".com-classhead,.Tasks").removeClass("com-selected");
        target = target.hasClass("Tasks") ? target : target.parent();
        if (!target.hasClass("com-selected")) {
            target.addClass("com-selected");
        }

        var midShowClassName = target.get(0).className.split(" ")[2];
        $("." + midShowClassName).each(function(index, val) {
            val = $(val);
            if (!val.hasClass("Tasks")) {
                target = val;
                return false;
            }
        });
        $('.md-tasks>div[class^="task"]').hide();
        if (target.css("display") === "none") {
            target.show();
        }
    }else if (target.hasClass("comicon-delete") &&
              !target.hasClass("defalut") &&
              window.confirm('确认删除该分类') ) {
        //delete click
        
        target = target
            .parent()
            .parent()
            .parent();
        target.remove();
    }
}
function addClassifyHander(e) {
    var text = window.prompt();
    if (/\w*/.test(text)) {
        text = "ceshi";
        var arr = [
            '<div class="com-classwrap">',
            '<div class="com-classhead com-hover ">',
            '<span class="comicon-file"></span>',
            '<div class="com-head">' + text + "</div>",
            '<span class="comicon-delete"></span>',
            "</div>",
            "</div>",
            '<ul class="com-nav1">',
            "</ul>"
        ].join("\n");
        var classify = document.createElement("div");
        classify.className = "com-classify";
        classify.innerHTML = arr;
        $(".left-classify").append(classify);
    }
}
function mdnavClickHander(e) {
    var target = Eventutil.getTarget(e);
    if (target.nodeName.toUpperCase() === "LI") {
        target = $(target);
        if (!target.hasClass("com-selected")) {
            $(".md-nav>li").removeClass("com-selected");
            target.addClass("com-selected");
        }
        if (target.get(0) === $(".md-nav>li:eq(0)").get(0)) {
            $(".com-nav>li").show();
        } else if (target.get(0) === $(".md-nav>li:eq(1)").get(0)) {
            $(".com-nav>.unfulfilled").show();
            $(".com-nav>.fulfilled").hide();
        } else if (target.get(0) === $(".md-nav>li:eq(2)").get(0)) {
            $(".com-nav>.unfulfilled").hide();
            $(".com-nav>.fulfilled").show();
        }
    }
}
function midAddTaskClickHander(e) {
    var target = $(".com-classhead.com-hover.com-selected");
    //选中类型标题添加 Tasks
    if (target.length > 0) {
        var text = window.prompt();

        if (/[\w-]+/.test(text)) {
            var Task = document.createElement("li");
            var comTask = [
                '<div class="Tasks com-hover' + " " + text + '">',
                '<span class="taskhead">' + text + "</span>",
                '<span class="bracket">(0)</span>',
                "</div>"
            ].join("\n");
            Task.innerHTML = comTask;
            target = target.parent().next();
            target.append(Task);

            var md_task = document.createElement("div");
            md_task.className = text;
            md_task.style.display = "block";
            $(".md-tasks").append(md_task);
        }
    }
    else if(target.length === 0) {
        //点击触发在Tasks中添加to-do
        initLeftAll();
        $('.validate').show();
        $('.todohead,.datetext,#tarea').removeAttr('readonly');
        $('.todohead,.datetext,#tarea').removeAttr('unselectable');
        $('.todohead').focus();


    }
}
function mdTaskClickHander(e) {
    var target = Eventutil.getTarget(e);
    target = $(target);
    
    if (target.get(0).nodeName.toUpperCase() === "LI") {
        $('.com-date').removeClass('com-date-selected');
        $(".com-nav>li").removeClass("com-color");
        target.addClass("com-color");

        initLeftStatus();
        $(".todohead").val(target.html());
        $(".datetext").val(target.parent().prev().html());
        $("#tarea").val(target.attr("title"));
        
        if(target.hasClass('unfulfilled')) {
            $('.com-icon').show();
            
        }

        $('.count>span:eq(0)').html(target.attr("title").length);

    }
    else if (target.hasClass('com-date')) {
        $('.com-date').removeClass('com-date-selected');
        $('.com-nav>li').removeClass('com-color');
        target.addClass('com-date-selected');

    }

}
function writeAndFinishClickHander(e) {
    var target = Eventutil.getTarget(e);
    target = $(target);
    if(target.hasClass('comicon-write')) {
        $('#tarea').removeAttr('readonly');
        $('#tarea').removeAttr('unselectable');
        $('#tarea').focus();
    }
    else if(target.hasClass('comicon-fulled')) {
        initLeftStatus();
        target = $('.com-color').get(0);
        var arr =target.className.split(' ');
        arr.shift();
        arr.unshift('fulfilled');
        target.className = arr.join(' ');

    }
}
function buttonClickHander(e) {
    var target = Eventutil.getTarget(e);
    //target = $(target);
    console.log(target);
    if(target === $('.bt-group button:first').get(0)) {
        var isshow = $('.com-icon').css('display') === 'none' ? false : true;
        if(isPass() && !isshow && window.confirm('你确定添加该任务？')) {
            var com_tasksByDate = document.createElement('div');
            com_tasksByDate.className = "com-tasksByDate";

            var arr = [ 
                '<div class="com-date">'+$('.datetext').val()+'</div>',
                '<ul class="com-nav">',
                '<li class="unfulfilled com-hover" title="wancheng1">'+$('#tarea').val()+'</li>',
                '</ul>'
            ];
            com_tasksByDate.innerHTML = arr.join('\n');

            var date = $('.datetext').val();
            date = getNumByDateStr(date);
            console.log('input',date);
            var midTarget = null;
            $('.md-tasks>div[class^="task"]').each(function(index, val){
                val = $(val);
                if(val.css('display') === 'block') {
                    midTarget = val;
                    return false; 
                }
            });
            var dateList = midTarget.find('.com-date');
            var curDate = null;
            dateList.each(function(index, val) {
                curDate = getNumByDateStr($(val).html());
                val = $(val).parent();
                if(curDate > date && index === 0) {
                    val.before(com_tasksByDate);
                    console.log(curDate,val);
                    return false;
                }
                else if (curDate > date && index !== 0) {
                    val.before(com_tasksByDate);
                    console.log(curDate,val);
                    return false;
                }
                else if (curDate < date && index === dateList.length - 1) {
                    val.after(com_tasksByDate);
                    console.log(curDate,val);
                    return false;
                }
                else if (curDate === date) {
                    val = val.find('.com-nav');
                    var li = document.createElement('li');
                    li.className = 'unfulfilled com-hover';
                    li.innerHTML = $('.todohead').val();
                    val.append(li);
                    return false;
                }
            });

            //更新关联task下的 bracket
            changeTaskBracket(1);
         

        }
        else if(isshow && window.confirm('你确定更新任务？')) {
            $('.com-color').attr('title',$('#tarea').val());
        }
    }
    else if(target === $('.bt-group button:last').get(0)) {
        //删除按钮触发
        initLeftAll();
        var liSelected = $('.com-color');
        //.md-task
        var curTask =  $('.com-date-selected').parent().parent();
        var restTasks = curTask.find('.com-tasksByDate');
        var leftTaskSelected = $('.Tasks.com-selected');
        console.log(restTasks.length);
        var len = $('.com-date-selected').next().find('.unfulfilled').length;
        if(restTasks.length > 1) {
            if(len){
                changeTaskBracket(-len);
            }
           
            $('.com-date-selected').parent().remove();
            
        }
        else if(restTasks.length === 1) {
            if(len){
                changeTaskBracket(-len);
            }
            curTask.remove();
            leftTaskSelected.parent().remove();
        }
        else if(liSelected.length) {
            if(liSelected.hasClass('unfulfilled')) {
                changeTaskBracket(-1);
            }
            liSelected.remove();
        }
        else if(leftTaskSelected.length) {
            console.log(leftTaskSelected);
            var clsName = leftTaskSelected.prop('className').split(' ')[2];
            var curTarget = null;
           
            $('div[class^="task"]').each(function(index, val){
                if(val.className === clsName) {
                    curTarget = val;
                    return false;
                }
            });
            $(curTarget).remove();
            leftTaskSelected.parent().remove();

            changeAllTaskNums();
        }
    }
}
function todoheadKeyUpHander(e) {
    var vali = $('.com-righthead>.validate');
    var len = this.value.length;
    if (/^[a-zA-Z0-9\u4E00-\u9FA5_-]{4,10}$/.test(this.value) ) {
        vali.html('正确');
    }
    else if(len < 4 ) {
        vali.html('输入4-10个字符');
    }
    else if( len > 10) {
        vali.html('输入字符>10 越界');
    }

}
function datetextKeyUpHander(e) {
    var vali = $('.datewrap>.validate');
    var len = this.value.length;
    if (/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(this.value) ) {
        vali.html('正确');
    }
    else if( len > 10) {
        vali.html('输入字符>10 越界');
    }
    else{
        vali.html('格式:2015-05-28');
    }

}
function initTaskNum() {
    var clsName = null;
    var target = null;
    var len = 0;
    $('.Tasks').each(function(index, val) {
        clsName = val.className.split(' ')[2];

        $('.'+clsName).each(function(i, obj){
            obj = $(obj);
            if (!obj.hasClass("Tasks")) {
                target = obj;
                return false;
            }
        });
        console.log(target);
        len =  target.find('.com-nav>.unfulfilled').length;
        $(val).find('.bracket').html('('+len+')');
        
    });

}
function initLeftStatus() {
    $('.todohead,.datetext,#tarea').attr('readonly','readonly');
    $('.todohead,.datetext,#tarea').attr('unselectable','on');
    $('.com-icon').hide();
    $('.validate').hide();
}
function initLeftAll() {
    $('.todohead,.datetext,#tarea').attr('readonly','readonly');
    $('.todohead,.datetext,#tarea').attr('unselectable','on');
    $('.com-icon').hide();
    $('.validate').hide();

    $('.todohead,.datetext,#tarea').val('');
    $('.count span:first').html(0);
}
/**
 * @param {*} taraget textarea
 * @param {*} len  最大长度
 */
function checkLen(target, len) {
    var curLen = target.value.length;
    if(curLen > len) {
        target.value = target.value.substring(0,len);
    }
    else{
        $('.count>span:eq(0)').html(curLen);
    }
}
function isPass() {
    return $('.validate').text() ==='正确正确';
}
function getNumByDateStr(str) {
    return parseInt(str.replace(/-/g,''),10);
}
function countUnfilfulledTaskNums() {
    return $('.com-nav>li.unfulfilled').length;
}
function changeTaskBracket(len) {
    //更新关联task下的 bracket
    var target = $('.Tasks.com-selected').find('.bracket');
    var numStr = target.html().replace(/[\(\)]/g,'');
    console.log(numStr,target.html(),len);
    len = parseInt(numStr, 10) + len;
    target.html('('+len+')');
    changeAllTaskNums();
}
function changeAllTaskNums() {
    $('#allTasksBra').html('('+countUnfilfulledTaskNums()+')');
}