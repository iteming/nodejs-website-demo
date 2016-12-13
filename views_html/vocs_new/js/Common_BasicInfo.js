// JavaScript Document

//======================================  明细内页切换 JS  =======================================//


//------------------------------------  企业基本信息  ----------------------------------------//

$(function(){	

	// 点击添加按钮时显示其详细信息页面内容；
	/*$(".table_div .add_em").click(function(){
		
		$(this).parents(".table_div").animate({left:'-1500px'},function(){
			$(this).css("display","none");
		});
		
		$(this).parents(".table_div").siblings(".add_div").animate({left:'0px'},function(){
			$(this).css({position:"relative",display:"block"});
		});
		
	})*/
	$(".table_div .add_em").click(function(){
		$(this).parents(".table_div").hide();
		$(this).parents(".table_div").siblings(".add_div").show();
	})
	
	// 点击其详细信息页面内容箭头时返回上一页；
	/*$(".add_div .return_a").click(function(){
		
		$(this).parents(".add_div").animate({left:'1500px'},function(){
			$(this).css({display:"none",position:"absolute"});
		});
		
		$(this).parents(".add_div").siblings(".table_div").animate({left:'0px'},function(){
			$(this).css("display","block");
		});
	})*/
	$(".add_div .return_a").click(function(){
		$(this).parents(".add_div").hide();
		$(this).parents(".add_div").siblings(".table_div").show();
	})
	
	
	// ----------------------------  修改企业基本信息  --------------------------------//
	
	// 当“是否有母公司”的值为“无”时其相关企业母公司列表置灰；
		
	$("#membership").change(function() {
		if ($(this).val() == "无") {
			$("#parentename").attr("disabled", "disabled").addClass("disabled");
			$("#parentename").val("");
			$("#relationship").attr("disabled", "disabled").addClass("disabled");
			$("#relationship").get(0).selectedIndex = 0;
			$("#parentecode").attr("disabled", "disabled").addClass("disabled");
			$("#parentecode").val("");
			$("#parentename_label").addClass("disabled");
			$("#relationship_label").addClass("disabled");
			$("#parentecode_label").addClass("disabled");
		}
		if ($(this).val() == "有") {
			$("#parentename").removeAttr("disabled").removeClass("disabled");
			$("#relationship").removeAttr("disabled").removeClass("disabled");
			$("#parentecode").removeAttr("disabled").removeClass("disabled");
			$("#parentename_label").removeClass("disabled");
			$("#relationship_label").removeClass("disabled");
			$("#parentecode_label").removeClass("disabled");
		}
		
	});
	
	// 当“是否进入工业园区”的值为“否”时其相信息列表置灰；
		
	$("#industrialpark").change(function() {
		if ($(this).val() == "否") {
			$("#industrialparkname").attr("disabled", "disabled").addClass("disabled");
			$("#industrialparkname").val("");
			$("#industrialparklevel").attr("disabled", "disabled").addClass("disabled");
			$("#industrialparklevel").get(0).selectedIndex = 0;
			$("#industrialparkcode").attr("disabled", "disabled").addClass("disabled");
			$("#industrialparkcode").val("");
			$("#industrialparklevel_label").addClass("disabled");
			$("#industrialparkname_label").addClass("disabled");
			$("#industrialparkcode_label").addClass("disabled");
		}
		if ($(this).val() == "是") {
			$("#industrialparkname").removeAttr("disabled").removeClass("disabled");
			$("#industrialparklevel").removeAttr("disabled").removeClass("disabled");
			$("#industrialparkcode").removeAttr("disabled").removeClass("disabled");
			$("#industrialparklevel_label").removeClass("disabled");
			$("#industrialparkname_label").removeClass("disabled");
			$("#industrialparkcode_label").removeClass("disabled");
		}
		
	});


	// 点经纬度弹出地图	
	$(".form_content .jwd").click(function(){
		$(".map_bg").show();
		$(".map_content").show();
	})
	
	// 点关闭按钮，关闭地图
	$(".map_close").click(function(){
		$(".map_bg").hide();
		$(".map_content").hide();
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
	
})