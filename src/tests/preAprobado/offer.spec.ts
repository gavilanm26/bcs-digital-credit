import {test} from "@playwright/test";
import HomePage from "../../UI/preAprobado/url";
import LandingPage from "../../UI/preAprobado/landingUI";
import loginPage from "../../UI/preAprobado/loginUI";
import offerPage from "../../UI/preAprobado/offerUI";
const dataset = JSON.parse(JSON.stringify(require("../../models/preAprobado/data.json")))

test.describe('Validaciones de la oferta', async () => {

  let url
  let landing
  let login
  let offer

  dataset.forEach(data => {
    test.beforeEach(async ({ page }) => {
      url = new HomePage(page)
      landing = new LandingPage(page)
      login = new loginPage(page)
      offer = new offerPage(page)
      await url.visit()
      await landing.clickButton()
      await login.digitals(data.documentNumberPP)
      await login.screenPassword(data.textPassword, data.password)
    })
  })

  dataset.forEach(data => {
    test.only('validar estar en el paso 1', async () => {
      await offer.screenOffer(data.textOffer, data.stepOffer)
    })
  })

})