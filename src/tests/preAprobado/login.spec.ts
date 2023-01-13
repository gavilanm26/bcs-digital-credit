import {test} from "@playwright/test"
import baseTest from "./baseTest"
const dataset = JSON.parse(JSON.stringify(require("../../models/preAprobado/data.json")))
test.describe('Login', async () => {
  let login
  let loginTest

  test.beforeEach(async({page}) => {
    loginTest = new baseTest(page)
    await loginTest.visitPage()
    await loginTest.clickCredito()

  })
  dataset.forEach(data => {
    test.only(`cliente ${data.documentNumberPP} con canales digitales`, async () => {
      await loginTest.loginForm().digitals(data.documentNumberPP)
      await loginTest.loginForm().screenPassword(data.textPassword, data.password)
    })
  })

  dataset.forEach(data => {
    test(`cliente ${data.documentNumberIV} sin canales digitales`, async () => {
      await login.digitals(data.documentNumberIV)
      await login.identityValidation(data.textIV)
    })
  })
})