export interface IStateType {
  startDate: Date;
  compareDate?: Date;
}

interface IActionType {
  type: string;
  payload: any;
}

interface IActionTypes {
  [key: string]: string;
}

export const initialReducerState = {
  startDate: new Date(),
  compareDate: null,
};

export const ActionTypes: IActionTypes = {
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
};

export const reducer = (state: IStateType, action: IActionType) => {
  switch (action.type) {
    case ActionTypes.UpdateStartDate:
      return { ...state, startDate: action.payload };
    case ActionTypes.UpdateCompareDate:
      return { ...state, compareDate: action.payload };
    default:
      throw new Error();
  }
};
