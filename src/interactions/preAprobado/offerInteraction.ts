import { expect } from "@playwright/test";
import offerUI from "../../UI/preAprobado/offerUI";

const offerInteractions = class extends offerUI {
  async screenOffer(textOffer: string, step: string) {
    await expect(this.textOffer).toContainText(textOffer);
    await expect(this.steps).toContainText(step);
  }
  async selectFecha(){
    await this.editarFecha.click()
    await this.numeroFecha.click()
    await this.btnFecha.click()
  }
  async siguiente(){
    await this.btnOferta.click()
  }

  async endpoints(page){
    page.on("response", async (response) => {
      expect(response.status()).toBe(200);
    })
  }
}

export default offerInteractions