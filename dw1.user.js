// ==UserScript==
// @name         多个账号同时定位
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://211.103.254.208:8081/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    //提示信息
    document.getElementsByTagName("h3")[0].innerHTML="当前支持账号以单个空格分隔多账号同时定位，这里不对账号准确性进行校验";
    document.getElementsByTagName("label")[0].innerHTML="用户账号，多个账号以空格分隔";
     
    var uid=document.getElementById("userid");
    var key ;
    var href;
    //创建一个按钮，用于区分定位账号多少
    var btn=document.createElement('button');
    btn.style='background-color: #f6f6f6; border-color: #dddddd;color: #333333;text-shadow: 0 1px 0 #f3f3f3; cursor: pointer; width:100%; margin: .5em 0; padding: .7em 1em;';
    btn.id="btn";
    var iframe;
    btn.innerHTML="定位多个账号";
    document.getElementsByTagName("div")[4].appendChild(btn);
     var box  = document.createElement('div');

         document.getElementsByTagName("div")[4].appendChild(box);
   //循环切割账号
 function action(){


     var userid=uid.value+" ";
     var id;
    var start=0;
    var end=userid.indexOf(" ");
    for(;end!=-1;end=userid.indexOf(" ")){
       //console.log("当前end====="+end+"当前start====="+start+"当前userid===="+userid);
       id=userid.substring(start,end);
        userid=userid.substring(end+1,userid.length);
        key = hex_md5("userid=" + id + "&providerid=1000000006&privatekey=41FA6D42-16AC-4598-B0F8-CE40723DD21F");
       href= "http://211.103.254.208:8081/ShowNetLinkPic.aspx?userid="+ id+ "&providerid=1000000006&key="+key;


     iframe  = document.createElement('iframe');
        iframe.src=href;
       box.appendChild(iframe);
//浏览器会拦截，结果只会打开一个窗口
     // window.open(href);
    }
 };

btn.onclick=function(){
     box.innerHTML="";
action();

}



})();
