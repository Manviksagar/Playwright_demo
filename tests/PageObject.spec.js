import {test, expect} from '@playwright/test';
import {Login} from './Pages/Login';


test('first test',async ({page})=> {

    const log= new Login(page);
    await log.login_url();
    await log.login_with_credentials('Admin','admin123')


})
