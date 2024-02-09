import { expect, type Locator, type Page } from '@playwright/test';

export class MakeUpLandingPage {
    readonly page: Page;
    readonly getMakeUpLogo: Locator;
    readonly getParfumeTab: Locator;
    readonly getSearchButton: Locator;
    readonly getMakeUpTab: Locator;
    readonly getOfficeTab: Locator;
    readonly getBaskedTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getMakeUpLogo = page.getByRole('link', { name: 'MAKEUP: інтернет-магазин косметики та ароматів' });
        this.getParfumeTab = page.getByRole('link', { name: 'Парфумерія', exact: true });
        this.getSearchButton = page.locator('.search-button').first();
        this.getMakeUpTab = page.getByRole('link', { name: 'Макіяж', exact: true });
        this.getOfficeTab = page.locator('.header-office');
        this.getBaskedTab = page.locator('.header-basket');

    }

    async goto() {
        await this.page.goto('https://makeup.com.ua/ua/');
    }
}