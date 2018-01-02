$.ajax({
    url:'/comm/test1.php',
    type:'POST', //GET
    async:true,    //或false,是否异步
    data:{
        name:'yang',age:25
    },
    timeout:5000,    //超时时间
    dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
    beforeSend:function(xhr){
        console.log(xhr)
        console.log('发送前')
    },
    success:function(data,textStatus,jqXHR){
        console.log(data)
        console.log(textStatus)
        console.log(jqXHR)
    },
    error:function(xhr,textStatus){
        console.log('错误')
        console.log(xhr)
        console.log(textStatus)
    },
    complete:function(){
        console.log('结束')
    }
})


$('#send').click(function(){
    //请求的5个阶段，对应readyState的值
    //0: 未初始化，send方法未调用；
    //1: 正在发送请求，send方法已调用；
    //2: 请求发送完毕，send方法执行完毕；
    //3: 正在解析响应内容；
    //4: 响应内容解析完毕；
    var data = 'name=yang';
    var xhr = new XMLHttpRequest();        //创建一个ajax对象
    xhr.onreadystatechange = function(event){    //对ajax对象进行监听
        if(xhr.readyState == 4){    //4表示解析完毕
            if(xhr.status == 200){    //200为正常返回
                console.log(xhr)
            }
        }
    };
    xhr.open('POST','url',true);    
    //建立连接，参数一：发送方式，二：请求地址，三：是否异步，true为异步
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');    //可有可无
    xhr.send(data);        //发送
});