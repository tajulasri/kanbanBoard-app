import { KanbanBoardAppPage } from './app.po';

describe('kanban-board-app App', () => {
  let page: KanbanBoardAppPage;

  beforeEach(() => {
    page = new KanbanBoardAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
