    console.log("�ű���ʼִ�С�����");


    setTimeout(function(){

         var logIndent=document.createElement("textarea");
         logIndent.style.cssText="background:yellow;position:fixed;left:78px;top:300px;z-index:1;height:20px;cursor:pointer;height:400px;width:200px;text-align:center;"
        logIndent.id="logIndent";
        logIndent.innerHTML="�ӵ���־\n";
         document.body.append(logIndent);

        document.getElementById("logIndent").onclick=function(){
          
            if(this.style.background=="yellow"){
                this.style.background="red";
                  clearInterval(selectIn);
                this.innerHTML="�Զ��ӵ���ֹͣ\n"+document.getElementById("logIndent").innerHTML;
            }else{
                this.style.background="yellow";
                this.innerHTML="�Զ��ӵ��ѿ�ʼ\n"+document.getElementById("logIndent").innerHTML;
                selectIn=setInterval(si ,200000);
            }

        }

        logIndent.innerHTML="������������\n"+document.getElementById("logIndent").innerHTML;
         var aud=document.createElement("audio");
         //ȭ��ko��Ч
         aud.src="https://mms-res.cdn.bcebos.com/fFhO6IAaZmBQBUhM9V0CBCs3hUTQ0QRMZIni9UhwBRlC0WgRZmniBpRenFvkrUgquWgquQXRfFSvrUCRBm8qZWkbZIg.mp3";
         aud.controls="aud.controls";
        document.body.append(aud);

        document.getElementsByClassName("nav-area-img-panel")[0].click();

        document.getElementById("logIndent").innerHTML="��ѯ��ǰ������\n"+document.getElementById("logIndent").innerHTML;
    },4000);
    function getIndent(len,nowTime){

 document.getElementById("logIndent").innerHTML+="�򿪽ӵ��б�\n";
        document.getElementsByClassName("metro-main-frame")[0].contentWindow.document.getElementById("conTaskButton").click();
        var sq=/��������ʢ��ͥ|����Զ��С��|�������ݳ�|����̫ƽ��Ь�ǣ��̣�|���������߲�|��������С��|�����·���������|�����·���������|��������·����|a/;
        var checked=false;
        setTimeout(function(){
            console.log("");
 document.getElementById("logIndent").innerHTML+="������ѯ��...\n";
            var sheq='';
            for(var i =0 ;i<len;i++){
                sheq=document.getElementsByClassName("metro-main-frame") [0].contentWindow.document.getElementsByClassName("aws-grid-row") [i].getElementsByClassName("pq-td-div")[3].innerHTML;
                console.log();
                 document.getElementById("logIndent").innerHTML=("������:"+sheq+"\n"+document.getElementById("logIndent").innerHTML);
                 if(	sq.test(sheq)){

                 document.getElementById("logIndent").innerHTML=("��ѡ��������"+sheq+"\n"+document.getElementById("logIndent").innerHTML);
                checked=true;
                document.getElementsByClassName("metro-main-frame") [0].contentWindow.document.getElementsByClassName("aws-grid-row")[0].getElementsByTagName ("input")[0].click();
            }else if(len>1 && sq.test(sheq)){
               document.getElementById("logIndent").innerHTML=("��ѡ������"+sheq+"\n"+document.getElementById("logIndent").innerHTML);
                checked=true;
                document.getElementsByClassName("metro-main-frame") [0].contentWindow.document.getElementsByClassName("aws-grid-row")[1].getElementsByTagName ("input")[0].click();
            }else if(len>2 && sq.test(sheq)){
               document.getElementById("logIndent").innerHTML=("��ѡ������"+sheq+"\n"+document.getElementById("logIndent").innerHTML);
                checked=true;
                	document.getElementsByClassName("metro-main-frame") [0].contentWindow.document.getElementsByClassName("aws-grid-row")[2].getElementsByTagName ("input")[0].click();
            }else if(len>3 && sq.test(sheq)){
               document.getElementById("logIndent").innerHTML=("��ѡ������"+sheq+"\n"+document.getElementById("logIndent").innerHTML);
                checked=true;
                document.getElementsByClassName("metro-main-frame") [0].contentWindow.document.getElementsByClassName("aws-grid-row")[3].getElementsByTagName ("input")[0].click();
            }
            }
           
        },3000);
        setTimeout(function(){
            if(checked){
                console.log("���ȷ��");
                document.getElementsByClassName("metro-main-frame") [0].contentWindow.document.getElementsByClassName("dlg-button")[0].getElementsByClassName ("blue")[0].click();
                console.log();
                 document.getElementById("logIndent").innerHTML=("�ӵ��ɹ�����ǰʱ�䣺"+nowTime.toLocaleTimeString()+"\n"+document.getElementById("logIndent").innerHTML);
                document.getElementsByTagName("audio")[0].play();

            }else{
                 document.getElementById("logIndent").innerHTML="��ǰû�����Ķ���...\n"+document.getElementById("logIndent").innerHTML;
            }
        },6000);

        setTimeout(function(){
            console.log("�رսӵ��б�");
            document.getElementsByClassName("metro-main-frame") [0].contentWindow.document.getElementsByClassName ("dlg-close")[0].click();

        },8000);
    }

 function si(){
      var nowTime=new Date();

        var len=document.getElementsByClassName("metro-main-frame")[0].contentWindow.document.getElementById("conTask").innerHTML*1;
        console.log();
          document.getElementById("logIndent").innerHTML=("��ǰ��������"+len+"\n"+document.getElementById("logIndent").innerHTML);
        setTimeout(function(){
            document.getElementsByClassName("metro-main-frame-refresh")[0].click();
        },4000);
        if(len>0){
            document.getElementById("logIndent").innerHTML="��ʼ��ȡ����\n"+document.getElementById("logIndent").innerHTML;
            setTimeout(function(){
                getIndent(len,nowTime);

            },8000);

        }else{

            document.getElementById("logIndent").innerHTML=("��ǰʱ�䣺"+nowTime.toLocaleTimeString()+" û�ж���\n"+document.getElementById("logIndent").innerHTML);
        }
    }

     var selectIn=setInterval(si ,200000);




    console.log("�ű�����ִ�С�������ʱ��������");

