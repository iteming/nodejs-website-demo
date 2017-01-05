$(document).ready(function () {
    $.ajax({
        url: "/website/views",
        type: "get",
        dataType: "json",
        success: function (data) {
            if (data.status != 1) {
                toastrShow(data.status, data.msg);
            }
        }
    });
});