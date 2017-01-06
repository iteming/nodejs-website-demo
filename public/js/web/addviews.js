$(document).ready(function () {
    $.ajax({
        url: "/views",
        type: "post",
        data: { type: "website" },
        dataType: "json",
        success: function (data) {
            if (data.status != 1) {
                toastrShow(data.status, data.msg);
            }
        }
    });
});