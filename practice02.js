//practice02.js
//
//
//
//样式相关的

$(function(){
	style();
})
function style(){
	var ele = $('#test');
	ele.css("color","pink");
	ele.css({
		'font-size':'24px',
		'font-weight':'bold'

	});
}

//获取元素的 尺寸的大小
function size(){
	var ele = $('#test');
	ele.width();
	ele.height();
	ele.innerWidth();   //包含内边距(上下、左右俩边的)，不包含外边框和外边距
	ele.innerHeight();
	ele.outerWidth();   //包含内边距和边框，外边距？传参数true包含    没有参数就不包含外边距
	ele.outerHeight();
}
//获取 位置
function locate(){
	//offset(),返回top left的值的对象；针对的是第一个元素(文档)
	var ele = $('#test');
	ele.offset();
	//position()  相对于父元素
	ele.position();
	//scrollTop()上下滚动     scrollLeft()左右滚动
}
//修改元素的内容(.html()   .text())
function modify(){
	var ele = $('#test');
	ele.html(); //获取第一个
	ele.text();//获取所有的
	ele.eq(0).html("<strong>mmm</strong>"); //html嵌套
	ele.text("<strong>mmm</strong>"); //直接显示“”的内容 以文本来处理
}
//移动 插入元素
function alert(){
	var ele = $('#test');
	ele.append("<a href="#">more</a>");  //也可以参数是 $('span')  也可以是数组
	ele.perpend("<a href="#">more</a>");//前面追加
	ele.before("<a href="#">more</a>"); //上下
	ele.after("<a href="#">more</a>");
	//appendTo()  perpendTo() insertBefore() insertAfter()
	//包裹wrap() wrapAll()  wrapInner() unwrap()
} 
//移除元素
function remove(){
	var ele = $('#test');
	ele.remove();
	ele.detach();
	ele.empty();//只清内容/保留元素
}
//复制 替换
//clone() replaceWith() replaceAll()    //end()取消之前的选中

//处理表单元素值
//.val(value)设置值  .val()获取值
//$('[name="radio"]:checked').val();
//$('[name="select"] option selected').val();
//$('[name="multipSelect"]').val(); 返回的是数组
//$('[name="checkbox"]:checked').map(function(){
//                    return：$(this).val();  }).toArray();