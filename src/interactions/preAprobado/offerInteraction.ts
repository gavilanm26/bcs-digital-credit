import { expect } from "@playwright/test";
import offerUI from "../../UI/preAprobado/offerUI";

const offerInteractions = class extends offerUI {
  async screenOffer(textOffer: string, stepOffer: string) {
    await expect(this.textOffer).toContainText(textOffer);
    await expect(this.steps).toContainText(stepOffer);
  }
}

export default offerInteractions