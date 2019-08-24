import moment from 'moment';

export interface IStateType {
  startDate: Date;
  operation: OperationTypes;
  value?: string;
  targetDate: Date | null;
  timeType: TimeTypes;
}

interface IActionType {
  type: string;
  payload: any;
}

interface IActionTypes {
  [key: string]: string;
}

export enum OperationTypes {
  Add = 'Add',
  Subtract = 'Subtract',
}

export enum TimeTypes {
  Months = 'months',
  Days = 'days',
  Hours = 'hours',
  Minutes = 'minutes',
  Seconds = 'seconds',
}

export const initialReducerState = {
  startDate: new Date(),
  operation: OperationTypes.Add,
  value: '',
  targetDate: null,
  timeType: TimeTypes.Days,
};

export const ActionTypes: IActionTypes = {
  UpdateOperation: '@Operation/UpdateOperation',
  UpdateStartDate: '@Operation/UpdateStartDate',
  UpdateValue: '@Operation/UpdateValue',
  UpdateTimeType: '@Operation/UpdateTimeType',
};

export const Actions = {
  setStartDate: (date: Date) => ({
    type: ActionTypes.UpdateStartDate,
    payload: date,
  }),
  setOperation: (operation: OperationTypes) => ({
    type: ActionTypes.UpdateOperation,
    payload: operation,
  }),
  setValue: (value: string) => ({
    type: ActionTypes.UpdateValue,
    payload: value,
  }),
  setTimeType: (type: TimeTypes) => ({
    type: ActionTypes.UpdateTimeType,
    payload: type,
  }),
};

export const reducer = (state: IStateType, action: IActionType) => {
  switch (action.type) {
    case ActionTypes.UpdateStartDate: {
      if (!state.value) return { ...state, startDate: action.payload };
      const targetDate = calculateDate(
        action.payload,
        state.value,
        state.operation,
        state.timeType,
      );
      return { ...state, startDate: action.payload, targetDate };
    }
    case ActionTypes.UpdateOperation: {
      if (!state.value) return { ...state, operation: action.payload };
      const targetDate = calculateDate(
        state.startDate,
        state.value,
        action.payload,
        state.timeType,
      );
      return { ...state, operation: action.payload, targetDate };
    }
    case ActionTypes.UpdateValue: {
      if (!action.payload)
        return { ...state, value: action.payload, targetDate: null };

      const targetDate = calculateDate(
        state.startDate,
        action.payload,
        state.operation,
        state.timeType,
      );
      return { ...state, value: action.payload, targetDate };
    }
    case ActionTypes.UpdateTimeType: {
      if (!state.value) return { ...state, timeType: action.payload };
      const targetDate = calculateDate(
        state.startDate,
        state.value,
        state.operation,
        action.payload,
      );
      return { ...state, timeType: action.payload, targetDate };
    }
    default:
      throw new Error();
  }
};

const calculateDate = (
  date: Date,
  value: string,
  operation: OperationTypes,
  timeType: TimeTypes,
): Date | null => {
  switch (operation) {
    case OperationTypes.Add:
      return moment(date)
        .add(value, timeType)
        .toDate();
    case OperationTypes.Subtract:
      return moment(date)
        .subtract(value, timeType)
        .toDate();
    default:
      return null;
  }
};
