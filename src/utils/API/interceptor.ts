let responses = []
const interceptResponses = async (page) => {
  page.on("response", async (response) => {
    if (response.url().startsWith("https://qa.bancocajasocialsa.org/") &&
      !response.url().endsWith('.js') && !response.url().endsWith('.css')
    ){
      const startTime = new Date().getTime();
      console.log(`Intercepted url: ${response.url()}`)
      console.log(`Status: ${response.status()}`)
      console.log(await response.text())
      const endTime = new Date().getTime()
      const duration = endTime - startTime
      console.log(`Duration: ${duration}s`)
      console.log("----------------------------------------------------------------")
      responses.push({
        url: response.url(),
        status: response.status(),
        duration: duration,
        response: await response.json()
      })
    }
  })
}
export default interceptResponses

