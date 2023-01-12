import { Locator, Page } from "@playwright/test";

const offerUI = class {
  protected readonly textOffer: Locator
  protected readonly steps: Locator
  protected readonly disminuir: Locator
  protected readonly aumentar: Locator
  protected readonly disminuirPlazo: Locator
  protected readonly aumentarPlazo: Locator
  protected readonly cuota: Locator
  protected readonly seguro: Locator
  protected readonly editarFecha: Locator
  protected readonly numeroFecha: Locator
  protected readonly btnFecha: Locator
  protected readonly btnOferta: Locator

  constructor(page: Page) {
    this.textOffer = page.getByTestId('titleStep')
    this.steps = page.getByTestId('stepNumber')
    this.disminuir = page.getByRole('button', { name: 'disminuir monto de préstamo' })
    this.aumentar = page.getByRole('button', { name: 'aumentar monto de préstamo' })
    this.disminuirPlazo = page.getByRole('button', { name: 'disminuir plazo' })
    this.aumentarPlazo = page.getByRole('button', { name: 'aumentar plazo' })
    this.cuota = page.getByText('$274.130')
    this.seguro = page.getByText('Valor seguro: $36.600')
    this.editarFecha = page.getByText('Editar fecha')
    this.numeroFecha = page.getByRole('button', { name: '11' })
    this.btnFecha = page.locator('#modal-date').getByRole('button', { name: 'Continuar' })
    this.btnOferta = page.getByRole('button', { name: 'Continuar' })
  }
}

export default offerUI