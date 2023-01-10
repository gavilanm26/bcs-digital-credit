/*from 'playwright';

playwright(async ({ browser, page }) => {
  const actor = actorCalled('Bob').whoCan(BrowseTheWeb.using(browser));

  // Obtiene los datos del archivo Excel a través de la variable global testData
  const data = global.testData;

  // Crea una instancia de la clase Login y pásala a la función attemptsTo()
  const login = new Login(data);
  await actor.attemptsTo(login);

  // Verifica que el usuario está logueado correctamente
  await expect(page).toMatchElement(HomePage.welcomeMessage());
});*/
