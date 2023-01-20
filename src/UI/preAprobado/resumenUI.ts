import { Locator, Page } from "@playwright/test"

const resumenUI = class {
  protected readonly textResumen: Locator
  protected readonly stepResumen: Locator
  protected readonly btnContinue: Locator

  constructor(page: Page) {
    this.textResumen = page.getByTestId('titleStep')
    this.stepResumen = page.getByTestId('stepNumber')
    this.btnContinue = page.getByRole('button', { name: 'Aceptar' })
  }

}

export default resumenUI