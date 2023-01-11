import { expect, Locator, Page } from "@playwright/test";

const offerUI = class {
  private readonly textOffer: Locator
  private readonly steps: Locator

  constructor(page: Page) {
    this.textOffer = page.getByTestId('titleStep')
    this.steps = page.getByTestId('stepNumber')
  }

  async screenOffer(textOffer: string, stepOffer: string){
    await expect(this.textOffer).toContainText(textOffer);
    await expect(this.steps).toContainText(stepOffer);
  }
}

export default offerUI