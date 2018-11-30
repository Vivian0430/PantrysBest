function queryData(){
    queryAjax("get","php/product.php","class=swiper");
    console.log("aaa");
}
queryData();
function queryAjax(type,url,data) {
    var slider=document.querySelector(".swiper-slider");
    var ajax=new XMLHttpRequest();
    if(data){
        ajax.open(type,url+"?"+data);
    }else {
        ajax.open(type, url);
    }
        ajax.send();
        ajax.onreadystatechange=function() {
            if(ajax.readyState==4&&ajax.status==200){
                var json=JSON.parse(ajax.responseText);
                console.log("aa:"+ajax.responseText);
                var jsonone=json[0];
                var obj={
                    data:jsonone,
                }
                var html=template("template",obj);
                slider.innerHTML=html;
            }
        }
    
}
