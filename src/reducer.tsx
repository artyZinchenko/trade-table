import { State } from './types';

export type Action =
  | {
      type: 'TICK';
      payload: Date;
    }
  | {
      type: 'UPDATE';
      payload: {
        timePassed: number;
        timeAtStart: Date;
        user: number;
      };
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TICK': {
      return {
        ...state,
        timePassed: Math.round(
          action.payload.getTime() - state.timeAtStart.getTime()
        ),
      };
    }
    case 'UPDATE': {
      return {
        ...state,
        timePassed: action.payload.timePassed,
        timeAtStart: action.payload.timeAtStart,
        user: action.payload.user,
      };
    }
    default:
      return state;
  }
};

export const updateTime = (
  timePassed: number,
  timeAtStart: Date,
  user: number
): Action => {
  return {
    type: 'UPDATE',
    payload: {
      timePassed: timePassed,
      timeAtStart: timeAtStart,
      user: user,
    },
  };
};

export const reduceTime = (dateNow: Date): Action => {
  return {
    type: 'TICK',
    payload: dateNow,
  };
};
