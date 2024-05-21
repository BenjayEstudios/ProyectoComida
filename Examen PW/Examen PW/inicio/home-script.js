document.addEventListener('DOMContentLoaded', () => {

    const contenedor = document.getElementById('divPlatos')
    obtenerPlatos(contenedor);

});


async function obtenerPlatos(a) {
        try {
            const url = "https://dwnuvpjkltqfzsdsfhcfz3hmkq0sxihp.lambda-url.us-east-1.on.aws";
            const api = await fetch(url);
            const apiJson = await api.json();
            const platos = apiJson.comidas;
            console.log(platos);

            const datosIMG="../../../datos.json";

            const urlImg=await fetch(datosIMG);
            const urlImgJson=await urlImg.json();
            const imgPlatos=urlImgJson
            
           


            
                for (let i = 0; i < platos.length; i++) {
                    console.log(imgPlatos.callback[i].img_plato)
                    const imagen=imgPlatos.callback[i].img_plato;
                    const nombre = platos[i].nombre;
                    const precio = platos[i].precio;
                    const descripcion = platos[i].descripcion;

                    console.log(nombre, precio, descripcion);


                    //creamos col
                    const divCol = document.createElement('div')
                    divCol.classList.add('col-12', 'col-sm-12', 'col-md-6', 'col-lg-4', 'mb-5');

                    const divCard = document.createElement('div');
                    divCard.classList.add('card');

                    const img=document.createElement('img');
                    img.classList.add('card-img-top');
                    img.setAttribute('src',imagen);

                    const divCardBody = document.createElement('div');
                    divCardBody.classList.add('card-body');
                    divCardBody.setAttribute('style','height: 220px;');

                    const h5 = document.createElement('p');
                    h5.classList.add('card-title');
                    h5.textContent = nombre;

                    const valor = document.createElement('h5');
                    valor.classList.add('card-text');
                    valor.textContent = '$' + precio;

                    const desc = document.createElement('h5');
                    desc.classList.add('card-text');
                    desc.textContent = descripcion;



                    const boton = document.createElement('a');
                    boton.classList.add('btn','button' ,'btn-light');
                    boton.setAttribute('href', '#');
                    boton.textContent = 'Comprar';



                    a.appendChild(divCol);
                    divCol.appendChild(divCard);
                    divCard.appendChild(img);
                    divCard.appendChild(divCardBody);
                    divCardBody.appendChild(h5);
                    divCardBody.appendChild(valor);
                    divCardBody.appendChild(desc);
                    divCardBody.appendChild(boton);



                }



            } catch (error) {
                console.log('error: ', error);

            }


        }