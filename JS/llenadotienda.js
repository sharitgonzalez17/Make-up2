export function pintarTienda(){

    let productosSA=[

        {foto:"img/foto7.jpg",nombre:"Base",precio:30000,descripcion:"Base Matte"},
        {foto:"img/foto8.jpg",nombre:"Polvo",precio:20000,descripcion:"Polvo Compacto Trendy"},
        {foto:"img/foto9.jpg",nombre:"Sombras",precio:32500,descripcion:"SOMBRA COSMOPOLITAN TRENDY"},
        {foto:"img/foto10.jpg",nombre:"Delineadores",precio:12500,descripcion:"Delineador en plumon"},
        {foto:"img/foto11.jpg",nombre:"Pestañinas",precio:8400,descripcion:"Pestañina cat trendy"},
        {foto:"img/foto12.jpg",nombre:"Brochas",precio:15700,descripcion:"Kit de brochas trendy"},
        {foto:"img/foto13.jpg",nombre:"Labiales",precio:5200,descripcion:"Labial Trendy Matte"},
        {foto:"img/foto14.jpg",nombre:"Rubores",precio:3400,descripcion:"Rubor Trendy Eclipce"},
        {foto:"img/foto15.jpg",nombre:"Cejas",precio:8600,descripcion:"Kit de cejas Trendy"},
        {foto:"img/foto16.jpg",nombre:"Contorno",precio:6500,descripcion:"Contorno Trendy"},
        {foto:"img/foto17.jpg",nombre:"Esponja",precio:6200,descripcion:"Esponja Blender"},
        {foto:"img/foto18.jpg",nombre:"Exfoliante",precio:16200,descripcion:"Exfoliante de labios trendy"},
        {foto:"img/foto19.jpg",nombre:"Primer",precio:13200,descripcion:"Primer trendy"},
        {foto:"img/foto20.jpg",nombre:"pestañas",precio:11200,descripcion:"Estuche de pestañas"},
        {foto:"img/foto21.jpg",nombre:"Iluminador",precio:1500,descripcion:"Iluminador Dona Trendy"}


  ]

    //crear la referencia al componente padres
    //crear una variable para almacenar la base
    //sobre la cual voy a pintar
    let fila=document.getElementById("fila")

    //recorriendo un arreglo con JS
    //buscar/seleccionar/esculcar
    productosSA.forEach(function(producto){
        
        
        //receta para pintar con JS

        //1.comience a crear la estructura que necesita

        //creo la columna
        let columna=document.createElement("div")
        columna.classList.add("col")

        //creo la tarjeta
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        //creo la imagen
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.src=producto.foto

        //h4 con la clase text-center
        let titulo=document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre

        //pre
        let precio=document.createElement("h4")
        precio.classList.add("text-center")
        precio.textContent=producto.precio

        //des
        let descripcion=document.createElement("h3")
        descripcion.classList.add("text-center")
        descripcion.textContent=producto.descripcion
        descripcion.hidden=true

        //creando un boton 
    let boton=document.createElement("button")
    boton.setAttribute("type","button")
    boton.classList.add("btn","btn-warning","mx-4","mb-4")
    boton.textContent="Ver producto"

        //2.ordenar la estructura 
        //padres e hijos

        tarjeta.appendChild(foto)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(boton)
      columna.appendChild(tarjeta)
        fila.appendChild(columna)  
        
    })
}