 //1.01
 var oHead = document.getElementsByTagName('HEAD').item(0);
    var oScript= document.createElement("script");
    oScript.type = "text/javascript";
    oScript.src="http://211.103.254.208/Scripts/jquery.md5.js";
    oHead.appendChild( oScript);

   var nav= function(dfClick){
       console.log("nav������");
       setTimeout(function(){
           (dfClick&&typeof(dfClick)==="function")&&dfClick();
       },3000)
    };
    window.onload=function(){
        setTimeout(function(){
            console.log("ˢ�³ɹ����󶨵���¼�");
                        document.getElementsByClassName("metro-main-frame-refresh")[0].onclick=function(){
            nav(dataF); };
         document.getElementsByClassName("nav-area-img-panel")[0].onclick=function(){
            nav(dataF); };},3000);
    };
    var dataF=function (){
        console.log("dataF������");
        var dataFrame=document.getElementsByClassName("metro-main-frame") [0].contentWindow.document.getElementById("dataFrame").contentWindow.document;
        dataFrame.onclick=function(){
         setTimeout(function(){
             var formFrame=document.getElementsByClassName("metro-main-frame") [0].contentWindow.document.getElementById("dataFrame").contentWindow.document.getElementById("formFrame").contentWindow.document;
             var usershowid=formFrame.getElementById("CUSTOMERNO_Readonly");
             var tabf=formFrame.getElementById("aws-form-maintable");
             formFrame.getElementById("PRETAGLabel").innerHTML="�û�����";
             formFrame.getElementById("PRETAG_Readonly").innerHTML=formFrame.getElementById("COMMUNITYNAME").value;
             formFrame.getElementById("ONLINECHECKRESULTLabel").innerHTML="ԤԼʱ��";
             formFrame.getElementById("ONLINECHECKRESULT_Readonly").style.color="red";
             formFrame.getElementById("URGETIMESLabel").innerHTML="��ǰʱ��";
             var nowData=new Date();
             formFrame.getElementById("URGETIMES_Readonly").innerHTML=nowData.toLocaleDateString();
             if(formFrame.getElementById("APPOINTDATE_Readonly").innerHTML!=="&nbsp;"){
                 formFrame.getElementById("ONLINECHECKRESULT_Readonly").innerHTML= formFrame.getElementById("APPOINTDATE_Readonly").innerHTML;
                 var yuyue=new Date(formFrame.getElementById("ONLINECHECKRESULT_Readonly").innerHTML);
                 // console.log(yuyue-nowData);
                 if((yuyue-nowData)<0){
                     alert("���⹤���Ѿ���ʱ���������ϳ�ʱ��");
                 }
             }else{
                 alert("����\n����û���ûԤԼ�����������ˣ���ʱ�����");
                 formFrame.getElementById("ONLINECHECKRESULT_Readonly").innerHTML="��ǰ�û�û��ԤԼ";
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
