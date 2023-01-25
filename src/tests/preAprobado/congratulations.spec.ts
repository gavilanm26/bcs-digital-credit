import { test } from '@playwright/test'
import baseTest from "../hooks/baseTest"
import dataset from "../../utils/dataset"
import FormData from "../hooks/formData"
import interceptResponses from "../../utils/API/interceptor";
test.describe.only('Felicitaciones', async () => {
  let base, formData, responses = []

  for (const data of dataset) {
    formData = new FormData(data)

    test.beforeEach(async ({ page }) => {
      base = new baseTest(page)
      await base.visitPage()
      await interceptResponses(page)
      await base.login(formData)
      await base.offers(formData)
      await base.accounts(formData)
      await base.beneficiarios(formData)
      await base.resumen(formData)
      await base.promisoryNote(formData)
      await base.OTC(formData)
    })

    test('Calificar con 1 estrella', async () => {
      formData.star = 1
      await base.qualify(formData)
    })
    test('Calificar con 2 estrellas', async () => {
      formData.star = 2
      await base.qualify(formData)
    })
    test('Calificar con 3 estrellas', async () => {
      formData.star = 3
      await base.qualify(formData)
    })
    test('Calificar con 4 estrellas', async () => {
      formData.star = 4
      await base.qualify(formData)
    })
    test.only('Calificar con 5 estrellas', async () => {
      formData.star = 5
      await base.qualify(formData)
    })
    test('Sin calificar', async () => {
      formData.star = 0
      await base.noQualify(formData)
    })
    test.afterEach(async () => {
      console.log(responses)
      responses = []
    })
  }
})