// JavaScript Document

// ----------------------------  有机原辅材料   --------------------------------//
	
	
$(function(){
	// 当选择“其他”的值时其相关信息列表置灰或显示；
	$("#type").change(function() {
		if ($(this).val() == "其他") {
			
			$("#othertype").removeAttr("disabled").removeClass("disabled");
			$("#othertype_label").removeClass("disabled");
		}
		else {
			
			$("#othertype").attr("disabled", "disabled").addClass("disabled");
			$("#othertype").val("");
			$("#othertype_label").addClass("disabled");
		}
		
	});
	$("#type1").change(function() {
		if ($(this).val() == "其他") {
			
			$("#othertype1").removeAttr("disabled").removeClass("disabled");
			$("#othertype_label1").removeClass("disabled");
		}
		else {
			
			$("#othertype1").attr("disabled", "disabled").addClass("disabled");
			$("#othertype1").val("");
			$("#othertype_label1").addClass("disabled");
		}
		
	});
	
	
	$("#application").change(function() {
		if ($(this).val() == "其他") {
			
			$("#otherapplication").removeAttr("disabled").removeClass("disabled");
			$("#otherapplication_label").removeClass("disabled");
		}
		else {
			
			$("#otherapplication").attr("disabled", "disabled").addClass("disabled");
			$("#otherapplication").val("");
			$("#otherapplication_label").addClass("disabled");
		}
		
	});
	
	$("#application1").change(function() {
		if ($(this).val() == "其他") {
			
			$("#otherapplication1").removeAttr("disabled").removeClass("disabled");
			$("#otherapplication_label1").removeClass("disabled");
		}
		else {
			
			$("#otherapplication1").attr("disabled", "disabled").addClass("disabled");
			$("#otherapplication1").val("");
			$("#otherapplication_label1").addClass("disabled");
		}
		
	});
	
	
})		
	