function iniciosesion(){
    
    const boton = document.getElementById('modalwea');
    const boton2 = document.getElementById('redirhome');
    const usuario = document.getElementById('exampleInputEmail1').value;
    const contra = document.getElementById('exampleInputPassword1').value;

    // console.log(usuario);
    // console.log(contra);

    if(usuario == 'admin' && contra== 'admin'){
        window.location.href = '../inicio/home.html'; // Reemplaza esta URL con la URL deseada
    }else{
        boton.click();
    }
    
}