 const { test, expect } = require('@playwright/test');

 
test('Pos_Fun_0001 - daily greeting ', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('vanakkam');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('vanakkam');
});


test('Pos_Fun_0002 - Personal state phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type(' naan nallaa irukken');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('naan nallaa irukken ');
});


test('Pos_Fun_0003 - Convert a short request phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.fill('mazhai peygirathu, aanal veyilum irukkirathu');
  await page.keyboard.press('Space');

  // Assert at least one Tamil character appeared
  await expect(inputBox).toHaveValue(/[஀-௿]/);
});





test('Pos_Fun_0004 - Complex sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('  niinga vandhaal naan varuvEn');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain(' niinga vandhaal naan varuvEn');
});

test('Pos_Fun_0005 - Interrogative question', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type(' eppadi irukkinga?');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('eppadi irukkinga?');
});


test('Pos_Fun_0006 -  Imperative command', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type(' inge vanga');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('inge vanga');
});


test('Pos_Fun_0007 - Convert a positive sentence phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type(' nee athai sariyaaha seithaai');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('nee athai sariyaaha seithaai');
});



test('Pos_Fun_0008 - Convert an informal word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.fill('athai poai seidaa');
  await page.keyboard.press('Space');

  // Assert that at least one Tamil character appears
  await expect(inputBox).toHaveValue(/[஀-௿]/);
});



test('Pos_Fun_0009 - Convert a daily language word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type(' naan naalaikku kandy poven');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('naan naalaikku kandy poven');
});


test('Pos_Fun_0010 - Polite request', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  const input = 'thayavu seithu konjam utkaaruNgal';

  await inputBox.fill(input);
  await page.keyboard.press('Space');

  await expect(inputBox).toHaveValue(
    /தயவு|செய்து|உட்காருங்கள்/
  );
});


test('Pos_Fun_0011 - Response phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type(' sari naan seigiren');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('sari naan seigiren');
});

test('Pos_Fun_0012 - Informal slang', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type(' enna machi?');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('enna machi? ');

});test('Pos_Fun_0013 - Convert a multi line word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type(' enakku velai irukku naan poran');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('enakku velai irukku naan poran');
});

test('Pos_Fun_0014 - Convert a  word with puntuation', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type(' Aaha ! Athai maranthuvitten. ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('Aaha ! Athai maranthuvitten. ');
});

test('Pos_Fun_0015 - Convert a multiple space word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type(' Naan  saapida  poran');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('Naan saapida poran');
});


test('Pos_Fun_0016 - Repeated word expressions ', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type(' eru eru ');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('eru eru  ');
});


test('Pos_Fun_0017 - Convert a response word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type(' sari naan seigiren');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('sari naan seigiren ');
});

test('Pos_Fun_0018 - Convert a greeting word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type(' ungaludaya suham eppadi?');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('ungaludaya suham eppadi?');
});

test('Pos_Fun_0019 - Plural noun', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('  pazhangaL sapidunga');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain(' pazhangaL sapidunga ');
});

test('Pos_Fun_0020 - Convert a word without space', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type(' avalukkuellamtherium');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('avalukkuellamtherium');
});

test('Pos_Fun_0021 - Convert a pharagraph word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type(' Nanbargal idaiyil irukkum nambikkai, purithal matrum otrumai kaaranamaaga pala sandhosha tharunangal uruvaagum; kashta nerangalil oruvarukkoruvar thunaiyaaga nindru, indha natpu vaazhkaiyil romba mukkiyamaana idaththai pidikkiradhu.');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('Nanbargal idaiyil irukkum nambikkai, purithal matrum otrumai kaaranamaaga pala sandhosha tharunangal uruvaagum; kashta nerangalil oruvarukkoruvar thunaiyaaga nindru, indha natpu vaazhkaiyil romba mukkiyamaana idaththai pidikkiradhu.');
});

test('Pos_Fun_0022 - Convert a word with name', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type(' enathu nanpan firnas surusuruppanavan.');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('enathu nanpan firnas surusuruppanavan.');
});

test('Pos_Fun_0023 - Convert Greeting conversion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type(' vanakkam eppadi irukka?');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('vanakkam eppadi irukka?');
});

test('Pos_Fun_0024 - Convert Informal phrasing', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type(' dei seekiram vaa');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).not.toContain('dei seekiram vaa ');
});


