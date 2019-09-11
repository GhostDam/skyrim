<?php

  //conectar con servidor formato 'host', 'usuario', 'contraseña', 'base de datos'
  $conectar=mysqli_connect('localhost', 'root', '', 'skyrim');
//verificar conexion
  if (!$conectar){
    echo"no se pudo conectar con el servidor";
  }
  //OBTENEMOS LOS DATOS DE LA DB Y AGREGAMOS EL FILTRO DE BUSQUEDA
  $salida="";
  $query="SELECT * FROM muros ORDER By grito";
  if (isset($_POST['consulta'])) {
  $q = $conectar->real_escape_string($_POST['consulta']);
  $query = "SELECT muro, grito, texto FROM muros
  WHERE objeto LIKE '%".$q."%' OR marca LIKE '%".$q."%' OR modelo LIKE '%".$q."%' OR serie LIKE '%".$q."%'";
}//

//--MOSTRAR LA TABLA CON EL CONTENIDO DE LA DB--///
  $resultado = $conectar->query($query);

//SI EL RESULTADO ENCUENTRA DATOS SE ARMARA UNA CABECERA DE TABLA
if ($resultado->num_rows> 0){
while ($fila= $resultado->fetch_assoc()) {
  $salida.="<div class='block'>
  <div>
    <p>".$fila['muro']."</p>
    <p>".$fila['grito']."</p>
    <p>".$fila['texto']."</p>
  </div>
  </div>
  ";}
}

echo utf8_encode($salida);
$conectar->close();
?>
