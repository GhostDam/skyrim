<?php

  //conectar con servidor formato 'host', 'usuario', 'contraseña', 'base de datos'
  $conectar=mysqli_connect('localhost', 'root', '', 'skyrim');
//verificar conexion
  if (!$conectar){
    echo"no se pudo conectar con el servidor";
  }
  //OBTENEMOS LOS DATOS DE LA DB Y AGREGAMOS EL FILTRO DE BUSQUEDA
  $salida="";
  $query="SELECT * FROM menhires ORDER By nombre";
  if (isset($_POST['consulta'])) {
  $q = $conectar->real_escape_string($_POST['consulta']);
  $query = "SELECT nombre, efecto, localizacion FROM menhires";
}//

//--MOSTRAR LA TABLA CON EL CONTENIDO DE LA DB--///
  $resultado = $conectar->query($query);

//SI EL RESULTADO ENCUENTRA DATOS SE ARMARA UNA CABECERA DE TABLA
if ($resultado->num_rows> 0){

//MIENTRAS ESOS DATOS COINCIDAN, SE ARMARA LA TABLA RESPONDIENDO A LOS DATOS
while ($fila= $resultado->fetch_assoc()) {
 $salida.="<div class='menhir'>
 <p>".$fila['nombre']."</p>
 <p>".$fila['efecto']."</p>
 <p>".$fila['localizacion']."</p>

 </div>";}

//<select><option>".$fila['nombre']."</option></select>
//SIN DATOS QUE COMPARAR SE MOSTRARA LA TABLA COMPLETA
 $salida.="</tbody></table>";
}
else {
//DE NO COINCIDIR SE PEDIRA REVISION
  $salida.="";
}
echo utf8_encode($salida);
$conectar->close();
?>
