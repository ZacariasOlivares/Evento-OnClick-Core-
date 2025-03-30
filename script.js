

// Cuando sé de clic en el botón “Iniciar sesión” este debe cambiar a “Cerrar sesión”.
document.getElementById("btn-sesion").addEventListener("click", function(){
    this.innerText = "Cerrar sesion"
});

// Cuando se da clic en “Agregar definición” el botón debe desaparecer.
document.getElementById("btn-agregar").addEventListener("click", function(){
    this.remove();
})

// Cuando se da clic en “Me gusta” para una de las definiciones se dispara una alarma indicando que te gusto la definición junto con el título de la misma.

let c = 0;
let c1 = 0;

document.getElementById("like 1").addEventListener("click", function(){
    let titulo = document.getElementById("1").innerHTML

    window.alert("Has dado me gusta a " + titulo)

    // Cada vez que se le da clic al botón de like de cada definición, este debe aumentar el conteo de likes de cada definición.

    c += 1;
    this.innerText = c + " me gusta"
});

document.getElementById("like 2").addEventListener("click", function(){
    let titulo = document.getElementById("2").innerHTML

    window.alert("Has dado me gusta a " + titulo)

    c1 += 1;
    this.innerText = c1 + " me gusta"
})

