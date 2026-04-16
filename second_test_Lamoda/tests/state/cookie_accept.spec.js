import { test as setup } from '@playwright/test';

setup('accept cookies and save state', async ({ page }) => 
{
    await page.goto('https://lamoda.by');
    
    const accept_button = page.getByRole('button', { name: 'Принять' });
    
    await accept_button.waitFor({ state: 'attached', timeout: 500 }).catch(() => {});

    if (await accept_button.isVisible()) 
    {
        await accept_button.click();
        await page.waitForTimeout(500); 
    }

    await page.context().storageState({ path: '.auth/cookies.json' });
});