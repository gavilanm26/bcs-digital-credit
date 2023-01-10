import {test } from "@playwright/test";
import HomePage from "../../UI/preAprobado/url";
import LandingPage from "../../UI/preAprobado/landingUI";
import loginPage from "../../UI/preAprobado/loginUI"
const dataset = JSON.parse(JSON.stringify(require("../../models/preAprobado/loginData.json")))
const validation = JSON.parse(JSON.stringify(require("../../models/preAprobado/loginValidationsData.json")))

test.describe.only('Validación de canales digitales', async () => {
  let url
  let landingUI
  let login

  test.beforeEach(async ({page, context}) => {
    url = new HomePage(page)
    landingUI = new LandingPage(page)
    login = new loginPage(page)
    await url.visit()
    await landingUI.clickButton()
  })

  //for (const data of dataset) {
  dataset.forEach(data => {
    test(`cliente ${data.documentNumberPP} con canales digitales`, async ({page}) => {
      await login.digitals(data.documentNumberPP)
      await login.screenPassword(data.textPassword, data.password)
    })
  })

  dataset.forEach(data => {
    test(`cliente ${data.documentNumberIV} sin canales digitales`, async ({page}) => {
      await login.digitals(data.documentNumberIV)
      await login.identityValidation(data.textIV)
    })
  })

  validation.forEach(data => {
    test.only(`Validaciones login ${data.title}`, async ({page}) => {
      await login.validations(data.type, data.documentNumber, data.message)
    })
  })

})