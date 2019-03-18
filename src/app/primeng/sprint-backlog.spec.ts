import { SprintBacklog } from './sprint-backlog';

describe('SprintBacklog', () => {
  it('should create an instance', () => {
    const backlog: SprintBacklog = {
      estimate: undefined, id: undefined, priority: undefined, release: undefined, status: undefined, task: [], userStory: undefined

    };
    expect(backlog).toBeTruthy();
  });
});
