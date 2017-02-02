import { Dashboardang2Page } from './app.po';

describe('dashboardang2 App', function() {
  let page: Dashboardang2Page;

  beforeEach(() => {
    page = new Dashboardang2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
