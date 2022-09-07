import { GoalInterface } from './goal-interface';

export class Goal implements GoalInterface {
  // Fields
  goal_id: number;
  name: string;
  description: string;
  username: string;
  date_created: string;
  date_target: string;
  amount_current: number;
  amount_target: number;
  flag_achieved: boolean;

  // Constructor
  constructor(
    goal_id: number,
    name: string,
    description: string,
    username: string,
    date_created: string,
    date_target: string,
    amount_current: number,
    amount_target: number,
    flag_achieved: boolean
  ) {
    this.goal_id = goal_id;
    this.name = name;
    this.description = description;
    this.username = username;
    this.date_created = date_created;
    this.date_target = date_target;
    this.amount_current = amount_current;
    this.amount_target = amount_target;
    this.flag_achieved = flag_achieved;
  }
}
