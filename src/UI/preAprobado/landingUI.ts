import { Locator, Page } from "@playwright/test";

const landingUI = class {
  protected txtTitle: Locator
  protected btn1: Locator

  constructor(page: Page) {
    this.txtTitle = page.locator('text=Crédito Amigo Digital');
    this.btn1 = page.locator('#btn-on-boarding-1');
  }
}

export default landingUI