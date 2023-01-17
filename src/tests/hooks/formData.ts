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
  }}

export default FormData