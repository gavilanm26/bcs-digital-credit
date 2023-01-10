import { test } from '@playwright/test'
import URL from '../../UI/preAprobado/url'
import LandingUI from '../../UI/preAprobado/landingUI'

test.describe('Ingreso a la URL', () => {

    let url
    let landingui

    test.beforeEach(async ({ page }) => {
        url = new URL(page)
        landingui = new LandingUI(page)
        await url.visit()
    })

    test('Clic en el botón ¡Solicitar mi crédito!', async ({ page}) => {
        await landingui.landingVerify()
        await landingui.clickButton()
    })


    /*test.beforeEach(async ({page}) => {
        await page.goto('https://qa.bancocajasocialsa.org/credito')
    })

    test.only('Seleccionar tipo de documento', async({ page }) => {
        await expect(page).toHaveTitle('BCS Crédito Amigo Digital')
        await page.click('#btn-on-boarding-1')

        const txtLogin1 = await page.locator('#title-Login')
        await expect(txtLogin1).toBeVisible()
        await expect(txtLogin1).toHaveText('Bienvenido a')

        const elementoNoExiste = await page.locator('H5')
        await expect(elementoNoExiste).not.toBeVisible()

        await page.getByRole('button', { name: 'Tipo de documento' }).click();
        await page.click('text=Cédula de ciudadanía')
        await page.type('#documentNumber', '94387989')
        await page.click('#chk_policy_and_terms')
        //await page.pause()
        await page.click('#btn-login')

    })*/
})