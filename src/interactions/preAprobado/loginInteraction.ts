import { expect } from "@playwright/test";
import loginUI from "../../UI/preAprobado/loginUI";
const loginInteraction = class extends loginUI{
  async digitals(documentNumber: string) {
    await this.selectDT.click()
    await this.selectCC.click()
    await this.inputDtN.type(documentNumber)
    await this.checkTerms.check()
    await this.checkBussiness.check()
    await this.btnStart.click()
  }
  async screenPassword(textPassword: string, password: string) {
    await expect(this.textPassword).toContainText(textPassword);
    await this.inputPassword.type(password)
    await this.btnStart.click()
  }

  async identityValidation(textIV: string) {
    await expect(this.textIV).toHaveText(textIV);
  }

  async validations(type: string, documentNumber: string) {
    await this.selectDT.click()
    if(type == 'US') {
      await this.selectUS.click()
    } else {
      await this.selectCC.click()
    }
    await this.inputDtN.type(documentNumber)
    await expect(this)
  }
}

export default loginInteraction