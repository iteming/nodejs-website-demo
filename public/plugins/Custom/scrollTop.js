/**
 * Created by Administrator on 2017/1/3.
 */

function SetCookie(sName, sValue) {
    date = new Date();
    s = date.getDate();
    date.setDate(s+1);
    document.cookie = sName + "=" + escape(sValue) + "; expires=" + date.toGMTString();
}

function GetCookie(sName) {
    var aCookie = document.cookie.split("; ");
    for(var i=0;i< aCookie.length; i++){
        var aCrumb = aCookie[i].split("=");
        if (sName == aCrumb[0]){
            return unescape(aCrumb[1]);
        }
        return null;
    }
}

function fnLoad() {
    document.body.scrollTop = GetCookie("scrollTop");
    // document.body.animate({scrollTop: GetCookie("scrollTop")}, 800);
    console.log((document.body.scrollTop)+' 获取cookie!');
}

function fnUnload() {
    SetCookie("scrollTop", document.body.scrollTop);
    console.log((document.body.scrollTop)+' 设置cookie!');
}

window.onunload = fnUnload;
window.onload = fnLoad;