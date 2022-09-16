import { expect, Locator, Page } from "@playwright/test";
import { AbstractPage} from "../utils/AbstractPage";

class LandingPage extends AbstractPage {
    readonly txtComoSolicitarlo: Locator
    readonly bntSolicitar1: Locator
    readonly bntSolicitar2: Locator


    constructor(page: Page) {
        super(page);
        this.txtComoSolicitarlo = page.locator('text=Tiene un crédito preaprobado de libre inversión');
        this.bntSolicitar1 = page.locator('#btn-on-boarding-1');
        this.bntSolicitar2 = page.locator('#btn-on-boarding-2');
    }
    async landingVerify() {
        await expect(this.txtComoSolicitarlo).toContainText('Tiene un crédito preaprobado de libre inversión');
    }
    async buttonClic1() {
        await this.bntSolicitar1.click()
    }
}
export default LandingPage