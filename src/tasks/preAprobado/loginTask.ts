import {test} from "@playwright/test";
import LoginInteraction from "../../interactions/preAprobado/loginInteraction";

const loginTask = class {
  private page
  private dataset
  private loginI

  constructor(page, dataset) {
    this.page = page
    this.dataset = dataset
    this.loginI = new LoginInteraction(page)
  }

  async loginTest() {
    this.dataset.forEach(data => {
      test.only(`cliente ${data.documentNumberPP} con canales digitales`,
        async ({ page }) => {
          await this.loginI.digitals(data.documentNumberPP)
          await this.loginI.screenPassword(data.textPassword, data.password)
        })
    })

    this.dataset.forEach(data => {
      test(`cliente ${data.documentNumberIV} sin canales digitales`, async ({ page }) => {
        await this.loginI.digitals(data.documentNumberIV)
        await this.loginI.identityValidation(data.textIV)
      })
    })
  }
}

export default loginTask