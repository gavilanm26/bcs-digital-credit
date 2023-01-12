import { Locator, Page } from "@playwright/test";

const loginUI = class {

  protected readonly selectDT: Locator
  protected readonly selectCC: Locator
  protected readonly selectUS: Locator
  protected readonly inputDtN: Locator
  protected readonly checkTerms: Locator
  protected readonly checkBussiness: Locator
  protected readonly btnStart: Locator
  protected readonly textPassword: Locator
  protected readonly textIV: Locator
  protected readonly inputPassword: Locator
  constructor(page: Page) {
    this.selectDT = page.getByRole('button', { name: 'Tipo de documento' })
    this.selectCC = page.getByRole('option', { name: 'Cédula de ciudadanía' })
    this.selectUS = page.getByRole('option', { name: 'Usuario' })
    this.inputDtN = page.locator('input[name="documentNumber"]')
    this.checkTerms = page.locator('#chk_policy_and_terms')
    this.checkBussiness = page.locator('#chk_commercial_terms')
    this.btnStart = page.getByRole('button', { name: 'Iniciar' })
    this.textPassword = page.getByText('Por su seguridad validaremos su identidad; ingrese la contraseña que usa para ac')
    this.inputPassword = page.getByPlaceholder('')
    this.textIV = page.getByRole('heading', { name: 'Por su seguridad validaremos su identidad' })
  }
}
export default loginUI


