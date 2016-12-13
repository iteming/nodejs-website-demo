// JavaScript Document

//================================================== 废气治理设施 ===============//

$(function(){
	
	$("#technology").change(function() {
		
		if ($(this).val() == "其他净化方法") {
			
			$("#othertechnology").removeAttr("disabled").removeClass("disabled");
			$("#othertechnology_label").removeClass("disabled");
		}
		else {
			
			$("#othertechnology").attr("disabled", "disabled").addClass("disabled");
			$("#othertechnology").val("");
			$("#othertechnology_label").addClass("disabled");
		}
	});
	
	
	$("#technology1").change(function() {
		
		if ($(this).val() == "其他净化方法") {
			
			$("#othertechnology1").removeAttr("disabled").removeClass("disabled");
			$("#othertechnology_label1").removeClass("disabled");
		}
		else {
			$("#othertechnology1").attr("disabled", "disabled").addClass("disabled");
			$("#othertechnology1").val("");
			$("#othertechnology_label1").addClass("disabled");
		}
		
	})
	
})