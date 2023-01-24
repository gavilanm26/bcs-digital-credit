import accountsInteractions from "../../interactions/preAprobado/accountsInteractions"
import { datos } from "../../models/preAprobado/interfaces/interfaceData";

const accountTask = class {
  private readonly page
  private account

  constructor(page) {
    this.page = page
    this.setup()
  }

  async setup() {
    this.account = new accountsInteractions(this.page)
  }

  async cuentas(
    data: datos
  ){
    await this.account.screenAccounts(data.textScreen2, data.stepAccount2)
  }
  async terms(
    data: datos
  ){
    if (data.authorize ==='yes'){
      await this.account.selectAccountY()
  } else {
      await this.account.selectAccountN()
    }

  }

}

export default accountTask