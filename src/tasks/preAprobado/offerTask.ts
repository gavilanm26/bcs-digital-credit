import { datos } from "../../models/preAprobado/interfaces/interfaceData";
import offerInteraction from "../../interactions/preAprobado/offerInteraction"

const offerTask = class {
  private readonly page
  private offer

  constructor(page) {
    this.page = page;
    this.setup()
  }

  async setup() {
    this.offer = new offerInteraction(this.page)
  }

  async ofertas(
    data: datos
  ){
    await this.offer.screenOffer(data.textScreen, data.step)
  }

  async escogerFecha(){
    await this.offer.selectFecha()
  }

  async continuar(){
    await this.offer.siguiente()
  }



}
export default offerTask