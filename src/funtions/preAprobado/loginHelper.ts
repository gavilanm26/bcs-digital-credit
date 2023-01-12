const testLogin = async (data, login) => {
  if (data.documentNumberPP) {
    await login.digitals(data.documentNumberPP)
    await login.screenPassword(data.textPassword, data.password)
  } else {
    await login.digitals(data.documentNumberIV)
    await login.identityValidation(data.textIV)
  }
}

export default testLogin