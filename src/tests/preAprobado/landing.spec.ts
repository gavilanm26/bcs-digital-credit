import { test } from '@playwright/test'
import urlUI from '../../UI/preAprobado/urlUI'
import landingInteraction from '../../interactions/preAprobado/landingInteraction'

test.describe('Ingreso a Crédito amigo digital', () => {

    let url
    let landing

    test.beforeEach(async ({ page }) => {
        url = new urlUI(page)
        landing = new landingInteraction(page)
        await url.visit()
    })

    test('Hago Clic en ¡Solicitar mi crédito!', async () => {
        await landing.landingVerify()
        await landing.clickButton()
    })
})