let amigoSecreto=[];
let sorteo = 0;

function limpiarCaja(){
    document.getElementById("amigo").value = "";
}

function agregarAmigo(){
    //Verifico que el input no esté vacío
    if (document.getElementById("amigo").value == ""){
        alert("Por favor, ingresa un nombre.");
    } else {
        //Verifico que el nombre no esté repetido
        if (amigoSecreto.includes(document.getElementById("amigo").value)) {
            alert("El nombre ya está en la lista.");
        }
        //Si no está vacío ni repetido, agrego el nombre al array
        else{
        amigoSecreto.push(document.getElementById("amigo").value);
        limpiarCaja(); //Llamo a la función limpiarCaja para que limpie el input después de agregar un amigo
        console.log(amigoSecreto);
        mostrarAmigos(); //Llamo a la función mostrarAmigos para que muestre la lista actualizada
        }
    }
}  

function mostrarAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de mostrar los amigos
    for (let i = 0; i < amigoSecreto.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigoSecreto[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    // Verifico que haya al menos dos amigos en la lista para realizar el sorteo
    if (amigoSecreto.length < 2) {
        alert("Por favor, añade al menos dos amigos para realizar el sorteo.");
        return;
    }
    else {
        sorteo = Math.floor(Math.random() * amigoSecreto.length);
        let sorteado = document.getElementById("resultado");
        sorteado.innerHTML = "";
        let li = document.createElement("li");
        li.textContent = amigoSecreto[sorteo];
        sorteado.appendChild(li);
        console.log("Amigo secreto sorteado: " + amigoSecreto[sorteo]);
    }
     
}