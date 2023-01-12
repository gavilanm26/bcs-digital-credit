import { test } from '@playwright/test'
import URL from '../../UI/preAprobado/url'
import landingInteraction from '../../interactions/preAprobado/landingInteraction'

test.describe('Ingreso a la URL', () => {

    let url
    let landing

    test.beforeEach(async ({ page }) => {
        url = new URL(page)
        landing = new landingInteraction(page)
        await url.visit()
    })

    test('Clic en el botón ¡Solicitar mi crédito!', async () => {
        await landing.landingVerify()
        await landing.clickButton()
    })
})