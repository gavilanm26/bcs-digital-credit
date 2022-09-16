import { expect, Locator, Page } from "@playwright/test";
import { AbstractPage} from "../utils/AbstractPage";

class Channels extends AbstractPage{

    private readonly selectDocumenType: Locator
    private readonly inputDocumentNumber: Locator
    private readonly checkInformacionPersonal: Locator
    private readonly checkBussiness: Locator
    private readonly btnStart: Locator
    private readonly txtPassword: Locator
    private readonly txtIdentityValidation: Locator

    constructor(page: Page) {
        super(page);
        this.selectDocumenType = page.locator('select[name="documentType"]')
        this.inputDocumentNumber = page.locator('input[name="documentNumber"]')
        this.checkInformacionPersonal = page.locator('input[name="policy_and_terms"]')
        this.checkBussiness = page.locator('input[name="commercial_terms"]')
        this.btnStart = page.locator('text=Iniciar')
        this.txtPassword = page.locator('text=¿Olvidó su contraseña?')
        this.txtIdentityValidation = page.locator('text=Por su seguridad validaremos su identidad')
    }

    async documentType(documentType){
        await this.selectDocumenType.selectOption(documentType)
    }
    async documentNumber(number){
        await this.inputDocumentNumber.fill(number)
    }
    async policyAndTerms(){
        await this.checkInformacionPersonal.check()
    }
    async bussiness(){
        await this.checkBussiness.check()
    }
    async buttonStart(){
        await this.btnStart.click()
    }
    async login(){
        await expect(this.txtPassword).toContainText('¿Olvidó su contraseña?')
    }
    async identityValidation(){
        await expect(this.txtIdentityValidation).toContainText('Por su seguridad validaremos su identidad')
    }
}

export default Channels