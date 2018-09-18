// ==UserScript==
// @name         鹏博士工单系统自动接单
// @namespace    http://tampermonkey.net/
// @version      0.3.1
// @description  try to take over the world!
// @author       天堂小助手
// @match        http://dzgd.drpeng.com.cn:8079/portal/r/w
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
try{
    console.log("脚本开始执行。。。");
     //document.getElementsByClassName("metro-main-frame") [0].src="http://dzgd.drpeng.com.cn:8079/portal/r/w?sid=8d49bec2-f2af-4c86-80ed-7d616f0ebb49&cmd=com.actionsoft.apps.workbench_main_page";
  var sq=/长春沈铁盛华庭|长春远东小区|长春温州城|长春太平洋鞋城（商）|长春贵阳高层|长春贵阳小区|长春新发社区四期|长春新发社区三期|长春长白路社区|a/;

    var countIndent=0;
     var aud=document.createElement("audio");
    setTimeout(function(){

         var logIndent=document.createElement("textarea");
         logIndent.style.cssText="background:yellow;position:fixed;left:78px;top:300px;z-index:1;height:20px;cursor:pointer;height:400px;width:200px;text-align:center;"
        logIndent.id="logIndent";
        logIndent.innerHTML="接单日志\n";
         document.body.append(logIndent);

        document.getElementById("logIndent").onclick=function(){
          
            if(this.style.background=="yellow"){
                this.style.background="red";
                  clearInterval(selectIn);
                this.innerHTML="自动接单已停止\n"+document.getElementById("logIndent").innerHTML;
            }else{
                this.style.background="yellow";
                this.innerHTML="自动接单已开始\n"+document.getElementById("logIndent").innerHTML;
                selectIn=setInterval(si ,200000);
            }

        }

     //   logIndent.innerHTML="插入来单音乐\n"+document.getElementById("logIndent").innerHTML;
        
         //拳皇ko音效
         aud.src="https://mms-res.cdn.bcebos.com/fFhO6IAaZmBQBUhM9V0CBCs3hUTQ0QRMZIni9UhwBRlC0WgRZmniBpRenFvkrUgquWgquQXRfFSvrUCRBm8qZWkbZIg.mp3";
         aud.controls="aud.controls";
        aud.volume = 0.5;
        document.body.append(aud);

        document.getElementsByClassName("nav-area-img-panel")[0].click();
        setTimeout(si,20000);
        document.getElementById("logIndent").innerHTML+=("欢迎你："+ document.getElementById("userInfoName").innerHTML+"\n");
        document.getElementById("logIndent").innerHTML+="接单社区为"+sq+"\n";
        document.getElementById("logIndent").innerHTML="查询当前订单数\n"+document.getElementById("logIndent").innerHTML;

    },4000);
    function getIndent(len,nowTime){
      
        document.getElementsByClassName("metro-main-frame")[0].contentWindow.document.getElementById("conTaskButton").click();
      
        var checked=false;
switch(countIndent){
case 0:
        aud.src="http://lol.52pk.com/lingsheng/mp3.shtml?url=http://lol.52pk.com/pifu/sounds/qita/16.mp3";
        break;
case 1:
        aud.src="http://lol.52pk.com/lingsheng/mp3.shtml?url=http://lol.52pk.com/pifu/sounds/qita/1.mp3";
        break;
 case 2:
        aud.src="http://lol.52pk.com/lingsheng/mp3.shtml?url=http://lol.52pk.com/pifu/sounds/qita/2.mp3";
        break;
 case 3:
         aud.src="http://lol.52pk.com/lingsheng/mp3.shtml?url=http://lol.52pk.com/pifu/sounds/qita/3.mp3";
        break;
 case 4:
         aud.src="http://lol.52pk.com/lingsheng/mp3.shtml?url=http://lol.52pk.com/pifu/sounds/qita/4.mp3";
        break;
    default:
 aud.src="http://lol.52pk.com/lingsheng/mp3.shtml?url=http://lol.52pk.com/pifu/sounds/qita/10.mp3";
        break;
}
        setTimeout(function(){
 document.getElementById("logIndent").innerHTML+="社区查询中...\n";
            var sheq='';
            for(var i =0 ;i<len;i++){
                sheq=document.getElementsByClassName("metro-main-frame") [0].contentWindow.document.getElementsByClassName("aws-grid-row") [i].getElementsByClassName("pq-td-div")[3].innerHTML;
              
                 document.getElementById("logIndent").innerHTML=("社区是:"+sheq+"\n"+document.getElementById("logIndent").innerHTML);
                 if(!checked&&	sq.test(sheq)){
                     document.getElementsByClassName("metro-main-frame") [0].contentWindow.document.getElementsByClassName("aws-grid-row")[0].getElementsByTagName ("input")[0].click();
                 document.getElementById("logIndent").innerHTML=("已选中社区："+sheq+"\n"+document.getElementById("logIndent").innerHTML);
                checked=true;
               
            }else if(!checked&&len>1 && sq.test(sheq)){
               document.getElementById("logIndent").innerHTML=("已选中社区"+sheq+"\n"+document.getElementById("logIndent").innerHTML);
                checked=true;
                document.getElementsByClassName("metro-main-frame") [0].contentWindow.document.getElementsByClassName("aws-grid-row")[1].getElementsByTagName ("input")[0].click();
            }else if(!checked&&len>2 && sq.test(sheq)){
               document.getElementById("logIndent").innerHTML=("已选中社区"+sheq+"\n"+document.getElementById("logIndent").innerHTML);
                checked=true;
                	document.getElementsByClassName("metro-main-frame") [0].contentWindow.document.getElementsByClassName("aws-grid-row")[2].getElementsByTagName ("input")[0].click();
            }else if(!checked&&len>3 && sq.test(sheq)){
               document.getElementById("logIndent").innerHTML=("已选中社区"+sheq+"\n"+document.getElementById("logIndent").innerHTML);
                checked=true;
                document.getElementsByClassName("metro-main-frame") [0].contentWindow.document.getElementsByClassName("aws-grid-row")[3].getElementsByTagName ("input")[0].click();
            }
            }
           
        },3000);
        setTimeout(function(){
            if(checked){
                console.log("点击确定");
                countIndent++;
                document.getElementsByClassName("metro-main-frame") [0].contentWindow.document.getElementsByClassName("dlg-button")[0].getElementsByClassName ("blue")[0].click();
    
                 document.getElementById("logIndent").innerHTML=("接单成功，当前时间："+nowTime.toLocaleTimeString()+"\n"+document.getElementById("logIndent").innerHTML);
                document.getElementsByTagName("audio")[0].play();

            }else{
                 document.getElementById("logIndent").innerHTML="当前没有您的订单...\n"+document.getElementById("logIndent").innerHTML;
            }
        },6000);

        setTimeout(function(){
            console.log("关闭接单列表");
            document.getElementsByClassName("metro-main-frame") [0].contentWindow.document.getElementsByClassName ("dlg-close")[0].click();

        },8000);
    }

 function si(){
     try{

      var nowTime=new Date();

        var len=document.getElementsByClassName("metro-main-frame")[0].contentWindow.document.getElementById("conTask").innerHTML*1;
       
          document.getElementById("logIndent").innerHTML=("当前订单数："+len+"\n"+document.getElementById("logIndent").innerHTML);
        setTimeout(function(){
            document.getElementsByClassName("metro-main-frame-refresh")[0].click();
        },4000);
        if(len>0){
            document.getElementById("logIndent").innerHTML="开始接取订单\n"+document.getElementById("logIndent").innerHTML;
            setTimeout(function(){
                getIndent(len,nowTime);

            },8000);

        }else{

            document.getElementById("logIndent").innerHTML=("当前时间："+nowTime.toLocaleTimeString()+" 没有订单\n"+document.getElementById("logIndent").innerHTML);
        }
     }catch(e){
     }
 }

     var selectIn=setInterval(si ,200000);


    console.log("脚本正在执行。。。定时器已启用");
}catch(e){
    location.reload();
    window.open("https://www.baidu.com/s?ie=UTF-8&wd="+e.message);
}


})();
