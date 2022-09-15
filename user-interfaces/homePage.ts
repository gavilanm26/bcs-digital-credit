import  { Locator, Page } from '@playwright/test';

export class HomePage {
    public readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async visit() {
        await this.page.goto('/credito/');
    }
}