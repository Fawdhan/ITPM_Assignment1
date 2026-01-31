const { test, expect } = require('@playwright/test');

test('Pos_UI_0001 - greeting word', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  await inputBox.type('ungaludaiya suham epdi?');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  expect(value).toContain('உங்களுடைய சுகம் எப்படி?');
});
