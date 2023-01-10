import { expect, Locator, Page } from "@playwright/test";

const LandingUI = class {
  readonly txtTitle: Locator
  readonly btn1: Locator
  readonly btn2: Locator

  constructor(page: Page) {
    this.txtTitle = page.locator('text=Crédito Amigo Digital');
    this.btn1 = page.locator('#btn-on-boarding-1');
  }

  async clickButton() {
    await this.btn1.click()
  }
  async landingVerify() {
    await expect(this.txtTitle).toEqual('Crédito Amigo Digital')
  }

}

export default LandingUI