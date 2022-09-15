import { test } from '@playwright/test'
import { HomePage } from '../../user-interfaces/homePage'
import landingPage from '../../user-interfaces/landingPage'

test.describe('should show Landing', () => {
    let homePage: HomePage
    let onboardingPage: landingPage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        onboardingPage = new landingPage(page)
        await homePage.visit()
    })

    test('Positive Scenario: Click on the button ¡Solicitar mi crédito!', async ({ page}) => {
        await onboardingPage.landingVerify()
        await onboardingPage.buttonClic1()
    })
})