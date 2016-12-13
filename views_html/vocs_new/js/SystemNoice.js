// JavaScript Document


//======================================  明细内页切换 JS  =======================================//


//------------------------------------  系统公告  ----------------------------------------//

$(function(){	

	// 点击添加按钮时显示其详细信息页面内容；
	/*$(".list_div .add_em").click(function(){
		
		$(this).parents(".list_div").animate({left:'-1500px'},function(){
			$(this).css("display","none");
		});
		
		$(this).parents(".list_div").siblings(".add_div").animate({left:'0px'},function(){
			$(this).css({position:"relative",display:"block"});
		});
		
	})*/
	$(".list_div .add_em").click(function(){
		$(this).parents(".list_div").hide();
		$(this).parents(".list_div").siblings(".map_bg").show();
		$(this).parents(".list_div").siblings(".add_div").show();
	})
	
	// 点击其详细信息页面内容箭头时返回上一页；
	/*$(".add_div .return_a").click(function(){
		
		$(this).parents(".add_div").animate({left:'1500px'},function(){
			$(this).css({display:"none",position:"absolute"});
		});
		
		$(this).parents(".add_div").siblings(".list_div").animate({left:'0px'},function(){
			$(this).css("display","block");
		});
	})*/
	$(".add_div .return_a").click(function(){
		$(this).parents(".add_div").hide();
		$(this).parents(".add_div").siblings(".map_bg").hide();
		$(this).parents(".add_div").siblings(".list_div").show();
	})
	
	// 点击内容时显示其详细信息页面内容；
	/*$(".list_table tbody tr.list_tr").click(function(){
		
		$(this).parents(".list_table").parents(".list_div").animate({left:'1500px'},function(){
			$(this).css("display","none");
		});
		
		$(this).parents(".list_table").parents(".list_div").siblings(".check_div").animate({left:'0px'},function(){
			$(this).css({position:"relative",display:"block"});
		});
		
	})*/
	$(".list_table tbody tr.list_tr").click(function(){
		$(this).parents(".list_table").parents(".list_div").hide();
		/*$(this).parents(".list_div").siblings(".map_bg").show();*/
		$(this).parents(".list_table").parents(".list_div").siblings(".check_div").show();
	})
	
	// 点击其详细信息页面内容箭头时返回上一页；
	/*$(".check_div .return_a").click(function(){
		
		$(this).parents(".check_div").animate({left:'-1500px'},function(){
			$(this).css({display:"none",position:"absolute"});
		});
		
		$(this).parents(".check_div").siblings(".list_div").animate({left:'0px'},function(){
			$(this).css("display","block");
		});
	})*/
	$(".check_div .return_a").click(function(){
		$(this).parents(".check_div").hide();
		/*$(this).parents(".add_div").siblings(".map_bg").hide();*/
		$(this).parents(".check_div").siblings(".list_div").show();
	})
	
	// 点击输入框 显示提示信息，反之隐藏；
	$(".form_content input,.form_content select,.form_content textarea").focusin(function() {
		var $tip_div = $(this).parent("div").next(".form_tip_div");
		$tip_div.show();
		$tip_div.children(".form_icon").addClass("icon_info");
		$tip_div.children(".form_tip").addClass("tip_info");
	}).focusout(function(){
		var $tip_div = $(this).parent("div").next(".form_tip_div");
		$tip_div.hide();
	})
	
	$(".list_table input").focusin(function() {
		var $tip_div = $(this).siblings(".table_tip_div");
		$tip_div.show();
	}).focusout(function(){
		var $tip_div = $(this).siblings(".table_tip_div");
		$tip_div.hide();
	})
	
})