import { expect, Locator, Page } from "@playwright/test";

const offerUI = class {
  private readonly textOffer: Locator
  private readonly steps: Locator
  private readonly disminuir: Locator
  private readonly aumentar: Locator
  private readonly disminuirPlazo: Locator
  private readonly aumentarPlazo: Locator
  private readonly cuota: Locator
  private readonly seguro: Locator
  private readonly editarFecha: Locator
  private readonly numeroFecha: Locator
  private readonly btnFecha: Locator
  private readonly btnOferta: Locator


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

  async screenOffer(textOffer: string, stepOffer: string){
    await expect(this.textOffer).toContainText(textOffer);
    await expect(this.steps).toContainText(stepOffer);
  }
}

export default offerUI