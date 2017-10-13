import { UpgradedCarnivalPage } from './app.po';

describe('upgraded-carnival App', () => {
  let page: UpgradedCarnivalPage;

  beforeEach(() => {
    page = new UpgradedCarnivalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
