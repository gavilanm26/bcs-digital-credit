import urlInteraction from "../../interactions/preAprobado/urlInteraction";
import landingInteraction from "../../interactions/preAprobado/landingInteraction";
//import { setup } from "../../tests/hooks/setup";
const landingTask = class {
  private url
  private landing
  private readonly page

  constructor(page){
    this.page = page
    this.setup()
  }

  async setup() {
    this.url = new urlInteraction(this.page)
    this.landing = new landingInteraction(this.page)
  }
  async visita() {
    await this.url.visit();
  }

  async clickCredit() {
    await this.landing.clickButton()
  }
}

export default landingTask