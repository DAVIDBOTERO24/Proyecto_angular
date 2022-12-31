<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Conexión base de datos
$servidor = "localhost"; 
$usuario = "root"; 
$contrasenia = ""; 
$nombreBaseDatos = "angularpf";

$conexionBD = new mysqli( $servidor , $usuario , $contrasenia , $nombreBaseDatos );

// if ($conexionBD->connect_errno) {
//     echo "Fallo al conectar a MySQL: (" . $conexionBD->connect_errno . ") " . $conexionBD->connect_error;
// }
// echo $conexionBD->host_info."\n";


// Consultar un estudiante por medio de su id
if ( isset ( $_GET [ "consultar" ])){
    $consulta = mysqli_query ( $conexionBD , "SELECT * FROM estudiantes WHERE idEstudiante=" . $_GET [ "consultar" ]);
    if ( mysqli_num_rows ( $consulta ) > 0 ){
        $estudiante= mysqli_fetch_all ( $consulta , MYSQLI_ASSOC );
        echo  json_encode ( $estudiante );
        exit();
    }
    else { echo  json_encode ([ "success" => 0 ]); }
}

//Borrar pero se le debe enviar una clave (para borrar)
if ( isset ( $_GET [ "borrar" ])){
    $consulta = mysqli_query ( $conexionBD , "DELETE FROM estudiantes WHERE idEstudiante=" . $_GET [ "borrar" ]);
    if ( $consulta ){
        echo  json_encode ([ "success" => 1 ]);
        exit();
    }
    else {   echo  json_encode ([ "success" => 0 ]); }
}

//Insertar un nuevo registro en la tabla de estudiantes
if ( isset ( $_GET [ "insertar" ])){
    $datos = json_decode ( file_get_contents ( "php://input" ));

    $nombre = $datos -> nombre;
    $apellidos  = $datos -> apellidos ; 
    $sexo = $datos -> sexo ; 
    $tipoDocumento = $datos -> tipoDocumento ; 
    $edad = $datos -> edad ; 
    $numeroDocumento = $datos -> numeroDocumento ; 
    $direccion = $datos -> direccion ; 
    $telefono = $datos -> telefono ; 
    $correo = $datos -> correo ; 
    $carrera = $datos -> carrera ; 
    $jornada = $datos -> jornada ; 

    if (( $nombre != "" )&&( $apellidos != "" )&&( $sexo != "" )&&( $tipoDocumento != "" )&&( $edad != "" )&&( $numeroDocumento != "" )&&
        ( $direccion != "" )&&( $telefono != "" )&&( $correo != "" )&&( $carrera != "" )&&( $jornada != "" )){
            
        $consulta = mysqli_query ( $conexionBD , "INSERT INTO estudiantes(nombre,apellidos,sexo,tipoDocumento,edad,numeroDocumento,direccion,telefono,
        correo,carrera,jornada) VALUES('".$nombre."','".$apellidos."','".$sexo."','".$tipoDocumento."','".$edad."','".$numeroDocumento."','".$direccion."','".$telefono."','".$correo."','".$carrera."','".$jornada."')");
        echo  json_encode ([ "success" => 1 ]);
    }
    exit();
}

// Actualiza los datos de un registro mediante una clave
if ( isset ( $_GET [ "actualizar" ])){
    $datos = json_decode ( file_get_contents ( "php://input" ));

    $idEstudiante = ( isset ( $datos -> id )) ? $datos -> id : $_GET [ "actualizar" ];
    $nombre = $datos -> nombre;
    $apellidos  =$datos -> apellidos; 
    $sexo = $datos -> sexo; 
    $tipoDocumento = $datos -> tipoDocumento; 
    $edad = $datos -> edad; 
    $numeroDocumento = $datos -> numeroDocumento; 
    $direccion = $datos -> direccion; 
    $telefono = $datos -> telefono; 
    $correo = $datos -> correo; 
    $carrera = $datos -> carrera; 
    $jornada = $datos -> jornada; 
    
    $consulta = mysqli_query ( $conexionBD , "UPDATE estudiantes SET nombre='$nombre',apellidos='$apellidos',sexo='$sexo',tipoDocumento='$tipoDocumento',
    edad='$edad',numeroDocumento='$numeroDocumento',direccion='$direccion',telefono='$telefono',correo='$correo',carrera='$carrera',jornada='$jornada' WHERE idEstudiante ='$idEstudiante'" );
    echo  json_encode ([ "success" => 1 ]);
    exit();
}


// Consultar un estudiante por medio de su documento de identidad
if ( isset ( $_GET [ "buscar" ])){
    $consulta = mysqli_query ( $conexionBD , "SELECT * FROM estudiantes WHERE numeroDocumento=" . $_GET [ "buscar" ]);
    if ( mysqli_num_rows ( $consulta ) > 0 ){
        $estudiante= mysqli_fetch_all ( $consulta , MYSQLI_ASSOC );
        echo  json_encode ( $estudiante );
        exit();
    }
    else {   echo  json_encode ([ "success" => 0 ]); exit();}
}

// Consultar un estudiante por medio de su correo electrónico y su documento de identidad
if ( isset ( $_GET [ "buscar2" ])){
    $datos = json_decode ( file_get_contents ( "php://input" ));
    $numeroDocumento = $datos -> numeroDocumento; 
    $correo = $datos -> correo; 

    $consulta = mysqli_query ( $conexionBD , "SELECT * FROM estudiantes WHERE numeroDocumento='$numeroDocumento' AND correo='$correo'");
    if ( mysqli_num_rows ( $consulta ) > 0 ){
        $estudiante = mysqli_fetch_all ( $consulta , MYSQLI_ASSOC ); 
        echo  json_encode ( $estudiante );
        exit();
    }
    else {   echo  json_encode ([ "success" => 0 ]); exit();}
}

// Consultar un administrador por medio de su correo electrónico y una clave
if ( isset ( $_GET [ "admin" ])){
    $datos = json_decode ( file_get_contents ( "php://input" ));
    $correo = $datos -> correo; 
    $clave = $datos -> clave; 

    $consulta = mysqli_query ( $conexionBD , "SELECT * FROM administradores WHERE correo='$correo' AND clave='$clave'");
    if ( mysqli_num_rows ( $consulta ) > 0 ){
        $administrador = mysqli_fetch_all ( $consulta , MYSQLI_ASSOC ); 
        echo  json_encode ( $administrador );
        exit();
    }
    else {   echo  json_encode ([ "success" => 0 ]); exit();}
}

// Consulta todos los registros de la tabla de estudiantes
$consulta = mysqli_query ( $conexionBD , "SELECT * FROM estudiantes" );
if ( mysqli_num_rows ( $consulta ) > 0 ){
    $estudiantes = mysqli_fetch_all ( $consulta , MYSQLI_ASSOC );
    echo  json_encode ( $estudiantes );
}
else { echo  json_encode ([[ "success" => 0 ]]); }

?>