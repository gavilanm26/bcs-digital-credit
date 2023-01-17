import accountsInteractions from "../../interactions/preAprobado/accountsInteractions"
import formData from "../../models/preAprobado/interfaces/interfaceData"

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
    data: formData
  ){
    await this.account.screenAccounts(data.textScreen2, data.stepAccount2)
  }
  async terms(
    data: formData
  ){
    if (data.authorize ==='yes'){
      await this.account.selectAccountY()
  } else {
      await this.account.selectAccountN()
    }

  }

}

export default accountTask