import { Locator, Page } from "@playwright/test"

const congratulationsUI = class {
  protected readonly textQuestions: Locator
  protected readonly star1: Locator
  protected readonly star2: Locator
  protected readonly star3: Locator
  protected readonly star4: Locator
  protected readonly star5: Locator
  protected readonly tittleStars1: Locator
  protected readonly questionStar1: Locator
  protected readonly tittleStars2: Locator
  protected readonly tittleStars3: Locator
  protected readonly questionStar3: Locator
  protected readonly tittleStars4: Locator
  protected readonly questionStar4: Locator
  protected readonly tittleStars5: Locator
  protected readonly response1S3: Locator
  protected readonly response2S3: Locator
  protected readonly response3S3: Locator
  protected readonly response4S3: Locator
  protected readonly response5S3: Locator
  protected readonly response1S5: Locator
  protected readonly response2S5: Locator
  protected readonly response3S5: Locator
  protected readonly response4S5: Locator
  protected readonly response5S5: Locator
  protected readonly resposeOther: Locator
  protected readonly textArea: Locator

  protected readonly btnContinue: Locator
  protected readonly closeQuestions: Locator
  protected readonly textCongratulations: Locator
  protected readonly bntFinish: Locator

  constructor(page: Page) {
    this.textQuestions = page.getByText('¿Cómo califica su experiencia adquiriendo el crédito?')
    this.star1 = page.locator('#start1')
    this.star2 = page.locator('#start2')
    this.star3 = page.locator('#start3')
    this.star4 = page.locator('#start4')
    this.star5 = page.locator('#start5')
    this.tittleStars1 = page.getByText('Muy mala')
    this.questionStar1 = page.getByText('¿Qué salió mal?')
    this.tittleStars2 = page.getByText('Regular')
    this.tittleStars3 = page.getByText('Buena')
    this.questionStar3 = page.getByText('¿Qué podemos mejorar?')
    this.tittleStars4 = page.getByText('Muy Buena')
    this.questionStar4 = page.getByText('¿Qué destaca de la experiencia?')
    this.tittleStars5 = page.getByText('Excelente')
    this.response1S3 = page.getByText('Proceso muy largo')
    this.response2S3 = page.getByText('No me dio confianza')
    this.response3S3 = page.getByText('Faltó acompañamiento')
    this.response4S3 = page.getByText('No entendí qué debía hacer')
    this.response5S3 = page.getByText('Otro')
    this.textArea = page.locator('textarea[name="observation"]')
    this.response2S5 = page.getByText('Seguridad')
    this.resposeOther = page.getByText('Otro')
    this.btnContinue = page.getByRole('button', { name: 'Continuar' })
    this.closeQuestions = page.getByRole('button').nth(1)
    this.textCongratulations = page.getByText('¡Felicitaciones!')
    this.bntFinish = page.getByRole('button', { name: 'Finalizar' })
  }
}

export default congratulationsUI