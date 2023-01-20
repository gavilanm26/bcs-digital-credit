import { expect } from "@playwright/test"
import promisoryNoteUI from "../../UI/preAprobado/promisoryNoteUI"

const promisoryNoteInteraction = class extends promisoryNoteUI {
  async screenPromisory(
    textPromisory: string,
    stepPromisory: string
  ) {
    await expect(this.textPromisory).toContainText(textPromisory)
    await expect(this.stepPromisory).toContainText(stepPromisory)
  }

  async firmar(){
    await this.bntPromisory.click()
  }
}
export default promisoryNoteInteraction