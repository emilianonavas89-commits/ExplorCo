// DATOS DE LOS DESTINOS

const destinos = [
    {
        nombre: "Cartagena",
        categoria: ["Playa", "Cultura"],
        descripcion: "Ciudad histórica del Caribe colombiano, famosa por sus playas y su arquitectura colonial."
    },

    {
        nombre: "Medellín",
        categoria: ["Ciudad", "Montaña"],
        descripcion: "La ciudad de la eterna primavera, rodeada de montañas y llena de cultura."
    },

    {
        nombre: "San Andrés",
        categoria: ["Playa", "Naturaleza"],
        descripcion: "Una isla paradisíaca conocida por sus hermosas playas y su mar de siete colores."
    },

    {
        nombre: "Bogotá",
        categoria: ["Ciudad", "Cultura"],
        descripcion: "La capital de Colombia, con museos, gastronomía, historia y muchos lugares para conocer."
    },

    {
        nombre: "Eje Cafetero",
        categoria: ["Montaña", "Naturaleza", "Cultura"],
        descripcion: "Una región llena de montañas, cafetales y hermosos paisajes."
    },

    {
        nombre: "Parque Tayrona",
        categoria: ["Playa", "Naturaleza"],
        descripcion: "Un espectacular parque natural donde la selva se encuentra con el mar Caribe."
    }
];


// DESTINO ALEATORIO

const randomButton = document.getElementById("random-button");
const randomResult = document.getElementById("random-result");

randomButton.addEventListener("click", function () {

    const numero = Math.floor(Math.random() * destinos.length);

    const destino = destinos[numero];

    randomResult.innerHTML = `
        <div class="random-card">
            <h3>🎉 ${destino.nombre}</h3>
            <p>${destino.descripcion}</p>
        </div>
    `;
});


// FILTRAR POR CATEGORÍA

function filtrarCategoria(categoria) {

    const resultado = document.getElementById("resultado-categoria");

    const encontrados = destinos.filter(function(destino) {
        return destino.categoria.includes(categoria);
    });

    if (encontrados.length === 0) {

        resultado.innerHTML = `
            <p>No encontramos destinos para esta categoría.</p>
        `;

        return;
    }

    let texto = `<h3>Destinos de ${categoria}</h3>`;

    encontrados.forEach(function(destino) {

        texto += `
            <p>
                <strong>${destino.nombre}</strong> -
                ${destino.descripcion}
            </p>
        `;
    });

    resultado.innerHTML = texto;
}


// BOTÓN "VER MÁS"

function mostrarDestino(nombre) {

    const destino = destinos.find(function(item) {
        return item.nombre === nombre;
    });

    if (!destino) {
        return;
    }

    document.getElementById("modal-title").textContent =
        "🇨🇴 " + destino.nombre;

    document.getElementById("modal-description").textContent =
        destino.descripcion;

    document.getElementById("modal-info").innerHTML = `
        <p>
            <strong>🌎 Tipo de destino:</strong>
            ${destino.categoria.join(", ")}
        </p>

        <p>
            <strong>✈️ Recomendación:</strong>
            ¡Agrega este lugar a tu lista de destinos!
        </p>
    `;

    document.getElementById("modal").style.display = "flex";
}


// CERRAR VENTANA

function cerrarModal() {

    document.getElementById("modal").style.display = "none";

}


// CERRAR AL HACER CLIC FUERA DE LA VENTANA

window.addEventListener("click", function(event) {

    const modal = document.getElementById("modal");

    if (event.target === modal) {
        cerrarModal();
    }

});

// FORMULARIO DE CONTACTO

const formulario = document.getElementById("contact-form");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || correo === "" || mensaje === "") {

        alert("Por favor, completa todos los campos.");

        return;
    }

    alert(
        "¡Gracias, " +
        nombre +
        "! Tu mensaje fue enviado correctamente."
    );

    formulario.reset();
});


// AÑO AUTOMÁTICO DEL FOOTER

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();