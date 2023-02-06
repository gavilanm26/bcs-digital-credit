import {test} from "@playwright/test"
import baseTest from "../hooks/baseTest"
import dataset from "../../utils/dataset";
import FormData from "../hooks/formData";
test.describe('Login', async () => {
  let base, formData

  for (const data of dataset) {
    formData = new FormData(data);

    test.beforeEach(async({page}) => {
      base = new baseTest(page)
      await base.visitPage()
    })

    test(`cliente ${data.documentNumberPP} con canales digitales @smock`, async () => {
      await base.login(formData)
    })

    test(`cliente ${data.documentNumberIV} sin canales digitales`, async () => {
      formData.number = data.documentNumberIV
      await base.login(formData)
    })
  }
})