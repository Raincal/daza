import { DazaNg4Page } from './app.po';

describe('daza-ng4 App', () => {
  let page: DazaNg4Page;

  beforeEach(() => {
    page = new DazaNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
