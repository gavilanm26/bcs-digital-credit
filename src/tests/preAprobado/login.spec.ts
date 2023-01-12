import {test} from "@playwright/test";
import urlInteraction from "../../interactions/preAprobado/urlInteraction";
import landingInteraction from "../../interactions/preAprobado/landingInteraction";
import loginInteraction from "../../interactions/preAprobado/loginInteraction"
const dataset = JSON.parse(JSON.stringify(require("../../models/preAprobado/data.json")))
//const validation = JSON.parse(JSON.stringify(require("../../models/preAprobado/loginValidationsData.json")))

test.describe.parallel('Login', async () => {
  let url
  let landing
  let login

  test.beforeEach(async ({page}) => {
    url = new urlInteraction(page)
    landing = new landingInteraction(page)
    login = new loginInteraction(page)
    await url.visit()
    await landing.clickButton()
  })

  //for (const data of dataset) {
  dataset.forEach(data => {
    test(`cliente ${data.documentNumberPP} con canales digitales`,async () => {
      await login.digitals(data.documentNumberPP)
      await login.screenPassword(data.textPassword, data.password)
    })
  })

  dataset.forEach(data => {
    test(`cliente ${data.documentNumberIV} sin canales digitales`, async () => {
      await login.digitals(data.documentNumberIV)
      await login.identityValidation(data.textIV)
    })
  })

  /*validation.forEach(data => {
    test(`Validaciones login ${data.title}`, async ({page}) => {
      await login.validations(data.type, data.documentNumber, data.message)
    })
  })*/

})