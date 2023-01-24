import { datos } from "../../models/preAprobado/interfaces/interfaceData";
import resumenInteraction from "../../interactions/preAprobado/resumenInteraction"
const resumenTask = class {
  private readonly page
  private resum

  constructor(page) {
    this.page = page
    this.setup()
  }

  async setup() {
    this.resum = new resumenInteraction(this.page)
  }
  async confirmScreenResumen(
    data: datos
  ){
    await this.resum.screenSummary(
      data.textResumen,
      data.stepResumen
    )
  }

  async continuePromisory(){
    await this.resum.acept()
  }
}

export default resumenTask