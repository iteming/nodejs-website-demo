// JavaScript Document

$(function(){
	// 点击选项 显示对应信息，反之隐藏；
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
	// 点击选项 显示对应信息，反之隐藏；
	$("#industrialpark").change(function() {
		if ($(this).val() == "否") {
			$("#industrialparklevel").attr("disabled", "disabled").addClass("disabled");
			$("#industrialparklevel").get(0).selectedIndex = 0;
			$("#industrialparkname").attr("disabled", "disabled").addClass("disabled");
			$("#industrialparkname").val("");
			$("#industrialparkcode").attr("disabled", "disabled").addClass("disabled");
			$("#industrialparkcode").val("");
			$("#industrialparklevel_label").addClass("disabled");
			$("#industrialparkname_label").addClass("disabled");
			$("#industrialparkcode_label").addClass("disabled");
		}
		if ($(this).val() == "是") {
			$("#industrialparklevel").removeAttr("disabled").removeClass("disabled");
			$("#industrialparkname").removeAttr("disabled").removeClass("disabled");
			$("#industrialparkcode").removeAttr("disabled").removeClass("disabled");
			$("#industrialparklevel_label").removeClass("disabled");
			$("#industrialparkname_label").removeClass("disabled");
			$("#industrialparkcode_label").removeClass("disabled");
		}
	});
	
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
})