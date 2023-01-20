import { expect } from "@playwright/test"
import beneficiaryUI from "../../UI/preAprobado/beneficiaryUI"

const beneficiaryInteraction = class extends beneficiaryUI{
  async screenBeneficiary(
    textBeneficiary: string,
    step: string
  ){
    await expect(this.textBeneficiary).toContainText(textBeneficiary)
    await expect(this.step).toContainText(step)
  }

  async beneficiaries(
    selectBeneficiaries: any,
    detail: string,
    firstName: { name1: string; name2: string; name3: string },
    lastName: string,
    relationship: { padres: string; hijos: string; conyuge: string },
    percentage: { twenty: string; thirty: string; fifty: string; oneHundred: string }
  ){
    switch(selectBeneficiaries){
      case "1":
        await this.clickModalDetail.click()
        await expect(this.details).toContainText(detail)
        await this.dialog.click()
        await this.selectBeneficiaries.selectOption(selectBeneficiaries)
        await this.firstName0.type(firstName.name1)
        await this.lastName0.type(lastName)
        await this.relationshipTyp0.selectOption(relationship.padres)
        await this.percentage0.selectOption(percentage.oneHundred)
        break
      case "2":
        await this.selectBeneficiaries.selectOption(selectBeneficiaries)
        await this.firstName0.type(firstName.name1)
        await this.lastName0.type(lastName)
        await this.relationshipTyp0.selectOption(relationship.padres)
        await this.percentage0.selectOption(percentage.fifty)

        await this.firstName1.type(firstName.name2)
        await this.lastName1.type(lastName)
        await this.relationshipTyp1.selectOption(relationship.conyuge)
        await this.percentage1.selectOption(percentage.fifty)
        break
      case "3":
        await this.selectBeneficiaries.selectOption(selectBeneficiaries)
        await this.firstName0.type(firstName.name1)
        await this.lastName0.type(lastName)
        await this.relationshipTyp0.selectOption(relationship.padres)
        await this.percentage0.selectOption(percentage.twenty)

        await this.firstName1.type(firstName.name2)
        await this.lastName1.type(lastName)
        await this.relationshipTyp1.selectOption(relationship.conyuge)
        await this.percentage1.selectOption(percentage.thirty)

        await this.firstName2.type(firstName.name3)
        await this.lastName2.type(lastName)
        await this.relationshipTyp2.selectOption(relationship.hijos)
        await this.percentage2.selectOption(percentage.fifty)
        break
        default:
          throw new Error(`Invalid number of beneficiaries: ${selectBeneficiaries}`)
    }
  }

  async continueBeneficiary(){
    await this.btnContinue.click()
  }
}

export default beneficiaryInteraction