import { Goal } from '../models/goal.model';
export const GOALS = [
  {
    name: 'Disney trip',
    description: 'Saving for a trip to Disneyland Florida',
    date_target: new Date(2022, 8, 31).toString(),
    date_created: new Date().toString(),
    amount_current: 0.0,
    amount_target: 2000.0,
    flag_achieved: false,
  },

  {
    name: 'PS5',
    description: 'Playstation 5',
    date_target: new Date(2022, 8, 31).toString(),
    date_created: new Date().toString(),
    amount_current: 0.0,
    amount_target: 500.0,
    flag_achieved: false,
  },
];
