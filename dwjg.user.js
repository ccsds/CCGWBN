// ==UserScript==
// @name         当前用户网络状况页插件
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://211.103.254.208:8081/ShowNetLinkPic.aspx?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...49

    var url=window.location.href;
    var start=url.indexOf("=")+1;
    var end=url.indexOf("&");
    document.getElementsByTagName("h1")[0].innerHTML=url.substring(start,end);
    document.getElementsByTagName("h1")[1].innerHTML=url.substring(start,end);
})();
