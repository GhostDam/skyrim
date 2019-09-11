<?php
  //conectar con servidor formato 'host', 'usuario', 'contraseña', 'base de datos'
  $conectar=mysqli_connect('localhost', 'root', '', 'skyrim');
  mysqli_set_charset($conectar, "utf8");
//verificar conexion
  if (!$conectar){
    echo"no se pudo conectar con el servidor";
  }
  //recepcion de datos y almacenar en variables
$muro = $_POST["muro"];
$grito = $_POST["grito"];
$texto = $_POST["texto"];
//hacemos la sentencia de sql, es decir, especificar que se hara con los datos
$sql="INSERT INTO curiosidades VALUES('$muro',
                                '$texto',
                                '$grito')";
//ejecutar guardado, especificas La coneccion, y la funcion de escribir(guardar datos),
$ejecutar=mysqli_query($conectar, $sql);
//verficar ejecucion
if(!$ejecutar){
        echo"hubo algun error";
  }else
header('Location: curiosidades.html');
//cerrar coeccion
 ?>
