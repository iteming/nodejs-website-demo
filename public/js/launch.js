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

    if ($('#toast-container').css('display') == 'block') {
        setTimeout(function () {
            $('#toast-container').css('display','none');
        },'3000')
    }

    $(window).load(function(){
        $(".content").mCustomScrollbar({
            scrollButtons:{
                enable:true
            }
        });
    });

});

function hidden_toast() {
    $('#toast-container').css('display','none');
}