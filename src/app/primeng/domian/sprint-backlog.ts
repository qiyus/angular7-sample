import {Task} from './task';
import {ProductBacklog} from './product-backlog';

export interface SprintBacklog extends ProductBacklog {
  task: Task[];
}
