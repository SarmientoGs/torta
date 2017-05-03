<?php

    $conexion = new mysqli("localhost","root","","torta");
    
    if($conexion->connect_errno){
     echo "Fallo al conectar a Mysql: (".$conexion->connect_errno.")"." : ".$mysqli->connect_error; 
    }/*else{
    	echo "Conectado";
     //echo $conexion->host_info."\n";
    }*/

?>