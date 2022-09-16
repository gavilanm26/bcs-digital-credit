import { test } from '@playwright/test'
import HomePage  from '../../user-interfaces/homePage'
import LandingPage from '../../user-interfaces/landingPage'

test.describe('should show Landing', () => {
    let homePage: HomePage
    let landingPage: LandingPage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        landingPage = new LandingPage(page)
        await homePage.visit()
    })

    test('Positive Scenario: Click on the button ¡Solicitar mi crédito!', async ({ page}) => {
        await landingPage.landingVerify()
        await landingPage.buttonClic1()
    })
})