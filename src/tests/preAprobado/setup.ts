import urlInteraction from "../../interactions/preAprobado/urlInteraction";
import landingInteraction from "../../interactions/preAprobado/landingInteraction";
import loginInteraction from "../../interactions/preAprobado/loginInteraction";
import offerInteraction from "../../interactions/preAprobado/offerInteraction";

//crear las instancias de las clases de interacción necesarias
// //para las pruebas y devolver un objeto con ellas
export function setup(page) {
  let url = new urlInteraction(page);
  let landing = new landingInteraction(page);
  let login = new loginInteraction(page);
  let offer = new offerInteraction(page);

  return { url, landing, login, offer }
}