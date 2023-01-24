import { test } from '@playwright/test'
import baseTest from "../hooks/baseTest"
import dataset from "../../utils/dataset"
import FormData from "../hooks/formData"

test.describe('Paso 4 de 4', async () => {
  let base, formData

  for (const data of dataset) {
    formData = new FormData(data)

    test.beforeEach(async ({ page }) => {
      base = new baseTest(page)
      await base.visitPage()
      await base.login(formData)
      await base.offers(formData)
      await base.accounts(formData)
      await base.beneficiarios(formData)
      await base.resumen(formData)
      await base.promisoryNote(formData)
    })

    test('Ingresar OTC exitoso @regresionPA', async () => {
      await base.OTC(formData)
    })
    test('Ingresar OTC fallido @regresionPA', async () => {
      await base.OTC(formData)
    })
    test('Ingresar OTC 3 veces fallidos @regresionPA', async () => {
      await base.OTC(formData)
    })
  }
})