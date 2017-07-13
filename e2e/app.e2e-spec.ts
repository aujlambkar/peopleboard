import { PeopleboardPage } from './app.po';

describe('peopleboard App', () => {
  let page: PeopleboardPage;

  beforeEach(() => {
    page = new PeopleboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
