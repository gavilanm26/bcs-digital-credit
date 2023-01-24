import { datos } from "../../models/preAprobado/interfaces/interfaceData";
import qualifyInteraction from "../../interactions/preAprobado/qualifyInteraction";

const qualifyTask = class {
  private readonly page
  private qualify

  constructor(page) {
    this.page = page
    this.setup()
  }

  async setup() {
    this.qualify = new qualifyInteraction(this.page)
  }

  async confirmScreenqualify(
    data: datos
  ){
    await this.qualify.screenqualify(
      data.textQualify
    )
  }

  async formQualify(
    data: datos
  ){
    await this.qualify.questions(
      data.tittleStars1,
      data.tittleStars2,
      data.tittleStars3,
      data.tittleStars4,
      data.tittleStars5,
      data.questionStar1,
      data.questionStar3,
      data.questionStar4
    )
  }
  async continueFinish(){
    await this.qualify.clickBtn()
  }
  async finishPP(){
    await this.qualify.clickBtnFinish()
  }
}

export default qualifyTask