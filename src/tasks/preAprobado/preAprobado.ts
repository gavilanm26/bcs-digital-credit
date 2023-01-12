import urlInteraction from "../../interactions/preAprobado/urlInteraction";
import landingInteraction from "../../interactions/preAprobado/landingInteraction";
import loginTask from "../../tasks/preAprobado/loginTask";
import offerTask from "../../tasks/preAprobado/offerTask";
//import Dataset from "../../utils/dataset";
const Dataset = JSON.parse(JSON.stringify(require("../../models/preAprobado/data.json")))

const preAprobado = class {
  private page
  private url
  private Dataset
  private landing
  private loginT
  private offerT
  constructor(page, dataset) {
    this.page = page
    this.Dataset = new dataset()
    this.url = new urlInteraction(page)
    this.landing = new landingInteraction(page)
    this.loginT = new loginTask(page, Dataset)
    this.offerT = new offerTask(page, Dataset)
  }

  async visita() {
    await this.url.visit()
  }

  async landingV() {
    await this.landing.landingVerify();
    await this.landing.clickButton();
  }

  async runLogin() {
    await this.loginT.loginTest()
    //await this.offerT.runTests()
  }

}

export default preAprobado