

/*******************************************公司管理js************************************************************/


$(function(){

	/*添加*/
	// 点击添加按钮时显示其详细信息页面内容；
	$(".list_div .add_em").click(function(){
		$(this).parents(".list_div").hide();
		$(this).parents(".list_div").siblings(".map_bg").show();
		$(this).parents(".list_div").siblings(".add_div").show();
	})
	
	// 点击其详细信息页面内容箭头时返回上一页；
	$(".add_div .return_a").click(function(){
		$(this).parents(".add_div").hide();
		$(this).parents(".add_div").siblings(".map_bg").hide();
		$(this).parents(".add_div").siblings(".list_div").show();
	})
	
})