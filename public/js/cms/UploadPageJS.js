//取得整个html高度
var height = $(document).height();
var isIE = /msie/i.test(navigator.userAgent) && !window.opera;
///异步ajax上传
var FileAction = {
    FileUpload: function (fileid, pic_type, key_id, showid, hidden, picid, callback, resultarray, $scope) {
        if (!fileChange(fileid)) {
            return;
        }
        // 开始上传文件时显示一个图片
        $(document).ajaxStart(function () {
            $("#loading").height(height);
            $("#loading").show();
            // 文件上传完成将图片隐藏起来
        }).ajaxComplete(function () {
            $("#loading").hide();
        });
        $.ajaxFileUpload({
            url: '/cms/picture/fileupload',
            secureuri: false,
            fileElementId: fileid,
            data: {pic_type: pic_type, key_id: key_id},
            dataType: 'json',
            success: function (data) {
                console.log(data);
                if (data.status == 1) {
                    toastrShow(1, data.msg)
                    if (showid) showid.attr('src', data.data);
                    if (hidden) hidden.val(data.data);
                    if (picid) picid.val(data.picid);
                    if (callback) callback();
                    if (resultarray) {
                        resultarray.push(data.data);
                        $scope.$apply();
                    }
                } else {
                    toastrShow(2, data.msg)
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
    }
};

function fileChange(target) {
    var fileSize = 0;
    var filetypes = [".jpg", ".gif", ".png", ".txt", ".rar", ".zip", ".doc", ".xls",
        ".ppt", ".pdf", ".docx", ".xlsx", ".mp4", ".avi", ".wmv"];
    var filepath = $("#" + target).val();
    var filemaxsize = 1024 * 200;//2M
    if (filepath) {
        var isnext = false;
        var fileend = filepath.substring(filepath.lastIndexOf(".")).toLowerCase();
        if (filetypes && filetypes.length > 0) {
            for (var i = 0; i < filetypes.length; i++) {
                if (filetypes[i] == fileend) {
                    isnext = true;
                    break;
                }
            }
        }
        if (!isnext) {
            toastrShow(2, "不支持此文件类型！");
            $("#" + target).val("");
            return false;
        }
    } else {
        return false;
    }
    if (isIE && !$("#" + target).prop('files')) {
        try {
            var filePath = $("#" + target).val();
            var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
            if (!fileSystem.FileExists(filePath)) {
                toastrShow(2, "附件不存在，请重新上传！");
                return false;
            }
            var file = fileSystem.GetFile(filePath);
            fileSize = file.Size;
        } catch (e) {
            toastrShow(2, "由于浏览器安全问题，请按照以下设置：<br/> [1] 打开Internet Explorer 工具-->选项-->安全-->可信站点-->自定义级别，<br/> [2] 找到“对未标记为可安全执行脚本的 Activex 控件初始化并执行脚本”设置成“启用”<br/> [3] 刷新页面，重新上传（如果还是无法上传，尝试关闭浏览器重新打开再上传）")
            return false;
        }
        return true;
    } else {
        fileSize = $("#" + target).prop('files')[0].size;
    }

    var size = fileSize / 1024;
    if (size > filemaxsize) {
        toastrShow(2, "附件大小不能大于" + filemaxsize / 1024 + "M！");
        $("#" + target).val("");
        return false;
    }
    if (size <= 0) {
        toastrShow(2, "附件大小不能为0M！");
        $("#" + target).val("");
        return false;
    }
    return true;
}