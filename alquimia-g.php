<?php
  //conectar con servidor formato 'host', 'usuario', 'contraseña', 'base de datos'
  $conectar=mysqli_connect('localhost', 'root', '', 'skyrim');
  mysqli_set_charset($conectar, "utf8");
//verificar conexion
  if (!$conectar){
    echo"no se pudo conectar con el servidor";
  }
  //recepcion de datos y almacenar en variables
$pocion = $_POST["pocion"];
$ingrediente1 = $_POST["ingrediente1"];
$ingrediente2 = $_POST["ingrediente2"];
$ingrediente3 = $_POST["ingrediente3"];
$valor = $_POST["valor"];
//hacemos la sentencia de sql, es decir, especificar que se hara con los datos
$sql="INSERT INTO alquimia VALUES('$pocion',
                                '$ingrediente1',
                                '$ingrediente2',
                                '$ingrediente3',
                                '$valor')";
//ejecutar guardado, especificas La coneccion, y la funcion de escribir(guardar datos),
$ejecutar=mysqli_query($conectar, $sql);
//verficar ejecucion
if(!$ejecutar){
        echo"hubo algun error";
  }else
header('Location: alquimia.html');
//cerrar coeccion
 ?>
