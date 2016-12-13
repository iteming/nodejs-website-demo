// JavaScript Document

// ----------------------------  存储设施   --------------------------------//
	
	
$(function(){
	
	// 当选择“其他”的值时其相关信息列表置灰或显示；
	$("#materialtype").change(function() {
		
		if ($(this).val() == "油品") {
			
			$("#material").attr("disabled", "disabled").addClass("disabled");
			$("#material").get(0).selectedIndex = 0;
			
			$(".oilname").show();
			$(".oil").show();
			
			$("#othermaterial").attr("disabled", "disabled").addClass("disabled");
			$("#othermaterial").val("");
			$("#othermaterial_label").addClass("disabled");
			
			$(".casem").hide();
			$("#cas").removeAttr("disabled").removeClass("disabled");
			$("#cas").val("");
			$("#antoine_a").removeAttr("disabled").removeClass("disabled");
			$("#antoine_a").val("");
			$("#antoine_b").removeAttr("disabled").removeClass("disabled");
			$("#antoine_b").val("");
			$("#antoine_c").removeAttr("disabled").removeClass("disabled");
			$("#antoine_c").val("");
			$("#mol").removeAttr("disabled").removeClass("disabled");
			/*$("#mol").val("");*/
			$("#liquid").removeAttr("disabled").removeClass("disabled");
			/*$("#liquid").val("");*/
		}
		else {
			$("#material").removeAttr("disabled").removeClass("disabled");
			
			$(".oilname").hide();
			$(".oil").hide();
			
			$(".casem").show();
			$("#cas").removeAttr("disabled").addClass("disabled");
			$("#cas").val("");
			$("#antoine_a").removeAttr("disabled").addClass("disabled");
			$("#antoine_a").val("");
			$("#antoine_b").removeAttr("disabled").addClass("disabled");
			$("#antoine_b").val("");
			$("#antoine_c").removeAttr("disabled").addClass("disabled");
			$("#antoine_c").val("");
			$("#mol").removeAttr("disabled").addClass("disabled");
			/*$("#mol").val("");*/
			$("#liquid").removeAttr("disabled").addClass("disabled");
			/*$("#liquid").val("");*/		
			
		}
		
	});
	
	
	$("#material").change(function() {
		if ($(this).val() == "其他") {
			
			$("#othermaterial").removeAttr("disabled").removeClass("disabled");
			$("#othermaterial_label").removeClass("disabled");
		}
		else {
			$("#othermaterial").attr("disabled", "disabled").addClass("disabled");
			$("#othermaterial").val("");
			$("#othermaterial_label").addClass("disabled");
		}
		
	})
	
	$("#material1").change(function() {
		if ($(this).val() == "其他") {
			
			$("#othermaterial1").removeAttr("disabled").removeClass("disabled");
			$("#othermaterial_label1").removeClass("disabled");
		}
		else {
			$("#othermaterial1").attr("disabled", "disabled").addClass("disabled");
			$("#othermaterial1").val("");
			$("#othermaterial_label1").addClass("disabled");
		}
		
	})
	
	$("#oilname_2").change(function() {
		if ($(this).val() == "其他") {
			
			$("#oilName").removeAttr("disabled").removeClass("disabled");
		}
		else {
			$("#oilName").attr("disabled", "disabled").addClass("disabled");
			$("#oilName").val("");
		}
		
	});
	
	$("#oilname_21").change(function() {
		if ($(this).val() == "其他") {
			
			$("#oilName1").removeAttr("disabled").removeClass("disabled");
		}
		else {
			$("#oilName1").attr("disabled", "disabled").addClass("disabled");
			$("#oilName1").val("");
		}
		
	});
	
	
	
	$("#materialtype1").change(function() {
		
		if ($(this).val() == "油品") {
			
			$("#material1").attr("disabled", "disabled").addClass("disabled");
			$("#material1").get(0).selectedIndex = 0;
			
			$(".oilname").show();
			$(".oil").show();
			
			$("#othermaterial1").attr("disabled", "disabled").addClass("disabled");
			$("#othermaterial1").val("");
			$("#othermaterial_label1").addClass("disabled");
			
			$(".casem").hide();
			$("#cas1").removeAttr("disabled").removeClass("disabled");
			$("#cas1").val("");
			$("#antoine_a1").removeAttr("disabled").removeClass("disabled");
			$("#antoine_a1").val("");
			$("#antoine_b1").removeAttr("disabled").removeClass("disabled");
			$("#antoine_b1").val("");
			$("#antoine_c1").removeAttr("disabled").removeClass("disabled");
			$("#antoine_c1").val("");
			$("#mol1").removeAttr("disabled").removeClass("disabled");
			$("#mol1").val("");
			$("#liquid1").removeAttr("disabled").removeClass("disabled");
			$("#liquid1").val("");
		}
		else {
			$("#material1").removeAttr("disabled").removeClass("disabled");
			
			$(".oilname").hide();
			$(".oil").hide();
			
			$(".casem").show();
			$("#cas1").removeAttr("disabled").addClass("disabled");
			$("#cas1").val("");
			$("#antoine_a1").removeAttr("disabled").addClass("disabled");
			$("#antoine_a1").val("");
			$("#antoine_b1").removeAttr("disabled").addClass("disabled");
			$("#antoine_b1").val("");
			$("#antoine_c1").removeAttr("disabled").addClass("disabled");
			$("#antoine_c1").val("");
			$("#mol1").removeAttr("disabled").addClass("disabled");
			$("#mol1").val("");
			$("#liquid1").removeAttr("disabled").addClass("disabled");
			$("#liquid1").val("");		
			
		}
		
	});
	
	
	$("#connect").change(function() {
		if ($(this).val() == "铆接") {
			
			$(".HJ").hide();
			$(".MJ").show();
			
		}
		else {
			$(".HJ").show();
			$(".MJ").hide();
		}
		
	});
	
	$("#connect1").change(function() {
		if ($(this).val() == "铆接") {
			
			$(".HJ").hide();
			$(".MJ").show();
			
		}
		else {
			$(".HJ").show();
			$(".MJ").hide();
		}
		
	});
	
	$("#tank03_copy .device_info_min_div").click(function(){
		$(".fancybox-wrap").show();
		$(".fancybox-overlay-fixed").show();
	})
	
	$(".fancybox-close").click(function(){
		$(".fancybox-wrap").hide();
		$(".fancybox-overlay-fixed").hide();
	})	
	
	$("#tank03_copy .add_device_span").click(function(){
		$(".fancybox-wrap").show();
		$(".fancybox-overlay-fixed").show();
	})
	
	
	$("#tank04_copy .device_info_min_div").click(function(){
		$(".fancybox-wrap").show();
		$(".fancybox-overlay-fixed").show();
	})
	
	$("#tank04_copy .add_device_span").click(function(){
		$(".fancybox-wrap").show();
		$(".fancybox-overlay-fixed").show();
	})
	
})	