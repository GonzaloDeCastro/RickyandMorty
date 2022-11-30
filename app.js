const characterId = (id) => {
  const loadOneCharacter = async () => {
    try {
      const resp = await fetch(`https://rickandmortyapi.com/api/character`);
      if (resp.status === 200) {
        const data = await resp.json();

        let characterSelected = "";

        const character = data.results.find((character) => character.id === id);
        characterSelected += `
        <div class="containerCardId" >
        <div class="charForm">
          <div class="character">
          <h2>${character.name}</h2>
          <img class="poster" src="https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg">
          <h4>Sexo: ${character.gender}</h4>
          <h4>Estado: ${character.status}</h4>
          <h4>Especie: ${character.species}</h4>
          <h4>Localidad: ${character.location.name}</h4>
          </div>
          <section>
          <div id="afrus-container-form" data-form="63eb5735-0d30-4503-8f5e-63f7c16b036e">
          <form id="formulario">
              <label for="nombre">Nombre:</label>
              <input id="nombre" type="text" placeholder="Nombre completo">
              <label for="email">Email:</label>
              <input  id="email"  type="email" placeholder="ejemplo@email.com">
              <label for="mensaje">Mensaje:</label>
              <textarea id="mensaje" placeholder="Dejanos tu mensaje"></textarea>
              </br>
              <input id="submit"  class="buttonCard" type="submit" value="Enviar">
          </form>
          </div>
          <script src="https://my.afrus.app/template/index.js"></script>
      </section>
      </div>
          </div>
          `;
        document.getElementById("container").innerHTML = characterSelected;
      } else if (resp.status === 401) {
        console.log("Error URL API");
      } else if (resp.status === 404) {
        console.log("Movie not found");
      } else {
        console.log("Error 500");
      }
    } catch (error) {
      console.log(error);
    }
  };

  loadOneCharacter();

  let formulario = document.getElementById("formulario");
  let nombre = document.getElementById("nombre");
  let email = document.getElementById("email");
  let comentario = document.getElementById("mensaje");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let validateEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (nombre.value.length < 6) {
      alert("El campo está vacío o el nombre es demasiado corto");
    } else {
      if (!validateEmail.test(email.value)) {
        alert("email inválido");
      } else {
        if (comentario.value.length < 6) {
          alert("El campo está vacío o el comentario es demasiado breve");
        } else {
          formulario.reset();
          window.open("mailto:gonzalodecastro1@gmail.com");
        }
      }
    }
  });
};
const loadCharacters = async () => {
  try {
    const resp = await fetch(`https://rickandmortyapi.com/api/character`);
    if (resp.status === 200) {
      const data = await resp.json();
      let characters = "";

      data.results.map((character) => {
        characters += `
        <div class="containerCard" >
          <div class="character">
            <img class="poster" src="https://rickandmortyapi.com/api/character/avatar/${
              character.id
            }.jpeg">
            <h2>${character.name.substr(0, 17)}</h2>
            </br>
            <p>Last location</p> 
            <h5> ${character.location.name}</h5>
            </br>
            <button class="buttonCard" id=${
              character.id
            } onclick="characterId(${character.id})" >Ver detalle</button>
          </div>
          </div>
        `;
      });

      document.getElementById("container").innerHTML = characters;
    } else if (resp.status === 401) {
      console.log("Error URL API");
    } else if (resp.status === 404) {
      console.log("Movie not found");
    } else {
      console.log("Error 500");
    }
  } catch (error) {
    console.log(error);
  }
};

loadCharacters();
