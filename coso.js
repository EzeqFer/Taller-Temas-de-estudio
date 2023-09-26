document.addEventListener("DOMContentLoaded", function () {
    let inputTemas = document.getElementById("inputTemas");
    let agregarBoton = document.getElementById("agregarBoton");
    let listaTemas = document.getElementById("listaTemas");

    agregarBoton.addEventListener("click", function () {
        const temaText = inputTemas.value.trim();
        if (temaText !== "") {
            let listItem = document.createElement("li");

            let imageUrl = getRandomImageUrl();
            let imagen = document.createElement("img");
            imagen.src = imageUrl;
            imagen.alt = temaText;

            let completarBoton = document.createElement("button");
            completarBoton.textContent = "Completar";
            completarBoton.addEventListener("click", function () {
                listItem.classList.toggle("completado");
            });

    
       const eliminarBoton = document.createElement("button");
            eliminarBoton.textContent = "Eliminar";
            eliminarBoton.addEventListener("click", function () {
                listItem.remove();
            });

            listItem.appendChild(imagen);
            listItem.appendChild(document.createTextNode(temaText));
            listItem.appendChild(completarBoton);
            listItem.appendChild(eliminarBoton);

            listaTemas.appendChild(listItem);

            inputTemas.value = "";
        }
    });

    
    function getRandomImageUrl() {
        const randomId = Math.floor(Math.random() * 1000); 
        return `https://picsum.photos/200/200?random=${randomId}`;
    }
});
