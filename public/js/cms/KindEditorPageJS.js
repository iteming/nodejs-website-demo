var editor;
KindEditor.ready(function (K) {
    editor = K.create('textarea[name="content"]', {
        cssPath: '../../../plugins/kindeditor-4.1.11/plugins/code/prettify.css',
        uploadJson: '../../../plugins/kindeditor-4.1.11/asp.net/upload_json.ashx',
        fileManagerJson: '../../../plugins/kindeditor-4.1.11/asp.net/file_manager_json.ashx',
        allowFileManager: true,
        afterCreate: function () {
            var self = this;
            K.ctrl(document, 13, function () {
                self.sync();
                K('form[name=example]')[0].submit();
            });
            K.ctrl(self.edit.doc, 13, function () {
                self.sync();
                K('form[name=example]')[0].submit();
            });
        }
    });
});