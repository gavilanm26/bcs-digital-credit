import { test } from '@playwright/test'
import baseTest from "../hooks/baseTest";
import dataset from "../../utils/dataset";
import FormData from "../hooks/formData";

test.describe('Seguro de vida, paso 2 de 4', async () => {
  let base, formData

  for (const data of dataset) {
    formData = new FormData(data)

    test.beforeEach(async ({ page }) => {
      base = new baseTest(page)
      await base.visitPage()
      await base.login(formData)
      await base.offers(formData)
      await base.accounts(formData)
    })

    test('Registrar 1 beneficiario', async () => {
      await base.beneficiarios(formData)
    })

    test('Registrar 2 beneficiario', async () => {
      formData.selectBeneficiaries = data.benefi.two
      await base.beneficiarios(formData)
    })

    test('Registrar 3 beneficiario @regresionPreAprobado', async () => {
      formData.selectBeneficiaries = data.benefi.three
      await base.beneficiarios(formData)
    })
  }
})