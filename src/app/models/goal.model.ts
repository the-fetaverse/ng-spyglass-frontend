// export class Goal {
//   // Fields
//   name: string;
//   description: string;
//   date_created: string;
//   date_target: string;
//   amount_current: number;
//   amount_target: number;
//   flag_achieved: boolean;

//   // Constructor
//   constructor(
//     name: string,
//     description: string,
//     date_created: string,
//     date_target: string,
//     amount_current: number,
//     amount_target: number,
//     flag_achieved: boolean
//   ) {
//     this.name = name;
//     this.description = description;
//     this.date_created = date_created;
//     this.date_target = date_target;
//     this.amount_current = amount_current;
//     this.amount_target = amount_target;
//     this.flag_achieved = flag_achieved;
//   }
// }

export interface Goal {
  name: string;
  description: string;
  date_created: string;
  date_target: string;
  amount_current: number;
  amount_target: number;
  flag_achieved: boolean;
}
