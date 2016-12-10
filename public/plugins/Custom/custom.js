/**
 * Created by Administrator on 2016/12/2.
 */
(function (window, $) {
    var validResult = {};
    var checkObjs = {
        /**
         * 发送动态码
         * 参数：val 手机号
         */
        ajaxSendCode: function (val) {

            var _this = this;
            if ($(_this).attr("disabled")=="disabled") return false;

            $.ajax({
                url: "http://request.iteming.wang/fixedassets/sendcode/",
                type: "post",
                data: "mobile="+val,
                timeout: 5000,
                dataType: 'json',
                crossDomain:true,
                beforeSend: function (xhr) {
                    $(_this).attr("disabled", "disabled").text("正在发送...");
                    setInterval(function () {}, 2000);
                },
                error: function () {
                    $(_this).text("发送验证码").removeAttr("disabled");
                },
                success: function (ret) {
                    console.log(ret);
                    if (ret.status > 0) {
                        var i = 60;
                        var timer = setInterval(function () {
                            $(_this).text(--i + "秒后可重试");
                            if (i === 0) {
                                clearInterval(timer);
                                $(_this).text("重新获取").removeAttr("disabled");
                            }
                        }, 1000);
                        //记录验证码已发送，可在页面或其他js里使用 validResult["ajaxSendCode"] 来获取该值
                        //validResult["ajaxSendCode"] = true;
                    } else {
                        $(_this).text("发送验证码").removeAttr("disabled");
                    }
                }
            })
        }
    };

    window.validate = checkObjs;
    window.validResult = validResult;
})(window, jQuery);
