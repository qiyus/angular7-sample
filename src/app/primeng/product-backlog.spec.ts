import {ProductBacklog} from './product-backlog';

describe('ProductBacklog', () => {
  it('should create an instance', () => {
    const backlog: ProductBacklog = {
      estimate: undefined, id: undefined, priority: undefined, release: undefined, status: undefined, userStory: undefined

    };
    expect(backlog).toBeTruthy();
  });
});
