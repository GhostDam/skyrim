<?php
  //conectar con servidor formato 'host', 'usuario', 'contraseña', 'base de datos'
  $conectar=mysqli_connect('localhost', 'root', '', 'skyrim');
  mysqli_set_charset($conectar, "utf8");
//verificar conexion
  if (!$conectar){
    echo"no se pudo conectar con el servidor";
  }
  //recepcion de datos y almacenar en variables
$nombres = $_POST["del"];
//hacemos la sentencia de sql, es decir, especificar que se hara con los datos
//SQLQUE"DELETE FROM `teclado` WHERE `ID_TECLADO` = 'save'"
$sql="DELETE FROM alquimia WHERE pocion =('$nombres')";

//ejecutar guardado, especificas La coneccion, y la funcion de escribir(guardar datos),
$ejecutar=mysqli_query($conectar, $sql);
//verficar ejecucion
if(!$ejecutar){
        echo"hubo algun error";
  }else
header('Location: alquimia.html');
//cerrar coeccion
 ?>
