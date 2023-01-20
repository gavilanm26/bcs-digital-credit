import { expect } from "@playwright/test"
import OTCUI from "../../UI/preAprobado/OTCUI"

const otcInteraction = class extends OTCUI {
  async screenOTC(
    textOTC: string,
    stepOTC: string,
    tittleOTC
  ) {
    await expect(this.textOTC).toContainText(textOTC)
    await expect(this.stepOTC).toContainText(stepOTC)
    await expect(this.tittleOTC).toContainText(tittleOTC)
  }

  async waitOTCSuccess(){
    await expect(this.susscessOTC).toBeVisible()
  }

}

export default otcInteraction







