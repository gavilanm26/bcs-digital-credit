import { expect } from "@playwright/test"
import congratulationsUI from "../../UI/preAprobado/congratulationsUI"

const qualifyInteraction = class extends congratulationsUI {
  async screenqualify(
    textQualify: string
  ){
    await expect(this.textQuestions).toContainText(textQualify)
  }
  async questions(
    star: string,
    tittleStars1: string,
    tittleStars2: string,
    tittleStars3: string,
    tittleStars4: string,
    tittleStars5: string,
    questionStar1: string,
    questionStar3: string,
    questionStar4: string
  ){
    switch (star) {
      case '1':
        await expect(this.tittleStars1).toContainText(tittleStars1)
        await expect(this.questionStar1).toContainText(questionStar1)
        break
      case '2':
        await expect(this.tittleStars2).toContainText(tittleStars2)
        await expect(this.questionStar1).toContainText(questionStar1)
        break
      case '3':
        await expect(this.tittleStars3).toContainText(tittleStars3)
        await expect(this.questionStar3).toContainText(questionStar3)
        break
      case '4':
        await expect(this.tittleStars4).toContainText(tittleStars4)
        await expect(this.questionStar4).toContainText(questionStar4)
        break
      case '5':
        await expect(this.tittleStars5).toContainText(tittleStars5)
        await expect(this.questionStar4).toContainText(questionStar4)
        break
      case '0':
        await this.closeQuestions.click()
        break
      default:
        throw new Error(`Invalid number of stars: ${star}`)
    }
  }

  async selectQuestion1(){

  }
}

export default qualifyInteraction