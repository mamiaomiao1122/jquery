$(document).ready(function(){  //只要dom结构加载完就输出，不必等到图片完全有没有加载完
	click();
})
function changeCss(){
	$(".flower").removeClass("#")
	            .addClass("my")
	            .css("color","red"); 
	$(".flower").find('p.child')    //find add filter children 有破坏性 所以需要end()来结束至上一层
				.css("color","blue")
				.end()      //元素的匹配 恢复到上一层的状态
				.addClass("colorClass")
}
function click(){
	$("#box1").click(function(){
		
	})
}