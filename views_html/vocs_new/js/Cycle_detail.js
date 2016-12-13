// JavaScript Document

// =========  核算周期明细内页 js  =========  //

$(function(){
	
	// 当选择“其他”的值时其相关信息列表显示或置灰；
	$("#from").change(function() {
		if ($(this).val() == "其他") {
						
			$("#otherfrom_label").removeClass("disabled");
			$("#otherfrom").removeAttr("disabled").removeClass("disabled");
			
			$("#number").attr("disabled", "disabled").addClass("disabled");
			$("#number").get(0).selectedIndex = 0;
			$("#number_label").addClass("disabled");
		}
		else {
			$("#number_label").removeClass("disabled");
			$("#number").removeAttr("disabled").removeClass("disabled");
			
			$("#otherfrom").attr("disabled", "disabled").addClass("disabled");
			$("#otherfrom").val();
			$("#otherfrom_label").addClass("disabled");
		}
		
	});
	
	
	
	// 当选择“其他”的值时其相关信息列表显示或置灰；
	$("#suanfa").change(function() {
		if ($(this).val() == "公式法（气体加工容器）") {
			
			$(".l1").show();
		}
		else {
			$(".l1").hide();
		}
		
	});
	
	$("#suanfa").change(function() {
		if ($(this).val() == "公式法（液体加工容器）") {
			$(".l2").show();
		}
		else {
			$(".l2").hide();
		}
		
	});
	
	
	// 燃烧烟气排放（排放系数法）   选中当前列表，则输入框为可编辑状态；
	$("#chb1_1").change(function() {
		
		if ($("#chb1_1").is(':checked')) {
			$("#yearrunhour1_1").removeAttr("disabled").css("background","white");
			$("#burnconsume1_1").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour1_1").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume1_1").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});
	$("#chb1_2").change(function() {
		
		if ($("#chb1_2").is(':checked')) {
			$("#yearrunhour1_2").removeAttr("disabled").css("background","white");
			$("#burnconsume1_2").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour1_2").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume1_2").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});
	$("#chb1_3").change(function() {
		
		if ($("#chb1_3").is(':checked')) {
			$("#yearrunhour1_3").removeAttr("disabled").css("background","white");
			$("#burnconsume1_3").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour1_3").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume1_3").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});
	$("#chb1_4").change(function() {
		
		if ($("#chb1_4").is(':checked')) {
			$("#yearrunhour1_4").removeAttr("disabled").css("background","white");
			$("#burnconsume1_4").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour1_4").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume1_4").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});
	$("#chb1_5").change(function() {
		
		if ($("#chb1_5").is(':checked')) {
			$("#yearrunhour1_5").removeAttr("disabled").css("background","white");
			$("#burnconsume1_5").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour1_5").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume1_5").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});
	$("#chb1_6").change(function() {
		
		if ($("#chb1_6").is(':checked')) {
			$("#yearrunhour1_6").removeAttr("disabled").css("background","white");
			$("#burnconsume1_6").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour1_6").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume1_6").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});
	$("#chb1_7").change(function() {
		
		if ($("#chb1_7").is(':checked')) {
			$("#yearrunhour1_7").removeAttr("disabled").css("background","white");
			$("#burnconsume1_7").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour1_7").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume1_7").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});
	$("#chb1_8").change(function() {
		
		if ($("#chb1_8").is(':checked')) {
			$("#yearrunhour1_8").removeAttr("disabled").css("background","white");
			$("#burnconsume1_8").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour1_8").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume1_8").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});
	
	$("#chb2_1").change(function() {
		
		if ($("#chb2_1").is(':checked')) {
			$("#yearrunhour2_1").removeAttr("disabled").css("background","white");
			$("#burnconsume2_1").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour2_1").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume2_1").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});
	$("#chb2_2").change(function() {
		
		if ($("#chb2_2").is(':checked')) {
			$("#yearrunhour2_2").removeAttr("disabled").css("background","white");
			$("#burnconsume2_2").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour2_2").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume2_2").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});
	$("#chb2_3").change(function() {
		
		if ($("#chb2_3").is(':checked')) {
			$("#yearrunhour2_3").removeAttr("disabled").css("background","white");
			$("#burnconsume2_3").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour2_3").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume2_3").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});
	$("#chb2_4").change(function() {
		
		if ($("#chb2_4").is(':checked')) {
			$("#yearrunhour2_4").removeAttr("disabled").css("background","white");
			$("#burnconsume2_4").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour2_4").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume2_4").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});
	$("#chb2_5").change(function() {
		
		if ($("#chb2_5").is(':checked')) {
			$("#yearrunhour2_5").removeAttr("disabled").css("background","white");
			$("#burnconsume2_5").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour2_5").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume2_5").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});
	
	$("#chb3_1").change(function() {
		
		if ($("#chb3_1").is(':checked')) {
			$("#yearrunhour3_1").removeAttr("disabled").css("background","white");
			$("#burnconsume3_1").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour3_1").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume3_1").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});
	
	$("#chb4_1").change(function() {
		
		if ($("#chb4_1").is(':checked')) {
			$("#yearrunhour4_1").removeAttr("disabled").css("background","white");
			$("#burnconsume4_1").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour4_1").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume4_1").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});	
	$("#chb4_2").change(function() {
		
		if ($("#chb4_2").is(':checked')) {
			$("#yearrunhour4_2").removeAttr("disabled").css("background","white");
			$("#burnconsume4_2").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour4_2").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume4_2").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});	
	$("#chb4_3").change(function() {
		
		if ($("#chb4_3").is(':checked')) {
			$("#yearrunhour4_3").removeAttr("disabled").css("background","white");
			$("#burnconsume4_3").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour4_3").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume4_3").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});
	
	$("#chb5_1").change(function() {
		
		if ($("#chb5_1").is(':checked')) {
			$("#yearrunhour5_1").removeAttr("disabled").css("background","white");
			$("#burnconsume5_1").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour5_1").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume5_1").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});
	
	
	$("#chb6_1").change(function() {
		
		if ($("#chb6_1").is(':checked')) {
			$("#yearrunhour6_1").removeAttr("disabled").css("background","white");
			$("#burnconsume6_1").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour6_1").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume6_1").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});
	
	
	$("#chb7_1").change(function() {
		
		if ($("#chb7_1").is(':checked')) {
			$("#yearrunhour7_1").removeAttr("disabled").css("background","white");
			$("#burnconsume7_1").removeAttr("disabled").css("background","white");
		}
		else {
			$("#yearrunhour7_1").attr("disabled", "disabled").css("background","#f0f0f0");
			$("#burnconsume7_1").attr("disabled", "disabled").css("background","#f0f0f0");
		}
		
	});
	
	
	// 当选择“其他”的值时其相关信息列表显示或置灰；
	$("#kind").change(function() {
		if ($(this).val() == "其他") {
						
			$("#otherkind_label").removeClass("disabled");
			$("#otherkind").removeAttr("disabled").removeClass("disabled");
			
		}
		else {
			
			$("#otherkind").attr("disabled", "disabled").addClass("disabled");
			$("#otherkind").val();
			
			$("#otherkind_label").addClass("disabled");
		}
		
	});
	
	$("#type").change(function() {
		if ($(this).val() == "其他") {
						
			$("#othertype_label").removeClass("disabled");
			$("#othertype").removeAttr("disabled").removeClass("disabled");
			
		}
		else {
			
			$("#othertype").attr("disabled", "disabled").addClass("disabled");
			$("#othertype").val();
			
			$("#othertype_label").addClass("disabled");
		}
		
	});
	
	
	// 意见和建议
	$("#designue").change(function() {
		if ($(this).val() == "页面冗杂") {						
			$("#otherdesignue").removeAttr("disabled").removeClass("disabled");			
		}
		else {			
			$("#otherdesignue").attr("disabled", "disabled").addClass("disabled");
			$("#otherdesignue").val();			
		}		
	});
	
	$("#switchue").change(function() {
		if ($(this).val() == "页面切换不便") {						
			$("#otherswitchue").removeAttr("disabled").removeClass("disabled");			
		}
		else {			
			$("#otherswitchue").attr("disabled", "disabled").addClass("disabled");
			$("#otherswitchue").val();			
		}		
	});
	
	$("#reasonable").change(function() {
		if ($(this).val() == "难以理解") {						
			$("#otherreasonable").removeAttr("disabled").removeClass("disabled");			
		}
		else {			
			$("#otherreasonable").attr("disabled", "disabled").addClass("disabled");
			$("#otherreasonable").val();			
		}		
	});
	
	$("#overall").change(function() {
		if ($(this).val() == "很不全面") {						
			$("#otheroverall").removeAttr("disabled").removeClass("disabled");			
		}
		else {			
			$("#otheroverall").attr("disabled", "disabled").addClass("disabled");
			$("#otheroverall").val();			
		}		
	});
	
	$("#difficult").change(function() {
		if ($(this).val() == "非常困难") {						
			$("#otherdifficult").removeAttr("disabled").removeClass("disabled");			
		}
		else {			
			$("#otherdifficult").attr("disabled", "disabled").addClass("disabled");
			$("#otherdifficult").val();			
		}		
	});
	
	$("#consult").change(function() {
		if ($(this).val() == "完全没有查阅") {						
			$("#otherconsult").removeAttr("disabled").removeClass("disabled");			
		}
		else {			
			$("#otherconsult").attr("disabled", "disabled").addClass("disabled");
			$("#otherconsult").val();			
		}		
	});
	
	$("#helpful").change(function() {
		if ($(this).val() == "没有帮助") {						
			$("#otherhelpful").removeAttr("disabled").removeClass("disabled");			
		}
		else {			
			$("#otherhelpful").attr("disabled", "disabled").addClass("disabled");
			$("#otherhelpful").val();			
		}		
	});
	
	$("#vediowatch").change(function() {
		if ($(this).val() == "没有观看") {						
			$("#othervediowatch").removeAttr("disabled").removeClass("disabled");			
		}
		else {			
			$("#othervediowatch").attr("disabled", "disabled").addClass("disabled");
			$("#othervediowatch").val();			
		}		
	});
	
})