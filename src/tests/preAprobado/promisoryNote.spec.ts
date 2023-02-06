import { test } from '@playwright/test'
import baseTest from "../hooks/baseTest";
import dataset from "../../utils/dataset";
import FormData from "../hooks/formData";

test.describe('Firma de pagarpé', async () => {
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
    })

    test('Paso 4 de 4, firmar @smock', async () => {
      await base.promisoryNote(formData)
    })
  }
})