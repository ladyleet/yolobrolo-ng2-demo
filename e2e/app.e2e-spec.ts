import { YolobroloDemoNg2Page } from './app.po';

describe('yolobrolo-demo-ng2 App', function() {
  let page: YolobroloDemoNg2Page;

  beforeEach(() => {
    page = new YolobroloDemoNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
