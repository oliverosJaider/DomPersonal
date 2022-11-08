//controlando etiquetas con el Dom
//1.almacenar en memnroia (crear una variable)
//la etiqueta que quierocontrolar

let etiquetaImagen=document.getElementById("fotografia")

//2. controlando nuestras etiquetas
//2.1 controlar es cambiar la fuente (src) de una etiqueta

etiquetaImagen.src="./img/unnamed.png"
//2.2
let etiquetaTitulo=document.getElementById("titulo") 
etiquetaTitulo.textContent="HISTORIA"

//2.3 controlar es agregar estilos
etiquetaTitulo.classList.add('fuente','aliniado')

//2.4 controlar es remover estilos
let etiquetaParrafo=document.getElementById("parrafo")
etiquetaParrafo.classList.remove('text-danger')

//2.5 controlar es detectar eventos

let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",function(evento){
    alert("estamos haciendo clic")
})