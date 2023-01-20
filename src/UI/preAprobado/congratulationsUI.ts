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
  protected readonly response2S5: Locator
  protected readonly resposeOther: Locator

  protected readonly btnContinue: Locator
  protected readonly closeQuestions: Locator
  protected readonly textCongratulitions: Locator
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
    this.response2S5 = page.getByText('Seguridad')
    this.resposeOther = page.getByText('Otro')
    this.btnContinue = page.getByRole('button', { name: 'Continuar' })
    this.closeQuestions = page.getByRole('button').nth(1)
    this.textCongratulitions = page.getByText('ha finalizado su proceso de solicitud')
    this.bntFinish = page.getByRole('button', { name: 'Finalizar' })
  }
}

export default congratulationsUI