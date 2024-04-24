function validarLogin(){

    const v_email = document.getElementById('emailInput').value;
    const v_contrasena = document.getElementById('contrasenaInput').value;

    if (v_email.trim() === '' || v_email.indexOf('@') === -1 || v_email.indexOf('.') === -1 || v_email.length < 4 || v_email.length > 30){

        alert('El correo electronico ingresado es invalido')
    }
    else if(v_contrasena.trim() === ''){

        alert('La contraseña ingresada es invalida')
    }
    else {
        alert("Formulario enviado");
    }
    return false;
}