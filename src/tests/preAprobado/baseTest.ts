import landingTask from "../../tasks/preAprobado/landingTask";
import loginTask from "../../tasks/preAprobado/loginTask";
import loginFormData from "../../models/preAprobado/interfaces/interfaceData";

//inicializar los objetos necesarios para las prueba
class baseTest {
  private readonly page
  private landingTask
  private loginTask

  constructor(page) {
    this.page = page
    this.setup()
  }

  async setup() {
    this.landingTask = new landingTask(this.page)
    this.loginTask = new loginTask(this.page)
  }

  async visitPage() {
    await this.landingTask.visita()
    await this.landingTask.clickCredit()
  }

  async login(data: loginFormData) {
    await this.loginTask.loginForm(data)
  }
}
export default baseTest