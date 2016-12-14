$(function () {
    $(':checkbox').radiocheck();
    $(':radio').radiocheck();

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "positionClass": "toast-bottom-right",
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    if ($("#toast-container").length > 0) {
        if ($('#toast-container').css('display') == 'block') {
            setTimeout(function () {
                $('#toast-container').css('display', 'none');
            }, '3000')
        }
    }

    $(window).load(function () {
        var browser = navigator.appName;
        if (browser == 'Microsoft Internet Explorer') {
            var appversion = navigator.appVersion;
            var version = appversion.split(';');
            var trim_Version = version[1].replace(/[ ]/g, '');

            if (trim_Version == 'MSIE9.0' || trim_Version == 'MSIE8.0') {
                // $('input, textarea').placeholder();
            }
            if (trim_Version == 'MSIE6.0' || trim_Version == 'MSIE7.0') {
                alert('建议在IE8以上或者谷歌、火狐等浏览器浏览，当前IE内核为：' + trim_Version);
                return;
            }
        };

        if ($('.content').length > 0) {
            $('.content').mCustomScrollbar({
                scrollButtons: {
                    enable: true
                }
            });
        }
    });
});

function hidden_toast() {
    $('#toast-container').css('display', 'none');
}