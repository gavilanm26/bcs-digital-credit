import { test } from '@playwright/test'
import baseTest from "../hooks/baseTest";
import dataset from "../../utils/dataset";
import FormData from "../hooks/formData";

test.describe('Ingreso a Crédito amigo digital', () => {
    let base, formData

    for (const data of dataset) {
        formData = new FormData(data)

        test.beforeEach(async ({ page }) => {
            base = new baseTest(page)
        })

        test('Hago Clic en ¡Solicitar mi crédito! @regresionPreAprobado', async () => {
            await base.visitPage()
        })
    }
})