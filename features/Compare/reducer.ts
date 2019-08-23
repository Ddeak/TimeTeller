import moment from 'moment';

export interface IStateType {
  difference: string;
  differenceType?: string;
  startDate: Date;
  compareDate: Date;
}

interface IActionType {
  type: string;
  payload: any;
}

interface IActionTypes {
  [key: string]: string;
}

export enum DifferenceTypes {
  Days = 'Days',
  Hours = 'Hours',
  Minutes = 'Minutes',
}

export const initialReducerState = {
  difference: '0',
  differenceType: DifferenceTypes.Days,
  startDate: new Date(),
  compareDate: new Date(),
};

export const ActionTypes: IActionTypes = {
  UpdateDifference: '@Countdown/UpdateDifference',
  UpdateStartDate: '@Countdown/UpdateStartDate',
  UpdateCompareDate: '@Countdown/UpdateCompareDate',
};

export const Actions = {
  setStartDate: (date: Date) => ({
    type: ActionTypes.UpdateStartDate,
    payload: date,
  }),
  setCompareDate: (date: Date) => ({
    type: ActionTypes.UpdateCompareDate,
    payload: date,
  }),
  setDifference: (difference: string) => ({
    type: ActionTypes.UpdateDifference,
    payload: difference,
  }),
};

export const reducer = (state: IStateType, action: IActionType) => {
  switch (action.type) {
    case ActionTypes.UpdateStartDate: {
      const difference = getDiff({ ...state, startDate: action.payload });
      return { ...state, startDate: action.payload, difference };
    }
    case ActionTypes.UpdateCompareDate: {
      const difference = getDiff({ ...state, compareDate: action.payload });
      return { ...state, compareDate: action.payload, difference };
    }
    case ActionTypes.UpdateDifference:
      const difference = getDiff({ ...state, differenceType: action.payload });
      return { ...state, differenceType: action.payload, difference };
    default:
      throw new Error();
  }
};

const getDiff = ({
  differenceType,
  startDate,
  compareDate,
}: IStateType): string => {
  const start = moment(startDate);
  const end = moment(compareDate);
  const duration = moment.duration(end.diff(start));

  switch (differenceType) {
    case DifferenceTypes.Days:
      return `${Math.trunc(duration.asDays())}`;
    case DifferenceTypes.Hours:
      return `${Math.trunc(duration.asHours())}`;
    case DifferenceTypes.Minutes:
      return `${Math.trunc(duration.asMinutes())}`;
    default:
      return `${Math.trunc(duration.asDays())}`;
  }
};
