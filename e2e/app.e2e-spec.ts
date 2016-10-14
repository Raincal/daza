import { DazaNg2Page } from './app.po';

describe('daza-ng2 App', function() {
  let page: DazaNg2Page;

  beforeEach(() => {
    page = new DazaNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
