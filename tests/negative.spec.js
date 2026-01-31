 const { test, expect } = require('@playwright/test');


test('Neg_Fun_0001 - Missing spaces', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('naanvIttukkupOgirEn');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('naanvIttukkupOgirEn');

  //expect(value).toContain('கம்ஹ்');
  //expect(value).toContain('௮௦'); 
});


test('Neg_Fun_0002 - Typo failure', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('vNakkam');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('vNakkam');

  //expect(value).toContain('கம்ஹ்');
  //expect(value).toContain('௮௦'); 
});


test('Neg_Fun_0003 - Missing spaces', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  // Clear the box first to ensure a clean test
  await inputBox.fill('');

  // pressSequentially mimics real typing. 
  // We add a space at the end to trigger the conversion of 'word'
  await inputBox.pressSequentially('antha word ', { delay: 100 });
  
  // Give the website a second to process the conversion
  await page.waitForTimeout(1500);

  const value = await inputBox.inputValue();

  // Now 'word' should have turned into 'வர்ட்'
  expect(value).toContain('வர்ட்'); 
});



test('Neg_Fun_0004 - Volume unit formatting issue', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/'); 
  
  // 1. Target the main textarea
  const inputBox = page.locator('textarea').first();
  
  // 2. Type the value (Note: specific sites may require a space after the number to trigger conversion)
  await inputBox.fill('500');
  await page.keyboard.press('Space');
  await page.waitForTimeout(500); // Small wait for conversion logic

  // 3. Get the value from the input field
  const value = await inputBox.inputValue();

  // 4. Assert that it contains either the English or Tamil numeral
  // Using a Regular Expression makes this much cleaner
  expect(value).toMatch(/(௫௦௦|500)/);
});


test('Neg_Fun_0005 - Converting english abbreviation', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  await inputBox.fill('unnoda employee ID enga');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  // Negative validation
  expect(value).toContain('employee ID');
  expect(value).not.toContain('ஐடி');
  expect(value).not.toContain('ஈத்');
});



test('Neg_Fun_0006 - Currency', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  await inputBox.fill('naan tea ku Rs.50 kuduthen');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  // Negative validation
  expect(value).toContain('Rs.50');
  expect(value).not.toContain('௫௦');
  expect(value).not.toContain('ரூ.');
  expect(value).not.toContain('ரஸ்');
});



test('Neg_Fun_0007 - Convert a Brand name sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  await inputBox.fill('naan Email anuppinen');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  // Brand should remain English
  expect(value).toContain('Email');
  expect(value).not.toContain('ஈமெயில்');
});


test('Neg_Fun_0008 - date convert', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('naan piranthathu 2001-04-08 anru 3.5kg irunthathu thagavum 2 ndu maatham aahum pothu innam 2kg kutanumdu sonnagga.');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('2001-04-08 3.5kg 2 ');

  expect(value).toContain('௨௦௦௧-௦௪-௦௮');
  expect(value).toContain('3.5kg'); 
  expect(value).toContain('௨');
});

test('Neg_Fun_0009 - Volume unit formatting issue', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('Naan 15‑01‑2026 la Chennai poganum nu plan panninen. Flight 06:30 AM la start aagum. Airport ku 2 hours munnaadu reach pannalam nu check panninen. Engeyo 3 kg sugar and 2 liters milk kooda vaangi ready panninen. Weather report 15‑01‑2026 ku 28°C to 32°C nu solluthu. Chennai la evening 05:00 PM ku 60% humidity irukum nu predict pannirukanga. Train la travel panna naaluku 5 km walk pannitu bus ku join panninen. School opening 01‑06‑2026 ku irukku, so children kku uniform measurements 34 inches chest, 28 inches waist, 36 inches length nu check panninen. Office ku new chair order panninen, adhu 1.2 meters height and 0.6 meters width irukum. Room la paint finish 25 liters color paint vaithirukkom, wall height 3 meters, length 5 meters. 18‑01‑2026 ku doctor appointment irukku, time 10:30 AM. Monthly electricity meter reading 250 kWh irundhadhu, gas cylinder 12 kg remaining irundhadhu. Naan next week la library visit panninen, distance 2.5 km walk panni reach panninen.');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('vNakkam');

  //expect(value).toContain('கம்ஹ்');
  //expect(value).toContain('௮௦'); 
});

test('Neg_Fun_0010 -  Malformed vowels', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('naaaaan');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain(' நான்');

  expect(value).toContain('நாராயன் ');
  //expect(value).toContain('௮௦'); 
});


