let ataqueJugador
let ataqueEnemigo

let vidasJugador= 3;
let vidasEnemigo = 3;

let imagen_capipepo = "<img class='imagen_mascota_javascript' src='capipepo.png'>"
let imagen_ratigueya = "<img class='imagen_mascota_javascript' src='ratigueya.png'>"
let imagen_hipodogue = "<img class='imagen_mascota_javascript' src='hipodogue.png'>"


let mensajeBatallaFinal = document.getElementById('mensajeBatallaFinal')


function iniciarJuego(){
    let seccionReiniciar = document.getElementById('reiniciar');
    seccionReiniciar.style.display = 'none';

    let seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    seccionSeleccionarAtaque.style.display = 'none';

    let botonMascotaJugador = document.getElementById('boton_mascota');
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador);
    
    let botonFuego = document.getElementById('boton_fuego');
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton_agua');
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('boton_tierra');
    botonTierra.addEventListener('click',ataqueTierra)

    let botonReiniciar =document.getElementById('boton_reiniciar')
    botonReiniciar.addEventListener('click',reiniciarJuego)
    
}

function ataqueFuego(){
    ataqueJugador = 'fuego 🔥';
    ataqueAleatorioEnemigo();
}
function ataqueAgua(){
    ataqueJugador = 'agua 💦';
    ataqueAleatorioEnemigo();
}
function ataqueTierra(){
    ataqueJugador = 'tierra 🌱';
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(3,1);

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'fuego 🔥';
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'agua 💦';
    }else{
        ataqueEnemigo= 'tierra 🌱';
    }

    combate();

}

function combate(){
    let spanVidasJugador = document.getElementById('vidas_jugador');
    let spanVidasEnemigo = document.getElementById('vidas_enemigo');

    if(ataqueEnemigo == ataqueJugador){
        // empate
        crearMensaje(' empate 🙌' )
        
    }else if(ataqueJugador == 'agua 💦' && ataqueEnemigo == 'fuego 🔥'  || ataqueJugador == 'fuego 🔥' && ataqueEnemigo == 'tierra 🌱' || ataqueJugador == 'tierra 🌱' && ataqueEnemigo == 'agua 💦'){
        // ganaste
        crearMensaje(' ganaste ❤️👌')

        vidasEnemigo--;
        if(vidasEnemigo == 1){
            spanVidasEnemigo.innerHTML = " ❤️";
        }else if(vidasEnemigo == 2){
            spanVidasEnemigo.innerHTML = " ❤️❤️";
        }else{
            spanVidasEnemigo.innerHTML = " 💔";
        }
    }else{
    //  perdiste
    crearMensaje(' perdiste 😵‍💫🥴')
    vidasJugador--;
    if(vidasJugador == 1){
        spanVidasJugador.innerHTML = " ❤️";
    }else if(vidasJugador == 2){
        spanVidasJugador.innerHTML = " ❤️❤️";
    }else{
        spanVidasJugador.innerHTML = " 💔";
    }
    
    }
    revisarVidas()
}

function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("felicitaciones!! ganaste :)")
    }else if (vidasJugador == 0){
        crearMensajeFinal ("lo siento perdiste :(")
    }
}
function crearMensajeFinal(resultadoFinal){
    // let parrafo = document.createElement('p');
    
    mensajeBatallaFinal.style.color = '#ffffff';
    // parrafo.innerHTML= resultadoFinal;
    mensajeBatallaFinal.innerHTML= resultadoFinal;
    let seccionReiniciar = document.getElementById('reiniciar');
    seccionReiniciar.style.display = 'block';
    
    let seccionMensajes = document.getElementById('mensaje_final');
    seccionMensajes.appendChild(mensajeBatallaFinal);


    let botonFuego = document.getElementById('boton_fuego');
    botonFuego.disabled = true;
    let botonAgua = document.getElementById('boton_agua');
    botonAgua.disabled = true;
    let botonTierra = document.getElementById('boton_tierra');
    botonTierra.disabled = true;

}
function crearMensaje(resultado){
    let seccionMensajes = document.getElementById('mensajes');

    mensajeBatallaFinal.innerHTML= resultado
    mensajeBatallaFinal.style.color=' #ffffff'
    mensajeBatallaFinal.style.textShadow=' 0 0 10px rgb(0, 0, 0),0 0 10px rgb(0, 0, 0),0 0 10px rgb(0, 0, 0),0 0 10px rgb(0, 0, 0)'

    let parrafo = document.createElement('p');
    parrafo.innerHTML= ataqueJugador;
    parrafo.style.color=' #ffffff'
    seccionMensajes.appendChild(parrafo);

    let mensajeEnemigo = document.getElementById('mensajes_enemigo');
    
    let parrafo_enemigo = document.createElement('p');
    parrafo_enemigo.innerHTML= ataqueEnemigo;
    parrafo_enemigo.style.color=' #ffffff'

    mensajeEnemigo.appendChild(parrafo_enemigo);

    
}

function seleccionarMascotaJugador(){
    let seccionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    seccionSeleccionarMascota.style.display = 'none';
    let seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    seccionSeleccionarAtaque.style.display = 'block';

    const inputHipodoge = document.getElementById('hipodoge');
    const inputCapipepo = document.getElementById('capipepo');
    const inputRatigueya = document.getElementById('ratigueya');

    let spanMascotaJugador = document.getElementById('imagen_jugador');
    let MascotaJugador = document.getElementById('mascota_jugador');

    if(inputHipodoge.checked ){
        spanMascotaJugador.innerHTML = imagen_hipodogue;
        MascotaJugador.innerHTML = 'hipodogue'
    }else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = imagen_capipepo;
        MascotaJugador.innerHTML = 'capipepo'
    }else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = imagen_ratigueya;
        MascotaJugador.innerHTML = 'ratigueya'
    }else{
        alert("seleciona una mascota para empezar ")
        location.reload()
    }

    seleccionarMascotaEnemigo();
}
function reiniciarJuego(){
    location.reload()
}

function aleatorio(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min );
    }

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(3,1);
    let spanMascotaEnemigo = document.getElementById('imagen_enemigo');
    let MascotaEnemigo = document.getElementById('mascota_enemigo')

    if(mascotaAleatorio == 1){
        // hipodogue
        spanMascotaEnemigo.innerHTML = imagen_hipodogue;
        MascotaEnemigo.innerHTML = 'hipodogue'
    }else if(mascotaAleatorio == 2){
        // capipepo
        spanMascotaEnemigo.innerHTML = imagen_capipepo;
        MascotaEnemigo.innerHTML = 'capipepo'
    }else{
        // ratigueya
        spanMascotaEnemigo.innerHTML = imagen_ratigueya;
        MascotaEnemigo.innerHTML = 'ratigueya'
    }

}

window.addEventListener('load',iniciarJuego);

