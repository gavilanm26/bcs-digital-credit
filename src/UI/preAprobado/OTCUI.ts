import { Locator, Page } from "@playwright/test"

const OTCUI = class {
  protected readonly textOTC: Locator
  protected readonly stepOTC: Locator
  protected readonly tittleOTC: Locator
  protected readonly susscessOTC: Locator
  protected readonly backOTC: Locator
  protected readonly invalid: Locator


  constructor(page: Page) {
    this.textOTC = page.getByTestId('titleStep')
    this.stepOTC = page.getByTestId('stepNumber')
    this.tittleOTC = page.getByText('Firme el pagaré con el código recibido')
    this.backOTC = page.getByText('Volver a enviar código en')
    this.invalid = page.getByText('Código invalidó, intente nuevamente')
    this.susscessOTC = page.locator('circle')
  }

}
export default OTCUI