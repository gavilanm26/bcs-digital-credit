import {test} from "@playwright/test";
import urlInteraction from "../../interactions/preAprobado/urlInteraction";
import landingInteraction from "../../interactions/preAprobado/landingInteraction";
import loginInteraction from "../../interactions/preAprobado/loginInteraction"
import offerInteraction from "../../interactions/preAprobado/offerInteraction";
import { setup } from "./setup";
const dataset = JSON.parse(JSON.stringify(require("../../models/preAprobado/data.json")))

test.describe('Personalización de la oferta', async () => {

  let url
  let landing
  let login
  let offer

  dataset.forEach(data => {
    test.beforeEach(async ({ page }) => {
      await setup(page)
    })
  })

  dataset.forEach(data => {
    test('paso 1 de 4', async () => {
      await offer.screenOffer(data.textOffer, data.stepOffer)
    })
  })

})