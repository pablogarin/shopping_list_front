export const RESET_DATA = 'reset-data';
export const SET_DATA = 'set-data';
export const SET_NAME = 'set-name';
export const SET_QUANTITY = 'set-quantity';

const itemReducer = (state, action) => {
  switch(action.type) {
    case RESET_DATA: {
      return { ...state, item: null };
    }
    case SET_DATA: {
      const newState = {
        ...state,
        item: action.payload
      }
      return newState;
    }
    case SET_QUANTITY: {
      const newState = {
        ...state,
        item: {
          ...state.item,
          quantity: action.payload
        }
      };
      return newState;
    }
    case SET_NAME: {
      const newState = {
        ...state,
        item: {
          ...state.item,
          name: action.payload
        }
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default itemReducer;