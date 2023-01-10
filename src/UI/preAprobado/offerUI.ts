import { expect, Locator, Page } from "@playwright/test";

const offerPage = class {
  private readonly textOffer: Locator
  private readonly steps: Locator

  constructor(page: Page) {
    this.textOffer = page.getByTestId('titleStep')
    this.steps = page.getByTestId('stepNumber')
  }

  async screeOffer(textOffer: string, stepOffer: string){
    await expect(this.textOffer).toContainText(textOffer);
    await expect(this.steps).toContainText(stepOffer);
  }
}

export default offerPage