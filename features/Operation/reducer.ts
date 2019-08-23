export interface IStateType {
  startDate: Date;
  operation: string;
}

interface IActionType {
  type: string;
  payload: any;
}

interface IActionTypes {
  [key: string]: string;
}

export enum DifferenceTypes {
  Months = 'Months',
  Days = 'Days',
  Hours = 'Hours',
  Minutes = 'Minutes',
  Seconds = 'Seconds',
}

export const initialReducerState = {
  startDate: new Date(),
  operation: 'Add',
};

export const ActionTypes: IActionTypes = {
  UpdateOperation: '@Operation/UpdateOperation',
  UpdateStartDate: '@Operation/UpdateStartDate',
};

export const Actions = {
  setStartDate: (date: Date) => ({
    type: ActionTypes.UpdateStartDate,
    payload: date,
  }),
};

export const reducer = (state: IStateType, action: IActionType) => {
  switch (action.type) {
    case ActionTypes.UpdateStartDate:
      return { ...state, startDate: action.payload };
    default:
      throw new Error();
  }
};
