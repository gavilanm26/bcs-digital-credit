import { expect, Locator } from "@playwright/test";

export class LandingTask {
    async landingVerify(txtComoSolicitarlo: Locator) {
        await expect(txtComoSolicitarlo).toContainText('Tiene un crédito preaprobado de libre inversión');
    }
}