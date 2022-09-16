import { test } from '@playwright/test'
import HomePage from "../../user-interfaces/homePage";
import LandingPage from "../../user-interfaces/landingPage";
import Channels from "../../user-interfaces/channels";


test.describe('must show login to validate digital channels', async () => {
    let homePage: HomePage
    let landigPage: LandingPage
    let channels: Channels

    test.beforeEach(async ({page, context}) => {
        await context.tracing.start({
            screenshots: true,
            snapshots: true,
        })
        homePage = new HomePage(page)
        landigPage = new LandingPage(page)
        channels = new Channels(page)
        await homePage.visit()
        await landigPage.buttonClic1()
    })

    test('customer with digital channels', async ({page}) =>{
        await channels.documentType('CC')
        await channels.documentNumber('41681248')
        await channels.policyAndTerms()
        await channels.bussiness()
        await channels.buttonStart()
        await channels.login()
    })

    test('customer without digital channels', async ({page}) =>{
        await channels.documentType('CC')
        await channels.documentNumber('1030618791')
        await channels.policyAndTerms()
        await channels.bussiness()
        await channels.buttonStart()
        await channels.identityValidation()
    })
})