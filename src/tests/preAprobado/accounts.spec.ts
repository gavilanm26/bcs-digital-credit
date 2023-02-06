import { test } from '@playwright/test'
import baseTest from "../hooks/baseTest";
import dataset from "../../utils/dataset";
import FormData from "../hooks/formData";

test.describe('Seleccionar cuenta', async () => {
  let base, formData

  for (const data of dataset) {
    formData = new FormData(data)

    test.beforeEach(async ({ page }) => {
      base = new baseTest(page)
      await base.visitPage()
      await base.login(formData)
      await base.offers(formData)
    })

    test('Paso 2 de 4, si autorizo debito automatico @smock', async () => {
      await base.accounts(formData)
    })
    test('Paso 2 de 4, no autorizo debito automatico', async () => {
      formData.authorize = data.checkNo
      await base.accounts(formData)
    })
  }
})