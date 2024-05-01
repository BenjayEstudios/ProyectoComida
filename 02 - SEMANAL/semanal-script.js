
const TipoDeDato = "semanal";

const app ={};
const miCallback = function(platos){
    // Aqui se crea los platos de Home
    platos.forEach(platos => {
        const card = createCardPlatos(platos);
        contenedor = document.getElementById("platos_semanales");
        contenedor.appendChild(card);
        
    });
    
    function createCardPlatos(_platos) {
        const {name_plato,img_plato,tipo,precio}=_platos;
        if(tipo.includes(TipoDeDato) === true){
            const divCol=document.createElement('div');
            divCol.classList.add('col-12', 'col-sm-12',
            'col-md-6','col-lg-3','mb-5');
        
            const divCard=document.createElement('div');
            divCard.classList.add('card');
        
            const img=document.createElement('img');
            img.classList.add('card-img-top');
            img.setAttribute('src',img_plato);
        
            const divCardBody=document.createElement('div');
            divCardBody.classList.add('card-body');
        
            const h5 = document.createElement('p');
            h5.classList.add('card-title');
            h5.textContent=name_plato;
            
            const parrafo=document.createElement('h5');
            parrafo.classList.add('card-text');
            parrafo.textContent='$' + precio;
            
            const a=document.createElement('a');
            a.classList.add('btn', 'btn-light');
            a.setAttribute('href','#');
            a.textContent='Comprar';
                
            divCol.appendChild(divCard);
            divCard.appendChild(img);
            divCard.appendChild(divCardBody);
            divCardBody.appendChild(h5);
            divCardBody.appendChild(parrafo);
            divCardBody.appendChild(a);
                
            return divCol;
        }
    
    
    };
}

function navbar(e){
    const menu = document.getElementById("navbar_menu");
    menu.innerHTML = '';

};

navbar(2);