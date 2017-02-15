import { WalletAppPage } from './app.po';

describe('wallet-app App', function() {
  let page: WalletAppPage;

  beforeEach(() => {
    page = new WalletAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('wa works!');
  });
});
