function actividad(nombre,apellido,edad){
    cuadrado=edad*edad;
    return("Bienvenido " + nombre + " " + apellido +" \nTu edad es " + edad + " y su cuadrado es " + cuadrado)
}

console.log(actividad("Carlos","Fregoso",22));