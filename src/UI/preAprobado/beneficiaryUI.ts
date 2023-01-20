import { Locator, Page } from "@playwright/test"

const beneficiaryUI = class {
  protected readonly textBeneficiary: Locator
  protected readonly step: Locator
  protected readonly clickModalDetail: Locator
  protected readonly details: Locator
  protected readonly dialog: Locator
  protected readonly selectBeneficiaries: Locator
  protected readonly firstName0: Locator
  protected readonly lastName0: Locator
  protected readonly relationshipTyp0: Locator
  protected readonly percentage0: Locator
  protected readonly firstName1: Locator
  protected readonly lastName1: Locator
  protected readonly relationshipTyp1: Locator
  protected readonly percentage1: Locator
  protected readonly firstName2: Locator
  protected readonly lastName2: Locator
  protected readonly relationshipTyp2: Locator
  protected readonly percentage2: Locator
  protected readonly percentageMayor: Locator
  protected readonly percentageMenor: Locator
  protected readonly btnContinue: Locator

  constructor(page: Page) {
    this.textBeneficiary = page.getByTestId('titleStep')
    this.step = page.getByTestId('stepNumber')
    this.clickModalDetail = page.getByTestId('ClickModalDetail')
    this.details = page.getByText('Detalles del seguro de vida')
    this.dialog = page.getByRole('dialog').getByRole('button')
    this.selectBeneficiaries = page.locator('select[name="beneficiaries"]')
    this.firstName0 = page.locator('#firstName_0')
    this.firstName1 = page.locator('#firstName_1')
    this.firstName2 = page.locator('#firstName_2')
    this.lastName0 = page.locator('#lastName_0')
    this.lastName1 = page.locator('#lastName_1')
    this.lastName2 = page.locator('#lastName_2')
    this.relationshipTyp0 = page.locator('#relationshipType_0')
    this.relationshipTyp1 = page.locator('#relationshipType_1')
    this.relationshipTyp2 = page.locator('#relationshipType_2')
    this.percentage0 = page.locator('#percentage_0')
    this.percentage1 = page.locator('#percentage_1')
    this.percentage2 = page.locator('#percentage_2')
    this.percentageMenor = page.getByText('Para completar el porcentaje total')
    this.percentageMayor = page.getByText('Los porcentajes asignados superan')
    this.btnContinue = page.getByRole('button', { name: 'Continuar' })
  }
}
export default beneficiaryUI