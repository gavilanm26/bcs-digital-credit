import { datos } from "../../models/preAprobado/interfaces/interfaceData";
import landingTask from "../../tasks/preAprobado/landingTask"
import loginTask from "../../tasks/preAprobado/loginTask"
import offerTask from "../../tasks/preAprobado/offerTask"
import accountTask from "../../tasks/preAprobado/accountTask"
import beneficiaryTask from "../../tasks/preAprobado/beneficiaryTask"
import resumenTask from "../../tasks/preAprobado/resumenTask"
import promisoryNoteTask from "../../tasks/preAprobado/promisoryNoteTask"
import otcTask from "../../tasks/preAprobado/otcTask"
import qualifyTask from "../../tasks/preAprobado/qualifyTask"

//inicializar los objetos necesarios para las prueba
class baseTest {
  private readonly page
  private landingTask
  private loginTask
  private offerTask
  private accountTask
  private beneficiaryTask
  private resumenTask
  private promisoryNoteTask
  private otcTask
  private qualifyTask

  constructor(page) {
    this.page = page
    this.setup()

  }
  async setup() {
    this.landingTask = new landingTask(this.page)
    this.loginTask = new loginTask(this.page)
    this.offerTask = new offerTask(this.page)
    this.accountTask = new accountTask(this.page)
    this.beneficiaryTask = new beneficiaryTask(this.page)
    this.resumenTask = new resumenTask(this.page)
    this.promisoryNoteTask = new promisoryNoteTask(this.page)
    this.otcTask = new otcTask(this.page)
    this.qualifyTask = new qualifyTask(this.page)
  }

  async visitPage() {
    await this.landingTask.visita()
    await this.landingTask.clickCredit()
  }

  async login(data: datos) {
    await this.loginTask.loginForm(data)
  }

  async offers(data: datos) {
    await this.offerTask.ofertas(data)
    await this.offerTask.escogerFecha()
    await this.offerTask.continuar()
  }

  async accounts(data: datos) {
    await this.accountTask.cuentas(data)
    await this.accountTask.terms(data)
  }

  async beneficiarios(data: datos) {
    await this.beneficiaryTask.confirmScreen(data)
    await this.beneficiaryTask.seguro(data)
    await this.beneficiaryTask.continue()
  }

  async resumen(data: datos) {
    await this.resumenTask.confirmScreenResumen(data)
    await this.resumenTask.continuePromisory()
  }
  async promisoryNote(data: datos) {
    await this.promisoryNoteTask.confirmScreenPromisory(data)
    await this.promisoryNoteTask.promisor()
  }

  async OTC(data: datos) {
    await this.otcTask.confirmScreenOTC(data)
    await this.otcTask.callOTC()
  }

  async qualify(data: datos) {
    await this.qualifyTask.confirmScreenqualify(data)
    await this.qualifyTask.formQualify(data)
    await this.qualifyTask.continueFinish()
    await this.qualifyTask.finishPP()
  }
  async noQualify(data: datos) {
    await this.qualifyTask.confirmScreenqualify(data)
    await this.qualifyTask.formQualify(data)
    await this.qualifyTask.finishPP()
  }
}

export default baseTest