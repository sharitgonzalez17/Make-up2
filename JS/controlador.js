//Importando Modulos
import {pintarTienda} from "./llenadotienda.js"
pintarTienda()

import {ampliarInformacion} from "./ampliarInfo.js"
let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){

    let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
    ampliarInformacion(event)
    if(event.target.classList.contains("btn")){
        modalinfoproducto.show()
    }
})




