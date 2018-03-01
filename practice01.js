//practice01.js

//检测是dom对象还是jquery对象（domObj.nodeType   jqueryObj.jquery）

//提取元素1.index;2.get([index]);3.eq(index);4.first();5.last();6.toArray()-->与不加参数的get()相同
//俩者的转换，jqueryObj = $(domObj)  返回jquery对象  
//domObj = jqueryObj.get([index])(可返回dom元素或是数组/index也可以是负值倒序)或是jqueryObj[index](返回一个dom元素)   index越界返回undefined
//而eq(index)返回jquery对象 $('li:eq(0)') 俩个一个删选器，一个是方法/首选eq方法  eq()没有索引值，不返回数组  index也可为负值
//

$(function(){
	var elements = $('li');
	//console.log(elements.first());
	//console.log(elements.last());
	getMatchElements();
	getParentElements();
	getChildElements();
	changeElement();
	attrAndPro();
})


//获取父元素
function getParentElements(){
	var eles = $('#mood').parent('div');  //直接父元素
	var eles = $('#mood').parents('div');//所有父元素
	var eles = $('#mood').parentsUntil('box1');//所有到某个元素（box1）为止/不包含本身box1此时会获取到box3 box2
	//console.log(eles);
}

function getChildElements(){
	var eles0 = $('#box3').contents();  //这俩个只包含子元素
	var eles1 = $('#box3').children();
	var eles2 = $('#box1>*');    //同上功能
	var eles3 = $('#box1').find('p');
	//console.log(eles0);
	//console.log(eles1);
	// console.log(eles3);
	var eles4 = $('#box3').find('ul');  //这俩个只包含子元素
	var eles1 = $('#box3').children();
	//console.log(eles4);
}
//匹配最近的元素（从当前元素自己开始匹配）,0/1个元素（找到就会停下来，不会继续再找）
//这是和parents的区别
function getMatchElements(){
	var match = $('#mood').closest('div'); 
	//console.log(match);
	var match = $('#item2').siblings('item4'); 
}


function nextElements(){
	var nextEle = $('.item2').next('li');   //紧临的同辈元素
	var nextEle2 = $('.item2').nextAll('li');   //紧临的所有的同辈元素
	var nextEle3 = $('.item2').nextUntil('.item4');   //紧临的所有的同辈元素
}
function prevElements(){
	var prevEle = $('.item2').prev('li');   //紧临的同辈元素
	var prevEle2 = $('.item2').prevAll('li');   //紧临的所有的同辈元素
	var prevEle3 = $('.item2').prevUntil('.item4');   //紧临的所有的同辈元素
}
//获取子集
function getChildGroup(){
	var getChildEle = $('li').slice(3) ; //4,5..
	var getChildEle2 = $('li').slice(3,5) ;//3 4
	//map方法
	var getChildEle3 = $('div').map(function(index,domElement){
		return this.id;
	}) ;
	//each方法
	var getChildEle4 = $('li').each(function(index,domElement){
		 this.title = this.innerText;
	}) ;
}
function chooseElements(){
	var chooseEle = $('.item2,.item3') ; 
	var chooseEle2 = $('.item2').add('.item3');   //同上
	var chooseEle3 = $('li').not('.item3');
	var chooseEle4 = $('li').filter('.item3');    //过滤匹配 
	var chooseEle5 = $('li').not(function(index){
			return $(this).hasClass('item3');
	});
	var chooseEle6 = $('li').filter(function(index){
			return $(this).hasClass('item3');
	});

	var chooseEle7 = $('li').has('ul');//has方法可选哪些是二级菜单哪些是没有的
}

function changeElement(){
	//find() end()  addBack()方法
	$("#box3").find(".item2").css("color","red")
	.end().find(".item3").css("color","blue");    //.end()方法可以返回上一级的box3
	$("#box3").find(".item1").nextUntil(".item3").addBack().css("color","orange");
}
function attrAndPro(){
	//特性和属性
	//特性返回的是字符串//属性可返回字符串，布尔值 number object
	// var img = $("#logo");
	// //img.attributes();
	// img.getAttribute("title");   //返回的总是字符串
	// img.title;
}