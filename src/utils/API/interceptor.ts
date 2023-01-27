let responses = []
const interceptResponses = async (page) => {
  page.on("response", async (response) => {
    if (response.url().startsWith("https://qa.bancocajasocialsa.org/") &&
      !response.url().endsWith('.js') && !response.url().endsWith('.css') &&
      !response.url().endsWith('.png')
    ){
      const startTime = new Date().getTime();
      console.log(`Intercepted url: ${response.url()}`)
      console.log(`Status: ${response.status()}`)
      if (response.status() === 200 &&
          response.headers()['content-length']!=='0'
      ) {
        console.log(await response.json())
        const endTime = new Date().getTime()
        const duration = endTime - startTime
        console.log(`Duration: ${duration}ms`)
        console.log("----------------------------------------------------------------")
        responses.push({
          url: response.url(),
          status: response.status(),
          duration: duration / 1000,
          response: await response.json()
        })
      } else {
        console.log('No tiene response')
      }
    }
  })
}
export default interceptResponses
