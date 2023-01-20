interface formData {
  number?: string
  textPassword?: string
  password?: string
  textIV?: string
  textScreen?: string
  step?: string
  textScreen2?: string
  stepAccount2?: string
  authorize?: string
  textBeneficiary?: string
  stepBeneficiary?: string
  selectBeneficiaries?: string
  detail?: string
  firstName?: {
    name1: string,
    name2: string,
    name3: string
  }
  lastName?: string
  relationship?: {
    padres: string
    hijos: string
    conyuge: string
    hermanos: string
    Abuelos: string
    nietos: string
    tios: string
    sobrinos: string
  }
  percentage?: {
    twenty: string
    thirty: string
    fifty: string
    oneHundred: string
  }
  numBeneficiaries?: string
  textResumen?: string
  stepResumen?: string
  textPromisory?: string
  stepPromisory?: string
  textOTC?: string
  stepOTC?: string
  tittleOTC?: string
}