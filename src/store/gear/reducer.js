import * as types from './types';
import ActionStatus from '../../constants/action-status';

const initialState = {
  gear: [],
  status: ActionStatus.IDLE
};

export default function gear(state = initialState, action) {
  switch (action.type) {
    case types.ADD_NEW_GEAR_SUCESS: {
      return {
        ...state,
        gear: [...state.gear, action.payload],
        status: ActionStatus.SUCCEDED
      };
    }

    case types.GET_USER_GEAR_SUCESS: {
      return {
        ...state,
        gear: action.payload,
        status: ActionStatus.SUCCEDED
      };
    }

    case types.GET_USER_ACTIVE_GEAR_SUCESS: {
      return {
        ...state,
        gear: action.payload,
        status: ActionStatus.SUCCEDED
      };
    }

    case types.SET_ACTIVE_GEAR_SUCESS: {
      const updatedGear = state.gear.map(bike => {
        if (bike._id === action.payload._id) return action.payload;
        const unactive = {
          ...bike
        };
        unactive.active = false;
        return unactive;
      });

      return {
        ...state,
        gear: updatedGear,
        status: ActionStatus.SUCCEDED
      };
    }

    case types.DELETE_USER_GEAR_SUCESS: {
      const updatedGear = state.gear.filter(bike => bike._id !== action.payload._id);
      return {
        ...state,
        gear: updatedGear,
        status: ActionStatus.SUCCEDED
      };
    }

    case types.EDIT_USER_GEAR_SUCESS: {
      console.log(action.payload)
      const updatedGear = state.gear.map(bike => {
        if (bike._id === action.payload._id) return action.payload;
        return bike;
      });

      return {
        ...state,
        gear: updatedGear,
        status: ActionStatus.SUCCEDED
      };
    }

    case types.EDIT_USER_GEAR_REQUEST:
    case types.DELETE_USER_GEAR_REQUEST:
    case types.SET_ACTIVE_GEAR_REQUEST:
    case types.GET_USER_GEAR_REQUEST:
    case types.GET_USER_ACTIVE_GEAR_REQUEST:
    case types.ADD_NEW_GEAR_REQUEST: {
      return {
        ...state,
        status: ActionStatus.LOADING
      }
    }

    case types.EDIT_USER_GEAR_FAILURE:
    case types.DELETE_USER_GEAR_FAILURE:
    case types.SET_ACTIVE_GEAR_FAILURE:
    case types.GET_USER_GEAR_FAILURE:
    case types.GET_USER_ACTIVE_GEAR_FAILURE:
    case types.ADD_NEW_GEAR_FAILURE: {
      return {
        ...state,
        status: ActionStatus.FAILED
      }
    }

    default: {
      return state;
    }
  }
}