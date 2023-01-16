import {test} from "@playwright/test"
import baseTest from "./baseTest"
import dataset from "../../utils/dataset";
test.describe.parallel.only('Login', async () => {
  let base

  test.beforeEach(async({page}) => {
    base = new baseTest(page)
    await base.visitPage()

  })
  for (const data of dataset){
    test(`cliente ${data.documentNumberPP} con canales digitales`, async () => {
      const loginData = {
        number: data.documentNumberPP,
        textPassword: data.textPassword,
        password: data.password, textIV:
        data.textIV
      }
      await base.login(loginData)
    })

    test(`cliente ${data.documentNumberIV} sin canales digitales`, async () => {
      const loginData = {
        number: data.documentNumberIV,
        textPassword: data.textPassword,
        textIV: data.textIV
      }
      await base.login(loginData)
    })
  }
})