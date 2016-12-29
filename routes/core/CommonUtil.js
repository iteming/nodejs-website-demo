var moment = require('moment');

/**
 * 工具类 包装
 */
CommonUtil=function(){};
CommonUtil.isStrEmpty = function(text){
	if(text == undefined || text == null || text == '' || text == 'null' || text == 'undefined'){
		return true;
	}
	return text.replace(/(\s*$)/g, '') == '';
};
CommonUtil.trim = function(str){ //删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, "");
};
CommonUtil.ltrim = function(str){ //删除左边的空格
    return str.replace(/(^\s*)/g,"");
};
CommonUtil.rtrim = function(str){ //删除右边的空格
    return str.replace(/(\s*$)/g,"");
};

CommonUtil.isObjEmpty = function(obj){
	if(obj != null && obj != undefined && typeof(obj) == 'object'){
		for (var prop in obj)return false;
	}
	return true;
};
CommonUtil.uuid = function(){
	var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = "";
    var uuid = s.join("");
    return uuid;
};

CommonUtil.toDateTimeString = function (timeStamp) {
    return toMoment(timeStamp).format('YYYY-MM-DD HH:mm:ss');
};

CommonUtil.toDateString = function (timeStamp) {
    return toMoment(timeStamp).format('YYYY-MM-DD');
};

CommonUtil.toTimeString = function (timeStamp) {
    return toMoment(timeStamp).format('HH:mm:ss');
};

function toMoment(timeStamp) {
    return moment(timeStamp);
    // return moment(timeStamp * 1000);
}




