mouseenter 
mouseleave
jq 插件鼠标事件都有击穿问题
因为鼠标的响应是按插值计算，速度太快，有可能
击穿了外层，但是事件还是会响应，但是响应的
事件对象可能是内层的dom对象，也就是说跳过了
外层，相当于外层enter无响应。
默认值绑定到this上，而不是绑定到冒泡事件上 ，因此是不能利用事件委任来
实现的。
只有通过mouseout mouseover 配合 relatedTarget实现
cnpm install browser-sync gulp --save-dev