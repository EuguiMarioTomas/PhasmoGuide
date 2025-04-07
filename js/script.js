//Actualmente no esta incluido en el sitio web debido a que no es necesario y solo era una prubea para ver si funcionaba

document.getElementById("tipsForm").addEventListener("submit", function(event) {
    event.preventDefault(); //Evita que la página se recargue

    //Obtener valores de los inputs
    let username = document.getElementById("usernameInput").value.trim();
    let tip = document.getElementById("tipInput").value.trim();

    if (username === "" || tip === "") {
        alert("Por favor, completa ambos campos.");
        return;
    }

    //Crear una nueva fila para la tabla
    let tableBody = document.querySelector("#tipsTable tbody");
    let newRow = tableBody.insertRow();

    //Insertar celdas con los datos
    let cellUser = newRow.insertCell(0);
    let cellTip = newRow.insertCell(1);

    cellUser.textContent = username;
    cellTip.textContent = tip;

    //Limpiar los campos del formulario
    document.getElementById("tipsForm").reset();
});
