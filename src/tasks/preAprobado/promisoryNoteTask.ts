import { datos } from "../../models/preAprobado/interfaces/interfaceData";
import promisoryNoteInteraction from "../../interactions/preAprobado/promisoryNoteInteraction";

const promisoryNoteTask = class {
  private readonly page
  private promisory

  constructor(page) {
    this.page = page
    this.setup()
  }

  async setup() {
    this.promisory = new promisoryNoteInteraction(this.page)
  }

  async confirmScreenPromisory(
    data: datos
  ){
    await this.promisory.screenPromisory(
      data.textPromisory,
      data.stepPromisory
    )
  }
  async promisor(){
    await this.promisory.firmar()
  }
}

export default promisoryNoteTask