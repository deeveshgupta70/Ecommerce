import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../actions";

const products_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, sidebarOpen: true };
    case SIDEBAR_CLOSE:
      return { ...state, sidebarOpen: false };
    default:
      throw new Error(`"${action.type}" doesn't match action type`);
  }
};

export default products_reducer;
