//sql
document.addEventListener("DOMContentLoaded", () => {

    const boton = document.querySelector(".btn-probar");
    const resultado = document.querySelector(".result-box");

    boton.addEventListener("click", () => {

        resultado.innerHTML = `
            <div class="tabla-visual">
                <div class="tabla-titulo">usuario</div>

                <div class="campo pk">
                    id_usuario <span>PK</span>
                </div>

                <div class="campo">
                    nombre
                </div>

                <div class="campo">
                    correo
                </div>
            </div>

            <div class="tabla-visual">
                <div class="tabla-titulo">pregunta</div>

                <div class="campo pk">
                    id_pregunta <span>PK</span>
                </div>

                <div class="campo">
                    titulo
                </div>

                <div class="campo">
                    descripcion
                </div>
            </div>
        `;

    });

});


//nosql

// =====================================
// PRUEBA NoSQL - DOCUMENTOS JSON (SIMPLE)
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    const boton = document.querySelector(".btn-probar");
    const resultado = document.querySelector(".result-box");

    if (!boton || !resultado) return;

    boton.addEventListener("click", () => {

        resultado.innerHTML = `
            <div class="tabla-visual">
                <div class="tabla-titulo">usuarios</div>

                <div class="campo">
                    {
                        "id": 1,
                        "nombre": "Ana",
                        "correo": "ana@email.com"
                    }
                </div>
            </div>

            <div class="tabla-visual">
                <div class="tabla-titulo">preguntas</div>

                <div class="campo">
                    {
                        "id": 101,
                        "titulo": "¿Qué es NoSQL?",
                        "descripcion": "Base de datos flexible sin esquema fijo"
                    }
                </div>
            </div>

            <div class="tabla-visual">
                <div class="tabla-titulo">respuestas</div>

                <div class="campo">
                    {
                        "id": 9001,
                        "pregunta_id": 101,
                        "respuesta": "NoSQL significa Not Only SQL"
                    }
                </div>
            </div>
        `;
    });

});

//slider

let index = 0;

function update() {
    const track = document.getElementById("track");
    const cards = document.querySelectorAll(".card");

    track.style.transform = `translateX(-${index * 340}px)`;

    cards.forEach((c, i) => {
        c.classList.remove("active");
        if (i === index) c.classList.add("active");
    });
}

function move(dir) {
    const cards = document.querySelectorAll(".card");

    index += dir;

    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;

    update();
}

update();