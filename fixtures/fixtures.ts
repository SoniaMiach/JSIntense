import { test as baseTest, expect, chromium, BrowserContext } from '@playwright/test';
import { ZakazLandingPage } from '../page-objects/zakaz-landing-page';

type TestType ={
    zakazLanding: ZakazLandingPage
   
}

export const test = baseTest.extend<TestType>({

    zakazLanding: async ({page}, use, testInfo) =>{
        let zakazLanding = new ZakazLandingPage(page);

        zakazLanding.goto();

        await page.waitForLoadState();
        await zakazLanding.loginByPhone("+380674780240", "ezV!bVzHdek95n2")
      
        await use(zakazLanding);

    }

})
