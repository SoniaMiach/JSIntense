import { expect } from '@playwright/test';
import { ZakazLandingPage, MetroLandingPage, WineTimeLandingPage, NovusLandingPage, VarusLandingPage } from '../page-objects/zakaz-landing-page';
import { MakeUpLandingPage } from '../page-objects/makeup-landing-page';
import{test} from "../fixtures/fixtures"

test('makeup first test', async ({ page }) => {
  let makeupLending = new MakeUpLandingPage(page);
  await makeupLending.goto();

  await expect(makeupLending.getMakeUpLogo).toBeVisible();
  await expect(makeupLending.getMakeUpTab).toBeVisible();
  await expect(makeupLending.getOfficeTab).toBeVisible();
  await expect(makeupLending.getParfumeTab).toBeVisible();
  await expect(makeupLending.getBaskedTab).toBeVisible();
  await expect(makeupLending.getSearchButton).toBeVisible();
});

test('zakazUA metro test', async ({ page, zakazLanding , context}) => {
  
  const pagePromise = context.waitForEvent('page');
  await zakazLanding.getShopTipeMetro.click();
  const newPage = await pagePromise;
  await newPage.waitForLoadState();

  let metroLending = new MetroLandingPage(newPage)

  await metroLending.metroPage();
  
  await expect(metroLending.getOffers).toBeVisible();
  await expect(metroLending.getMilkProducts).toBeVisible();
  await expect(metroLending.getFrutsProducts).toBeVisible();
  await expect(metroLending.getSweetsProduct).toBeVisible();
  await expect(metroLending.getDeliverTo).toBeVisible();
});

test('zakazUA winetime test', async ({ page, zakazLanding, context }) => {
  const pagePromise = context.waitForEvent('page');
  await zakazLanding.getShopTipeWineTime.click();
  const newPage = await pagePromise;
  await newPage.waitForLoadState();

  let wineTimeLending = new WineTimeLandingPage(newPage)
 
  await wineTimeLending.winetimePage();

  await expect(wineTimeLending.getMenuCategories).toBeVisible();
  await expect(wineTimeLending.getOfferProposition).toBeVisible();
  await expect(wineTimeLending.getTop100).toBeVisible();
  await expect(wineTimeLending.getMyPrepositions).toBeVisible();
  await expect(wineTimeLending.getSearchMenu).toBeVisible();

  await wineTimeLending.getOfferProposition.click();
  await expect(wineTimeLending.getOfferHeader).toBeVisible();
});


test('zakazUA novus test', async ({ page }) => {
  let zakazLending = new ZakazLandingPage(page);
  let novusLending = new NovusLandingPage(page);
  await zakazLending.goto();
  await zakazLending.getShopTipeNovus.click();
  await novusLending.goto();

  await expect(novusLending.getCategories).toBeVisible();
  await expect(novusLending.getDelivery).toBeVisible();
  await expect(novusLending.getFrutProducts).toBeVisible();
  await expect(novusLending.getOfferProposition).toBeVisible();
  await expect(novusLending.getSpecProb).toBeVisible();

});

test('zakazUA varus test', async ({ page }) => {
  let zakazLending = new ZakazLandingPage(page);
  let varusLending = new VarusLandingPage(page);
  await zakazLending.goto();
  await zakazLending.getShopTipeVarus.click();
  await varusLending.goto();

  await expect(varusLending.getOfferProposition).toBeVisible();
  await expect(varusLending.getSearch).toBeVisible();
  await expect(varusLending.getMilkProducts).toBeVisible();
  await expect(varusLending.getOfferProposition).toBeVisible();
  await expect(varusLending.getMyOrders).toBeVisible();
  await expect(varusLending.getSale).toBeVisible();

});