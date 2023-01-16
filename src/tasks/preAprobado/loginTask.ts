import loginInteraction from "../../interactions/preAprobado/loginInteraction";
import loginFormData from "../../models/preAprobado/interfaces/interfaceData";

const loginTask = class {
  private page
  private login

  constructor(page){
    this.page = page
    this.setup()
  }
  async setup() {
    this.login = new loginInteraction(this.page)
  }

  async loginForm(
    data: loginFormData
  ){
    if (data.number === '8797910') {
      await this.login.digitals(data.number)
      await this.login.screenPassword(data.textPassword, data.password)
    } else {
      await this.login.digitals(data.number)
      await this.login.identityValidation(data.textIV)
    }

  }

}

export default loginTask