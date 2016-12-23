var editor;
KindEditor.ready(function (K) {
    editor = K.create('textarea[name="content"]', {
        cssPath: '../../../plugins/kindeditor-4.1.11/plugins/code/prettify.css',
        uploadJson: '/cms/kindeditor/fileupload',
        width: '100%',
        allowFileManager: true
    });
});
//fileManagerJson: '../../../plugins/kindeditor-4.1.11/php/file_manager_json.php',