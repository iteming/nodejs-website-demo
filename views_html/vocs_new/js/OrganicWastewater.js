// JavaScript Document

// ----------------------------  有机废水自行处理   --------------------------------//
	
	
$(function(){
	
	// 当选择“其他”的值时其相关信息列表置灰或显示；
	$("#suanfa").change(function() {
		if ($(this).val() == "实测法") {
			
			$(".sc").show();
			$(".pf").hide();
		}
		else {
			$(".pf").show();
			$(".sc").hide();
		}
		
	});
	
	
	$("#suanfa1").change(function() {
		if ($(this).val() == "实测法") {
			
			$(".sc").show();
		}
		else {
			$(".sc").hide();
		}
		
	});
	
	$("#suanfa1").change(function() {
		if ($(this).val() == "排放系数法") {
			
			$(".pf").show();
		}
		else {
			$(".pf").hide();
		}
		
	});
	
	
})	