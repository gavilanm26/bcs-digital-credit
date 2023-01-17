import { expect } from "@playwright/test";
import accountsUI from "../../UI/preAprobado/accountUI";

const accountsInteractions = class extends accountsUI {
  async screenAccounts(textAccount: string, steps: string){
    await expect(this.textAccount).toContainText(textAccount)
    await expect(this.steps).toContainText(steps)
  }

  async selectAccountY(){
    await this.account.click()
    await this.checkY.check()
    await this.btnContinue.click()
  }

  async selectAccountN(){
    await this.account.click()
    await this.checkN.check()
    await this.btnContinue.click()
  }
}

export default accountsInteractions