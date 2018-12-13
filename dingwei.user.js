 //1.01
 var oHead = document.getElementsByTagName('HEAD').item(0);
    var oScript= document.createElement("script");
    oScript.type = "text/javascript";
    oScript.src="http://211.103.254.208/Scripts/jquery.md5.js";
    oHead.appendChild( oScript);

   var nav= function(dfClick){
       console.log("nav被调用");
       setTimeout(function(){
           (dfClick&&typeof(dfClick)==="function")&&dfClick();
       },3000)
    };
    window.onload=function(){
        setTimeout(function(){
            console.log("刷新成功，绑定点击事件");
                        document.getElementsByClassName("metro-main-frame-refresh")[0].onclick=function(){
            nav(dataF); };
         document.getElementsByClassName("nav-area-img-panel")[0].onclick=function(){
            nav(dataF); };},3000);
    };
    var dataF=function (){
        console.log("dataF被调用");
        var dataFrame=document.getElementsByClassName("metro-main-frame") [0].contentWindow.document.getElementById("dataFrame").contentWindow.document;
        dataFrame.onclick=function(){
         setTimeout(function(){
             var formFrame=document.getElementsByClassName("metro-main-frame") [0].contentWindow.document.getElementById("dataFrame").contentWindow.document.getElementById("formFrame").contentWindow.document;
             var usershowid=formFrame.getElementById("CUSTOMERNO_Readonly");
             var tabf=formFrame.getElementById("aws-form-maintable");
             formFrame.getElementById("PRETAGLabel").innerHTML="用户社区";
             formFrame.getElementById("PRETAG_Readonly").innerHTML=formFrame.getElementById("COMMUNITYNAME").value;
             formFrame.getElementById("ONLINECHECKRESULTLabel").innerHTML="预约时间";
             formFrame.getElementById("ONLINECHECKRESULT_Readonly").style.color="red";
             formFrame.getElementById("URGETIMESLabel").innerHTML="当前时间";
             var nowData=new Date();
             formFrame.getElementById("URGETIMES_Readonly").innerHTML=nowData.toLocaleDateString();
             if(formFrame.getElementById("APPOINTDATE_Readonly").innerHTML!=="&nbsp;"){
                 formFrame.getElementById("ONLINECHECKRESULT_Readonly").innerHTML= formFrame.getElementById("APPOINTDATE_Readonly").innerHTML;
                 var yuyue=new Date(formFrame.getElementById("ONLINECHECKRESULT_Readonly").innerHTML);
                 // console.log(yuyue-nowData);
                 if((yuyue-nowData)<0){
                     alert("你这工单已经超时，或者马上超时了");
                 }
             }else{
                 alert("警告\n这个用户还没预约，我提醒你了，超时别怪我");
                 formFrame.getElementById("ONLINECHECKRESULT_Readonly").innerHTML="当前用户没有预约";
             }
             tabf.getElementsByTagName("table")[0].style.display="none";
             tabf.getElementsByTagName("table")[1].getElementsByTagName("tr")[1].style.display="none";
             tabf.getElementsByTagName("table")[1].getElementsByTagName("tr")[2].style.display="none";
             tabf.getElementsByTagName("table")[1].getElementsByTagName("tr")[3].style.display="none";
             tabf.getElementsByTagName("table")[1].getElementsByTagName("tr")[4].style.display="none";
             tabf.getElementsByTagName("table")[2].getElementsByTagName("tr")[2].style.display="none";
             tabf.getElementsByTagName("table")[2].getElementsByTagName("tr")[4].style.display="none";
             tabf.getElementsByTagName("table")[2].getElementsByTagName("tr")[5].style.display="none";
             tabf.getElementsByTagName("table")[3].style.display="none";
             usershowid.style.color="red";
             usershowid.onclick=function(){
                 var key = hex_md5("userid=" + this.innerHTML + "&providerid=1000000006&privatekey=41FA6D42-16AC-4598-B0F8-CE40723DD21F");
                 var href= "http://211.103.254.208:8081/ShowNetLinkPic.aspx?userid="+ this.innerHTML+ "&providerid=1000000006&key="+key;
                    window.open(href);
             }
         },3000)//end setTime

        }//end dataFrame click

    };//setInterval(dataF,20000);
