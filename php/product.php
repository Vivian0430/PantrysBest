<?php
 header("content-type:text/html;charset=utf-8");
 $dsn="mysql:host=localhost;dbname=party;charset=UTF8";
 $username="root";
 $password="root";
 try{
     $pdo=new PDO($dsn,$username,$password);
     $stmt=$pdo->prepare("select * from product where productClass=?");
     $class=$_GET["class"];//设置全局变量
     $stmt->execute(array($class));//获取信息
     while($row=$stmt->fetchAll()){
     $arr[]=$row;
 }
 if($arr[]=null){
    echo 0;
 }else{
    $json=json_encode($arr);//php对象转换成字符串
    echo $json;
    }
}catch(PDOException $e){}//捕获到的异常
?>