import { test } from "@playwright/test";
import offerInteraction from "../../interactions/preAprobado/offerInteraction";

const offerTask = class {
  private page;
  private dataset;
  private offer;

  constructor(page, dataset) {
    this.page = page;
    this.dataset = dataset;
    this.offer = new offerInteraction(page);
  }

  async runTest() {
    this.dataset.forEach(item => {
      test("paso 1 de 4", async () => {
        await this.offer.screenOffer(item.textOffer, item.stepOffer);
      });
    });
  }
}

export default offerTask