import { Locator, Page } from "@playwright/test";

const accountsUI = class {

  protected readonly textAccount: Locator
  protected readonly steps: Locator
  protected readonly account: Locator
  protected readonly checkY: Locator
  protected readonly checkN: Locator
  protected readonly btnContinue: Locator


  constructor(page: Page) {
    this.textAccount = page.locator("//p[text()='Seleccionar cuenta']")
    this.steps = page.getByTestId('stepNumber')
    this.account = page.locator("(//p[text()='Cuenta de ahorro'])[1]")
    this.checkY = page.locator('span').first()
    this.checkN = page.locator('span').nth(1)
    this.btnContinue = page.getByRole('button', { name: 'Continuar' })
  }

}

export default accountsUI