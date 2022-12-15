export interface User {
  name: string;
  higherTechStandards: boolean;
  devTime: string;
  paymentConditions: string;
  cost: string;
  guarantee: string;
}

export interface TradeObject {
  name: string;
  date: Date;
}

export interface Timer {
  timestamp: Date;
  timeLimit: number;
}

export type State = {
  timePassed: number;
  timeAtStart: Date;
  user: number;
};

export type ObjectKey = keyof User;
