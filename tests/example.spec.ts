import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('makeup first test', async({page}) => { 
  await page.goto('https://makeup.com.ua/ua/'); 
  
  await expect(page.getByRole('link', { name: 'MAKEUP: інтернет-магазин косметики та ароматів' })).toBeVisible(); 
  await expect(page.getByRole('link', { name: 'Парфумерія', exact: true })).toBeVisible(); 
  await expect(page.locator('.search-button').first()).toBeVisible(); 
  await expect(page.getByRole('link', { name: 'Макіяж', exact: true })).toBeVisible(); 
  await expect(page.locator('.header-office')).toBeVisible(); 
  await expect(page.locator('.header-basket')).toBeVisible(); 
 }); 
  
 test('zakazUA metro test', async({page}) => { 
 await page.goto('https://zakaz.ua/uk/'); 
 await page.getByRole('link', { name: 'METRO' }).click(); 
  
 await page.getByRole('link', { name: 'Вигідні пропозиції Вигідні пропозиції' }).isVisible(); 
 await page.getByRole('link', { name: 'Молочне, яйця, сир Молочне, яйця, сир ' }).isVisible(); 
 await page.getByRole('link', { name: 'Фрукти та овочі Фрукти та овочі ' }).isVisible(); 
 await page.getByRole('link', { name: 'Солодощі Солодощі ' }).isVisible(); 
 await page.getByRole('button', { name: ' Оберіть адресу доставки, щоб дізнатися час доставки' }).isVisible(); 
 }); 
  
 test('zakazUA winetime test', async({page}) => { 
   await page.goto('https://zakaz.ua/uk/'); 
   await page.getByRole('link', { name: 'WINETIME' }).click(); 
  
   await page.getByRole('link', { name: 'Акційні пропозиції Акційні пропозиції' }).isVisible(); 
   await page.getByRole('link', { name: 'ТОП 100 від Winetime ТОП 100' }).isVisible(); 
   await page.getByTestId('categories_menu_button').isVisible(); 
   await page.getByTestId('searchBoxInput').isVisible(); 
   await page.getByRole('button', { name: ' Підбірка для мене' }).isVisible(); 
  
   await page.getByRole('link', { name: 'Акційні пропозиції Акційні пропозиції' }).click; 
  
   await page.getByRole('heading', { name: 'Акційні пропозиції' }).isVisible(); 
   }); 
  
  
   test('zakazUA novus test', async({page}) => { 
     await page.goto('https://zakaz.ua/uk/'); 
     await page.getByRole('link', { name: 'NOVUS' }).click(); 
    
     await page.getByRole('link', { name: 'Акційні пропозиції Акційні пропозиції' }).isVisible(); 
     await page.getByRole('link', { name: 'Спецпропозиція Спецпропозиція ' }).isVisible(); 
     await page.getByRole('link', { name: 'Фрукти та овочі Фрукти та овочі ' }).isVisible(); 
     await page.getByTestId('categories_menu_button').isVisible(); 
     await page.getByRole('button', { name: ' Оберіть адресу доставки, щоб дізнатися час доставки' }).isVisible(); 
    
     }); 
    
     test('zakazUA varus test', async({page}) => { 
       await page.goto('https://zakaz.ua/uk/'); 
       await page.getByRole('link', { name: 'VARUS' }).click(); 
      
       await page.getByRole('link', { name: 'Акційні пропозиції Акційні пропозиції' }).isVisible(); 
       await page.getByTestId('searchBoxInput').isVisible(); 
       await page.getByRole('link', { name: 'Молочне, яйця, сир Молочне, яйця, сир ' }).isVisible(); 
       await page.getByRole('link', { name: ' Мої замовлення' }).isVisible(); 
       await page.getByRole('link', { name: ' Акції магазину' }).isVisible(); 
      
       });