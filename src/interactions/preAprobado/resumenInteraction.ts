import { expect } from "@playwright/test"
import resumenUI from "../../UI/preAprobado/resumenUI"

const resumenInteraction = class extends resumenUI{
  async screenSummary(
    textResumen: string,
    stepResumen: string
  ){
    await expect(this.textResumen).toContainText(textResumen)
    await expect(this.stepResumen).toContainText(stepResumen)
  }

  async acept(){
    await this.btnContinue.click()
  }
}

export default resumenInteraction

