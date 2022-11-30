const characterId = (id) => {
  const loadOneCharacter = async () => {
    try {
      const resp = await fetch(`https://rickandmortyapi.com/api/character`);
      if (resp.status === 200) {
        const data = await resp.json();

        let prueba = "";

        const character = data.results.find((character) => character.id === id);
        prueba += `
        <div class="containerCardId" >
        <div class="charForm">
          <div class="character">
          <h2 class="title">${character.name}</h2>
          <img class="poster" src="https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg">
          <h4 class="title">Sexo: ${character.gender}</h4>
          <h4 class="title">Estado: ${character.status}</h4>
          <h4 class="title">Especie: ${character.species}</h4>
          <h4 class="title">Localidad: ${character.location.name}</h4>
          </div>
          <section>
          <form id="form">
              <label for="nombre">Nombre:</label>
              <input id="nombre" type="text" placeholder="Nombre completo">
              <label for="email">Email:</label>
              <input  id="email"  type="email" placeholder="ejemplo@email.com">
              <label for="mensaje">Mensaje:</label>
              <textarea id="mensaje" placeholder="Dejanos tu mensaje"></textarea>
              </br>
              <input id="submit"  class="buttonCard" type="submit" value="Enviar">
          </form>
      </section>
      </div>
          </div>
          `;
        console.log(character);
        document.getElementById("container").innerHTML = prueba;
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
            <h2 class="title">${character.name.substr(0, 17)}</h2>
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
