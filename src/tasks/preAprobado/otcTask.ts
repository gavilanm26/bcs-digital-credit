import formData from "../../models/preAprobado/interfaces"
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
    data: formData
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