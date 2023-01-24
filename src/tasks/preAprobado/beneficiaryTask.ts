import beneficiaryInteraction from "../../interactions/preAprobado/beneficiaryInteraction"
import { datos } from "../../models/preAprobado/interfaces/interfaceData";

const beneficiaryTask = class {
  private readonly page
  private beneficiary

  constructor(page) {
    this.page = page
    this.setup()
  }
  async setup() {
    this.beneficiary = new beneficiaryInteraction(this.page)
  }
  async confirmScreen(
    data: datos
  ){
    await this.beneficiary.screenBeneficiary(
      data.textBeneficiary,
      data.stepBeneficiary)
  }

  async seguro(
    data: datos
  ){
    await this.beneficiary.beneficiaries(
      data.selectBeneficiaries,
      data.detail,
      data.firstName,
      data.lastName,
      data.relationship,
      data.percentage
    )
  }

  async continue(){
    await this.beneficiary.continueBeneficiary()
  }
}

export default beneficiaryTask