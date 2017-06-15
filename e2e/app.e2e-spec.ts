import { NicAuthPage } from './app.po';

describe('nic-auth App', () => {
  let page: NicAuthPage;

  beforeEach(() => {
    page = new NicAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
