import  { Page } from '@playwright/test';

const urlUI = class  {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}

export default urlUI