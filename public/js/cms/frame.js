// JavaScript Document
$(function () {
    $(".wt_dd").hover(function () {
        $(this).find(".drop_down").show();
    }, function () {
        $(this).find(".drop_down").hide();
    })


    $(".sider_bar .bar_top .search_bar").focus(function () {
        $(this).css("background-color", "white");
    })
    $(".sider_bar .bar_top .search_bar").blur(function () {
        $(this).css("background-color", "#374850");
    })

    /*$(".menu_parent").click(function(){
         $(this).siblings(".sub_menu").slideDown(400);
         $(this).parent().siblings().children(".sub_menu").slideUp(400);
         $(this).find(".arrow_down").css("background-position","0 -16px");
         $(this).parent().siblings().find(".arrow_down").css("background-position","0 0");
         $(this).addClass("cur");
         $(this).parent().siblings().children(".menu_parent").removeClass("cur");
     })*/

    $(".menu_parent").click(function () {
        $(this).addClass("cur");
        $(this).parent().siblings().children(".menu_parent").removeClass("cur");

        $(this).parent().siblings().children(".sub_menu").slideUp(400);
        $(this).parent().siblings().find(".arrow_down").css("background-position", "0 0");

        var ul = $(this).siblings(".sub_menu");

        if (ul.css('display') == 'none') {
            $(this).siblings(".sub_menu").slideDown(400);
            $(this).find(".arrow_down").css("background-position", "0 -16px");
        } else {
            $(this).siblings(".sub_menu").slideUp(400);
            $(this).find(".arrow_down").css("background-position", "0 0px");
        }
    })


    /*$(".sub_menu li").click(function(){
         $(this).addClass("cur");
         $(this).siblings("li").removeClass("cur")
     })*/

    // 三级菜单
    $(".sub_menu li a").click(function () {
        var parentli = $(this).parent("li");
        parentli.addClass("cur");
        parentli.siblings("li").removeClass("cur");

        parentli.siblings("li").children(".sub_sub_menu").slideUp(400);
        parentli.siblings("li").find(".arrow_down").css("background-position", "0 0");

        var sub_ul = parentli.children(".sub_sub_menu");

        if (sub_ul.css('display') == 'none') {
            sub_ul.slideDown(400);
            sub_ul.parent("li").find(".arrow_down").css("background-position", "0 -16px");

        } else {
            sub_ul.slideUp(400);
            sub_ul.parent("li").find(".arrow_down").css("background-position", "0 0px");
        }
    })

    $(".sub_sub_menu li").click(function () {
        $(this).addClass("cur");
        $(this).siblings("li").removeClass("cur");
    })
})

$(function () {
    var index_x = $(".page_index h5").html();
    var index_y = $(".page_index p").html();
    $(".menu_single").eq(index_x).find(".menu_parent").addClass("cur");
    $(".menu_single").eq(index_x).find(".sub_menu").find("li").eq(index_y).addClass("cur")
})

$(function () {
    $(".menu_ctl").click(function () {
        if ($(".sider_bar").css("left") == "0px") {
            $(".sider_bar").css("left", "-200px")
            $(".content_main").css("left", "0px")
            $(this).find("img").css("margin-top", "-0px")
        }
        else {
            $(".sider_bar").css("left", "0px")
            $(".content_main").css("left", "200px");
            $(this).find("img").css("margin-top", "-50px")
        }
    })
})

$(function () {
    $(".welcome").show();
    $(".welcome").animate({"top": "50%"}, 500);
    $(".welcome").css("margin-top", "-180px");

    $(".start_using").click(function () {
        $(".shelter").fadeOut(300);
        $(".welcome").fadeOut(300)
    })

})