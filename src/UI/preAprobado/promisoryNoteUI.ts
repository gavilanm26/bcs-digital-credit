import { Locator, Page } from "@playwright/test"
const promisoryNoteUI = class {
  protected readonly textPromisory: Locator
  protected readonly stepPromisory: Locator
  protected readonly tittlePromisory: Locator
  protected readonly modal: Locator
  protected readonly btnModal: Locator
  protected readonly textModal: Locator
  protected readonly closeModal: Locator
  protected readonly bntPromisory: Locator

  constructor(page: Page) {
    this.textPromisory = page.getByTestId('titleStep')
    this.stepPromisory = page.getByTestId('stepNumber')
    this.tittlePromisory = page.getByText('A continuación encontrará el pagaré.')
    this.modal = page.getByTestId('ClickModal')
    this.btnModal = page.getByRole('button', { name: 'Aceptar pagaré' })
    this.textModal = page.locator('#pagare').getByText('Firmar pagaré')
    this.closeModal = page.getByRole('button').nth(1)
    this.bntPromisory = page.getByRole('button', { name: 'Firmar pagaré' })
  }
}

export default promisoryNoteUI