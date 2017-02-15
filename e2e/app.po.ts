import { browser, element, by } from 'protractor';

export class WalletAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wa-root h1')).getText();
  }
}
