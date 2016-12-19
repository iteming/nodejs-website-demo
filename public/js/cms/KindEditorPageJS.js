var editor;
KindEditor.ready(function (K) {
    editor = K.create('textarea[name="content"]', {
        cssPath: '../../../plugins/kindeditor-4.1.11/plugins/code/prettify.css',
        uploadJson: '../../../plugins/kindeditor-4.1.11/php/upload_json.php',
        fileManagerJson: '../../../plugins/kindeditor-4.1.11/php/file_manager_json.php',
        width: '100%',
        allowFileManager: true
    });
});