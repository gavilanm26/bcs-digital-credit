import  { Page } from '@playwright/test';

const URL = class  {
  public readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto('/credito');
  }
}

export default URL