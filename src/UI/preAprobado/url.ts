import  { Page } from '@playwright/test';

const url = class  {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
}

export default url