import { test } from '@playwright/test'
import baseTest from "../hooks/baseTest"
import dataset from "../../utils/dataset"
import FormData from "../hooks/formData"
import interceptResponses from "../../utils/API/interceptor"

test.describe.only('Paso 4 de 4', async () => {
  let base, formData, responses = []

  for (const data of dataset) {
    formData = new FormData(data)

    test.beforeEach(async ({ page }) => {
      base = new baseTest(page)
      console.log("Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
      await base.visitPage()
      await interceptResponses(page)
      await base.login(formData)
      await base.offers(formData)
      await base.accounts(formData)
      await base.beneficiarios(formData)
      await base.resumen(formData)
      await base.promisoryNote(formData)
    })

    test.only('Ingresar OTC exitoso @regresionPA', async () => {
      await base.OTC(formData)
    })
    test('Ingresar OTC fallido @regresionPA', async () => {
      await base.OTC(formData)
    })
    test('Ingresar OTC 3 veces fallidos @regresionPA', async () => {
      await base.OTC(formData)
    })
    test.afterEach(async () => {
      console.log(responses)
      responses = []
    })
  }
})