import landingTask from "../../tasks/preAprobado/landingTask"
import loginTask from "../../tasks/preAprobado/loginTask"
import offerTask from "../../tasks/preAprobado/offerTask";
import accountTask from "../../tasks/preAprobado/accountTask";
import formData from "../../models/preAprobado/interfaces/interfaceData"

//inicializar los objetos necesarios para las prueba
class baseTest {
  private readonly page
  private landingTask
  private loginTask
  private offerTask
  private accountTask

  constructor(page) {
    this.page = page
    this.setup()

  }
  async setup() {
    this.landingTask = new landingTask(this.page)
    this.loginTask = new loginTask(this.page)
    this.offerTask = new offerTask(this.page)
    this.accountTask = new accountTask(this.page)
  }

  async visitPage() {
    await this.landingTask.visita()
    await this.landingTask.clickCredit()
  }

  async login(data: formData) {
    await this.loginTask.loginForm(data)
  }

  async offers(data: formData) {
    await this.offerTask.ofertas(data)
    await this.offerTask.escogerFecha()
    await this.offerTask.continuar()
  }

  async accounts(data: formData) {
    await this.accountTask.cuentas(data)
    await this.accountTask.terms(data)
  }
}

export default baseTest