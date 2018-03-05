//
//类数组对象 和数组对象
//array.prototype.slice.call()
choice();
function choice(){

//元素筛选器
	//$('li:first').addClass('red');
	//$('li:last').addClass('red');
	//$('li:even').addClass('red');     //偶数 从0开始
	//$('li:odd').addClass('red');      //奇数
	//$('li:eq(2)').addClass('red');   //第三个
	//$('li:gt(2)').addClass('red');   //大于第三个的
	//$('li:lt(2)').addClass('red');    //小于第三个的


//子元素的筛选器
	// $('li:first-child').addClass('red');
	// $('li:last-child').addClass('red');
	// $('li:first-of-type').addClass('red');
	// $('li:last-of-type').addClass('red');
	// $('li:nth-child(2)').addClass('red');  //从1开始
	//$('li:nth-child(2n)').addClass('red');
	//$('li:nth-child(even)').addClass('red'); //同上
	//$('li:nth-child(odd)').addClass('red');
	
//表单筛选器
	//$(':checked').parent().addClass('heightLight');  
	//类似的有 focus checkbox button file image input password radio reset selected submit text
	//$(':disabled').parent().addClass('heightLight');
	//$(':enabled').parent().addClass('heightLight');
	
//内容筛选器
	//:empty  :contains(text) :has() :parent()
	 $('li:contains("0")').addClass('heightLight'); 
	 $('p:has(span)').parent().addClass('heightLight');

//其他的筛选器
     // :lang("en")  :not(..) :root  :target :hidden :visable :header（标题） :animated（动画的元素）
     
     // :hidden 包括type="hidden"和display:none  不包括visibility:hidden 和透明度为0(opacity:0)的(因为占了位置了)
     //:visable 和 :hidden相反
}
function jquery(){
	var ele= $("#box1");
	//阻止冒泡
	ele.stopPropagation(); 
	//阻止默认行为
	ele.preventDefault();
	//立刻阻止，也阻止后续绑定的事件
	ele.stopImmediatePropagation(); 
	//都阻止 return false；
	
	//检测是否调用了以上这些函数
	// isDefaultPrevented();
	// isPropagationStopped();
	// isImmediatePropagationStopped();

	   
//支持的事件有：click change focus blur dblclick error focusin focusout keydown
//keypress keyup load unload mouseenter mouseover mousedown  mouseleave mousemove mouseout mouseup
//ready resiza scroll select submit
	$('p').on('click',null,null,function(event){
			//console.log("me");
		})
	//只执行一次 然后销毁 
	$('p').one('click',null,null,function(event){
			//console.log("me");
		})

//移除事件处理
	$('p').off('click'); 
	//(不管前面绑定多少个，也可以$('p').off('click mouseover'，'m1');移除特定的)
	var click2 = $('#box2');
	click2 = function(){

	}
	$('p').on('click ',null,null,function(event){
			//console.log("me");
		})
	$('p').off('click','click2'); 
	//不传参数，所有事件移除

}
function trigger(){
	$('p').on('click',function(event,arg1,arg2){
			console.log("me");
		})
	$("#button").on('click',function(){
		$('p').trigger('click',[1,2]);
	})

//triggerHandler(); 1.不会触发浏览器默认事件 2.不会产生事件冒泡 3.只触发jquery对象集合的第一个元素的事件处理函数 4.返回事件处理函数的返回值，不是jquery对象
	triggerHandler();
}


