import urlInteraction from "../../interactions/preAprobado/urlInteraction";
import loginInteraction from "../../interactions/preAprobado/loginInteraction";
import landingInteraction from "../../interactions/preAprobado/landingInteraction";
import offerInteraction from "../../interactions/preAprobado/offerInteraction";

//inicializar los objetos necesarios para las prueba
class baseTest {
  private readonly page
  private url
  private landing
  private login
  private offer
  private documentNumberPP: string
  private textPassword: string
  private password: string

  constructor(page) {
    this.page = page
    this.setup()
  }

  async setup() {
    this.url = new urlInteraction(this.page)
    this.landing = new landingInteraction(this.page)
    this.login = new loginInteraction(this.page)
    this.offer = new offerInteraction(this.page)
  }

  getInteractions() {
    return {
      url: this.url,
      landing: this.landing,
      login: this.login,
      offer: this.offer
    }
  }

  async visitPage() {
    await this.url.visit();
  }

  async clickCredito() {
    await this.landing.clickButton();
  }

  async loginForm() {
    await this.login.digitals(this.documentNumberPP);
    await this.login.screenPassword(this.textPassword, this.password)
  }
}
export default baseTest;