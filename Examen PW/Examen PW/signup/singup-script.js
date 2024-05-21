document.addEventListener('DOMContentLoaded', () => {

    // const contenedor = document.getElementById('divPlatos')
    // obtenerPlatos(contenedor);
    // console.log('prueba');
});


function ValidadDatos(){

    var inputText = document.getElementById("inputPassword4").value;
    // var inputText = 'Hola mundo';
    var charCount = inputText.length;


    if (charCount < 8){
        alert("La contraseña debe ser mayor a 8 caracteres.");
    }
}
