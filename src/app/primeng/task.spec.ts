import {Task} from './task';

describe('Task', () => {
  it('should create an instance', () => {
    const task: Task = {
      actual: undefined,
      description: undefined,
      developerId: undefined,
      estimate: undefined,
      id: undefined,
      title: undefined,
      priority: 10};
    expect(task.priority).toBeTruthy();
  });
});
