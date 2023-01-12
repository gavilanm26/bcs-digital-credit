import {test} from "@playwright/test";
import urlInteraction from "../../interactions/preAprobado/urlInteraction";
import landingInteraction from "../../interactions/preAprobado/landingInteraction";
import loginInteraction from "../../interactions/preAprobado/loginInteraction"
import offerInteraction from "../../interactions/preAprobado/offerInteraction";
const dataset = JSON.parse(JSON.stringify(require("../../models/preAprobado/data.json")))

test.describe('Personalización de la oferta', async () => {

  let url
  let landing
  let login
  let offer

  dataset.forEach(data => {
    test.beforeEach(async ({ page }) => {
      url = new urlInteraction(page)
      landing = new landingInteraction(page)
      login = new loginInteraction(page)
      offer = new offerInteraction(page)
      await url.visit()
      await landing.clickButton()
      await login.digitals(data.documentNumberPP)
      await login.screenPassword(data.textPassword, data.password)
    })
  })

  dataset.forEach(data => {
    test('paso 1 de 4', async () => {
      await offer.screenOffer(data.textOffer, data.stepOffer)
    })
  })

})