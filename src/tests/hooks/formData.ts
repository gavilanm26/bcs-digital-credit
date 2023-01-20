const FormData = class {
  private number: String
  private textPassword: String
  private password: String
  private textIV: String
  private textScreen: String
  private step: String
  private textScreen2: String
  private stepAccount2: String
  private authorize: String
  private textBeneficiary: string
  private stepBeneficiary: string
  private selectBeneficiaries?: String
  private detail?: string
  private firstName?: {
    name1: string,
    name2: string,
    name3: string
  }
  private lastName?: string
  private relationship?: {
    padres: string
    hijos: string
    conyuge: string
    hermanos: string
    Abuelos: string
    nietos: string
    tios: string
    sobrinos: string
  }
  private percentage?: {
    twenty: string
    thirty: string
    fifty: string
    oneHundred: string
  }
  private textResumen: string
  private stepResumen: string
  private textPromisory: string
  private stepPromisory: string
  private textOTC: string
  private stepOTC: string
  private tittleOTC: string

  constructor(data) {
    this.number = data.documentNumberPP
    this.textPassword = data.textPassword
    this.password = data.password
    this.textIV = data.textIV
    this.textScreen = data.textOffer
    this.step = data.stepOffer
    this.textScreen2 = data.textAccount
    this.stepAccount2 = data.stepAccount
    this.authorize = data.checkYes
    this.textBeneficiary = data.textBeneficiary
    this.stepBeneficiary = data.stepBeneficiary
    this.selectBeneficiaries = data.benefi.one
    this.detail = data.details
    this.firstName = {
      name1: data.fNames.name1,
      name2: data.fNames.name2,
      name3: data.fNames.name3
    };
    this.lastName = data.lastname
    this.relationship = {
      padres: data.relationship.padres,
      hijos: data.relationship.hijos,
      conyuge: data.relationship.conyuge,
      hermanos: data.relationship.hermanos,
      Abuelos: data.relationship.Abuelos,
      nietos: data.relationship.nietos,
      tios: data.relationship.tios,
      sobrinos: data.relationship.sobrinos

    }
    this.percentage = {
      twenty: data.percentage.twenty,
      thirty: data.percentage.thirty,
      fifty: data.percentage.fifty,
      oneHundred: data.percentage.oneHundred
    }
    this.textResumen = data.textResumen
    this.stepResumen = data.stepResumen
    this.textPromisory = data.textPromisory
    this.stepPromisory = data.stepPromisory
    this.textOTC = data.textOTC
    this.stepOTC = data.stepOTC
    this.tittleOTC = data.tittleOTC
  }
}

export default FormData