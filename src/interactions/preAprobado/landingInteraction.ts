import { expect } from "@playwright/test";
import landingUI from "../../UI/preAprobado/landingUI";

const landingInteraction = class extends landingUI{
  async clickButton() {
    await this.btn1.click()
  }
  async landingVerify() {
    await expect(this.txtTitle).toEqual('Crédito Amigo Digital')
  }
}

export default landingInteraction