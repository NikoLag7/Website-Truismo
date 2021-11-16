let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll",function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        this.document.getElementsByTagName("nav")[0].style.top = "0px"
    } else{
        this.document.getElementsByTagName("nav")["0"].style.top ="-100px"
    }
    ubicacionPrincipal=desplazamientoActual;
})