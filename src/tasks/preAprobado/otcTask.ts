import { datos } from "../../models/preAprobado/interfaces/interfaceData";
import otcInteraction from "../../interactions/preAprobado/otcInteraction"
const otcTask = class {
  private readonly page
  private otc

  constructor(page) {
    this.page = page
    this.setup()
  }

  async setup() {
    this.otc = new otcInteraction(this.page)
  }

  async confirmScreenOTC(
    data: datos
  ){
    await this.otc.screenOTC(
      data.textOTC,
      data.stepOTC,
      data.tittleOTC
    )
  }
  async callOTC(){
    await this.otc.waitOTCSuccess()
  }
}

export default otcTask