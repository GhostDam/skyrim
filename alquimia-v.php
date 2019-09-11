<?php

  //conectar con servidor formato 'host', 'usuario', 'contraseña', 'base de datos'
  $conectar=mysqli_connect('localhost', 'root', '', 'skyrim');
//verificar conexion
  if (!$conectar){
    echo"no se pudo conectar con el servidor";
  }
  //OBTENEMOS LOS DATOS DE LA DB Y AGREGAMOS EL FILTRO DE BUSQUEDA
  $salida="";
  $query="SELECT * FROM alquimia ORDER By ingrediente1";

//--MOSTRAR LA TABLA CON EL CONTENIDO DE LA DB--///
  $resultado = $conectar->query($query);

//SI EL RESULTADO ENCUENTRA DATOS SE ARMARA UNA CABECERA DE TABLA
if ($resultado->num_rows> 0){

//MIENTRAS ESOS DATOS COINCIDAN, SE ARMARA LA TABLA RESPONDIENDO A LOS DATOS
while ($fila= $resultado->fetch_assoc()) {
 $salida.="<div>
 <div class='id'>".$fila['pocion']."</div>
 <div class='f1'>".$fila['ingrediente1']."</div>
 <div class='f2'>".$fila['ingrediente2']."</div>
 <div class='f3'>".$fila['ingrediente3']."</div>
 <div class='f4'>".$fila['valor']."</div>

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
