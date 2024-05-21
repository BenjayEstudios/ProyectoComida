// Validación de campos vacíos}

function validarDatos(){
    
    var nombre = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


    if (nombre == "") {
        alert('El campo "Nombre completo" no puede estar vacío.');
        return;
    }
    
    if (email == '') {
        alert('El campo "Email" no puede estar vacío.');
        return;
    }
    
    if (password == '') {
        alert('El campo "Contraseña" no puede estar vacío.');
        return;
    }
    
    else{
        console.log("hola")
        window.location.href = "gracias.html";
    }


}
