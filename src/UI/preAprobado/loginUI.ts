import { expect, Locator, Page } from "@playwright/test";

const loginPage = class {

  private readonly selectDT: Locator
  private readonly selectCC: Locator
  private readonly selectUS: Locator
  private readonly inputDtN: Locator
  private readonly checkTerms: Locator
  private readonly checkBussiness: Locator
  private readonly btnStart: Locator
  private readonly textPassword: Locator
  private readonly textIV: Locator
  private readonly inputPassword: Locator
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
  async digitals(documentNumber: string) {
    await this.selectDT.click()
    await this.selectCC.click()
    await this.inputDtN.type(documentNumber)
    await this.checkTerms.check()
    await this.checkBussiness.check()
    await this.btnStart.click()
  }
  async screenPassword(textPassword: string, password: string) {
    await expect(this.textPassword).toContainText(textPassword);
    await this.inputPassword.type(password)
    await this.btnStart.click()
  }

  async identityValidation(textIV: string) {
    await expect(this.textIV).toHaveText(textIV);
  }

  async validations(type: string, documentNumber: string, message: string) {
    await this.selectDT.click()
    if(type == 'US') {
      await this.selectUS.click()
    } else {
      await this.selectCC.click()
    }
    await this.inputDtN.type(documentNumber)
    await expect(this)
  }
}
export default loginPage


