export const ADD_ITEM = "add-item";
export const UPDATE_ITEM = "update-item";
export const SET_LIST = "set-list";
export const DELETE_ITEM = "delete-item"
export const ADD_PRODUCT = "add-product";
export const UPDATE_PRODUCT = "update-product";
export const SET_PRODUCT_LIST = "set-product-list";
export const DELETE_PRODUCT = "delete-product"

export const shoppingItemReducer = (state, action) => {
  switch(action.type) {
    case ADD_PRODUCT: {
      const items = [
        ...state.items.filter(item => item.id !== action.payload.id),
        action.payload
      ];
      return { ...state, items }
    }
    case UPDATE_PRODUCT: {
      const items = [
        ...state.items.filter(item => item.id !== action.payload.id),
        action.payload
      ]
      return { ...state, items }
    }
    case SET_PRODUCT_LIST: {
      const items = action.payload;
      return { ...state, items }
    }
    case DELETE_PRODUCT: {
      const items = state.items.filter(item => item.id !== action.payload);
      return { ...state, items }
    }
    case SET_LIST: {
      const list = action.payload;
      return { ...state, list }
    }
    case ADD_ITEM: {
      const list = [
        ...state.list.filter(item => item.id !== action.payload.id),
        action.payload
      ];
      return { ...state, list }
    }
    case UPDATE_ITEM: {
      const list = [
        ...state.list.filter(item => item.id !== action.payload.id),
        action.payload
      ]
      return { ...state, list }
    }
    case DELETE_ITEM: {
      const list = state.list.filter(item => item.id !== action.payload);
      return { ...state, list }
    }
    default:
      return state
  }
};
