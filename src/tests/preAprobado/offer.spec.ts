import {test} from "@playwright/test";
import baseTest from "../hooks/baseTest";
import dataset from "../../utils/dataset";
import FormData from "../hooks/formData";

test.describe.parallel('Personalización de la oferta', async () => {

  let base, formData

  for (const data of dataset) {
    formData = new FormData(data);
  }

  test.beforeEach(async ({ page }) => {
    base = new baseTest(page)
    await base.visitPage()
    await base.login(formData)
  })

  test('paso 1 de 4, Oferta Activa', async () => {
    await base.offers(formData)
  })

})