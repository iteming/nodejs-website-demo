// JavaScript Document

// ----------------------------  无组织排放   --------------------------------//
	
	
$(function(){
	// 当选择“其他”的值时其相关信息列表置灰或显示；
	$("#type").change(function() {
		if ($(this).val() == "其他") {
			
			$("#othertype").removeAttr("disabled").removeClass("disabled");
		}
		else {
			
			$("#othertype").attr("disabled", "disabled").addClass("disabled");
			$("#othertype").val("");
		}
		
	});
	
	$("#type1").change(function() {
		if ($(this).val() == "其他") {
			
			$("#othertype1").removeAttr("disabled").removeClass("disabled");
		}
		else {
			
			$("#othertype1").attr("disabled", "disabled").addClass("disabled");
			$("#othertype1").val("");
		}
		
	});
	
	
	// 冷却塔系统    当选择“其他”的值时其相关信息列表置灰或显示；
	$("#suanfa").change(function() {
		if ($(this).val() == "物料衡算法") {
			
			$(".pf").hide();
		}
		else {
			
			$(".pf").show();
		}
		
	});
	
	$("#suanfa").change(function() {
		if ($(this).val() == "排放系数法") {
			
			$(".wh").hide();
		}
		else {
			
			$(".wh").show();
		}
		
	});
	
	$("#suanfa1").change(function() {
		if ($(this).val() == "物料衡算法") {
			$(".form_title").show();
			$(".wh").show();
		}
		else {
			
			$(".wh").hide();
		}
		
	});
	
	$("#suanfa1").change(function() {
		if ($(this).val() == "排放系数法") {
			$(".form_title").show();
			$(".pf").show();
		}
		else {
			
			$(".pf").hide();
		}
		
	});
	
	$("#suanfa1").change(function() {
		if ($(this).val() == "2种方法") {
			
			$(".yc").show();
		}
		else {
			
		}
		
	});
	
	
	$("#operation").change(function() {
		
		if ($(this).val() == "其他") {
			
			$("#otheroperation").removeAttr("disabled").removeClass("disabled");
			$("#otheroperation_label").removeClass("disabled");
		}
		else {
			
			$("#otheroperation").attr("disabled", "disabled").addClass("disabled");
			$("#otheroperation").val("");
			$("#otheroperation_label").addClass("disabled");
		}
	});
	
	$("#mode").change(function() {
		
		if ($(this).val() == "其他") {
			
			$("#othermode").removeAttr("disabled").removeClass("disabled");
			$("#othermode_label").removeClass("disabled");
		}
		else {
			
			$("#othermode").attr("disabled", "disabled").addClass("disabled");
			$("#othermode").val("");
			$("#othermode_label").addClass("disabled");
		}
	});
	
	
	
	$("#operation1").change(function() {
		
		if ($(this).val() == "其他") {
			
			$("#otheroperation1").removeAttr("disabled").removeClass("disabled");
			$("#otheroperation_label1").removeClass("disabled");
		}
		else {
			
			$("#otheroperation1").attr("disabled", "disabled").addClass("disabled");
			$("#otheroperation1").val("");
			$("#otheroperation_label1").addClass("disabled");
		}
	});
	
	$("#mode1").change(function() {
		
		if ($(this).val() == "其他") {
			
			$("#othermode1").removeAttr("disabled").removeClass("disabled");
			$("#othermode_label1").removeClass("disabled");
		}
		else {
			
			$("#othermode1").attr("disabled", "disabled").addClass("disabled");
			$("#othermode1").val("");
			$("#othermode_label1").addClass("disabled");
		}
	});
	
	
	$(".orange1").change(function() {
		
		if ($(".orange1").is(':checked')) {
			$(".gs1").show();
		}
		else {
			$(".gs1").hide();
		}
		
	});
	
	$(".orange2").change(function() {
		
		if ($(".orange2").is(':checked')) {
			$(".pf1").show();
		}
		else {
			$(".pf1").hide();
		}
		
	});
	
	$(".orange3").change(function() {
		
		if ($(".orange3").is(':checked')) {
			$(".pf2").show();
		}
		else {
			$(".pf2").hide();
		}
		
	});
	
	$("#ctype").change(function() {
		if ($(this).val() == "汽车/火车罐车") {
			
			$(".p2car").show();
			$(".p2ship").hide();
		}
		else {
			$(".p2car").hide();
			$(".p2ship").show();
		}
		
	});
	
	
	$("#zhuangzai").change(function() {
		if ($(this).val() == "公路、铁路装载") {
			
			$(".scar").show();
			$(".sship").hide();
			$("#cuoshi").get(0).selectedIndex = 0;
		}else{}
		
		if ($(this).val() == "船舶装载") {
			
			$(".scar").hide();
			$(".sship").show();
			$("#cuoshi").get(0).selectedIndex = 0;
			$("#chuanbozz").get(0).selectedIndex = 0;
			$("#zhuangzaiyy").get(0).selectedIndex = 0;
			$("#zhuangzaiqy").get(0).selectedIndex = 0;
			$("#zhuangzaiqt").get(0).selectedIndex = 0;
		}else{}
		
		
	});
	
	
	$("#chuanbozz").change(function() {
		if ($(this).val() == "船舶装载原油") {
			
			$(".yy").show();
			$(".qy").hide();
			$(".qt").hide();
		}
		
		
		if ($(this).val() == "船舶装载汽油") {
			
			$(".yy").hide();
			$(".qy").show();
			$(".qt").hide();
		}
		
		if ($(this).val() == "船舶装载汽油和原油以外的产品") {
			
			$(".yy").hide();
			$(".qy").hide();
			$(".qt").show();
		}
		
	});
	
	
	
	// 选中公式法显示相对应内容信息；
	$("#F-gs").change(function() {
		
		/*if ($("#F-gs").prop("checked")) {
			
			$(".gs1").show();
			$(".scar").hide();
		}
		else {
			$(".gs1").hide();
		}*/
		if ($("#F-gs").is(':checked')) {
			
			$(".gs1").show();
			/*$(".scar").hide();*/
		}
		else {
			$(".gs1").hide();
		}
		
	});
	
	$("#F-pf1").change(function() {
		
		if ($("#F-pf1").is(':checked')) {
			
			$(".pf1").show();
		}
		else {
			$(".pf1").hide();
		}
		
	});
	
	$("#F-pf2").change(function() {
		
		if ($("#F-pf2").is(':checked')) {
			
			$(".pf2").show();
		}
		else {
			$(".pf2").hide();
		}
		
	});
	
	
	$("#ctype1").change(function() {
		if ($(this).val() == "汽车/火车罐车") {
			
			$(".p2car").show();
			$(".p2ship").hide();
		}
		else {
			$(".p2car").hide();
			$(".p2ship").show();
			
		}
		
	});
	
	
	$("#zhuangzai1").change(function() {
		if ($(this).val() == "公路、铁路装载") {
			
			$(".scar").show();
			$(".sship").hide();
			$("#cuoshi").get(0).selectedIndex = 0;
		}else{}
		
		if ($(this).val() == "船舶装载") {
			
			$(".scar").hide();
			$(".sship").show();
			$("#cuoshi").get(0).selectedIndex = 0;
			$("#chuanbozz").get(0).selectedIndex = 0;
			$("#zhuangzaiyy").get(0).selectedIndex = 0;
			$("#zhuangzaiqy").get(0).selectedIndex = 0;
			$("#zhuangzaiqt").get(0).selectedIndex = 0;
		}else{}
		
		
	});
})		
	