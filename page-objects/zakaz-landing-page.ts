import { expect, type Locator, type Page } from '@playwright/test';

export class ZakazLandingPage {
    readonly page: Page;
    readonly getShopTipeMetro: Locator;
    readonly getShopTipeWineTime: Locator;
    readonly getShopTipeNovus: Locator;
    readonly getShopTipeVarus: Locator;
    readonly getLoginButton: Locator;
    readonly getPhoneForm: Locator;
    readonly getPasswordForm: Locator;
    readonly getSubmitButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.getShopTipeMetro = page.getByRole('link', { name: 'METRO' });
        this.getShopTipeWineTime = page.locator('//img[@alt="WINETIME"]');
        this.getShopTipeNovus = page.getByRole('link', { name: 'NOVUS' });
        this.getShopTipeVarus = page.getByRole('link', { name: 'VARUS' });
        this.getLoginButton = page.getByTestId('login-button');
        this.getPhoneForm = page.locator('//input[@class="form-control jsx-2736456830"]');
        this.getPasswordForm = page.locator('//input[@type = "password"]');
        this.getSubmitButton = page.locator('//button[@data-marker="Submit"]');
    }

    async goto() {
        await this.page.goto('https://zakaz.ua/uk/');
    }

    async loginByPhone(phone: string, password: string){
        await this.getLoginButton.click();
        await this.getPhoneForm.click();
        await this.getPhoneForm.fill(phone);
        await this.getPasswordForm.click();
        await this.getPasswordForm.fill(password);
        await this.getSubmitButton.click();
    }
}

export class MetroLandingPage {
    readonly page: Page;
    readonly getOffers: Locator;
    readonly getMilkProducts: Locator;
    readonly getFrutsProducts: Locator;
    readonly getSweetsProduct: Locator;
    readonly getDeliverTo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getOffers = page.getByRole('link', { name: 'Акційні пропозиції Акційні пропозиції' });
        this.getMilkProducts = page.getByRole('link', { name: 'Молочне, яйця, сир Молочне, яйця, сир ' });
        this.getFrutsProducts = page.getByRole('link', { name: 'Фрукти та овочі Фрукти та овочі ' });
        this.getSweetsProduct = page.getByRole('link', { name: 'Солодощі Солодощі ' });
        this.getDeliverTo = page.getByRole('button', { name: ' Оберіть адресу доставки, щоб дізнатися час доставки' });
    }

    async metroPage() {
        await this.page.waitForLoadState();
    }
}

export class WineTimeLandingPage {
    readonly page: Page;
    readonly getOfferProposition: Locator;
    readonly getTop100: Locator;
    readonly getMenuCategories: Locator;
    readonly getSearchMenu: Locator;
    readonly getMyPrepositions: Locator;
    readonly getOfferHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getOfferProposition = page.getByRole('link', { name: 'Акційні пропозиції Акційні пропозиції' });
        this.getTop100 = page.getByRole('link', { name: 'ТОП 100 від Winetime ТОП 100' });
        this.getMenuCategories = page.getByTestId('categories_menu_button');
        this.getSearchMenu = page.getByTestId('searchBoxInput');
        this.getOfferHeader = page.getByRole('heading', { name: 'Акційні пропозиції' });
        this.getMyPrepositions = page.locator('//a[@data-marker="orders widget"]').first();
    }

    async winetimePage() {
        await this.page.waitForLoadState();
    }
}

export class NovusLandingPage {
    readonly page: Page;
    readonly getOfferProposition: Locator;
    readonly getSpecProb: Locator;
    readonly getFrutProducts: Locator;
    readonly getCategories: Locator;
    readonly getDelivery: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getOfferProposition = page.getByRole('link', { name: 'Акційні пропозиції Акційні пропозиції' });
        this.getSpecProb = page.getByRole('link', { name: 'Спецпропозиція Спецпропозиція ' });
        this.getFrutProducts = page.getByRole('link', { name: 'Фрукти та овочі Фрукти та овочі ' });
        this.getCategories = page.getByTestId('categories_menu_button');
        this.getDelivery = page.getByRole('button', { name: ' Оберіть адресу доставки, щоб дізнатися час доставки' });
    }

    async goto() {
        await this.page.goto('https://novus.zakaz.ua/uk/');
    }
}

export class VarusLandingPage {
    readonly page: Page;
    readonly getOfferProposition: Locator;
    readonly getSearch: Locator;
    readonly getMilkProducts: Locator;
    readonly getMyOrders: Locator;
    readonly getSale: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getOfferProposition = page.getByRole('link', { name: 'Акційні пропозиції Акційні пропозиції' });
        this.getSearch = page.getByTestId('searchBoxInput');
        this.getMilkProducts = page.getByRole('link', { name: 'Молочне, яйця, сир Молочне, яйця, сир ' });
        this.getMyOrders = page.getByRole('link', { name: ' Мої замовлення' });
        this.getSale = page.getByRole('link', { name: ' Акції магазину' });
    }

    async goto() {
        await this.page.goto('https://varus.zakaz.ua/uk/');
    }
}