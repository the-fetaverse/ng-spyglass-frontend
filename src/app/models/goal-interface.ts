export interface GoalInterface {
  goal_id: number;
  name: string;
  description: string;
  username: string;
  date_created: string;
  date_target: string;
  amount_current: number;
  amount_target: number;
  flag_achieved: boolean;
}
