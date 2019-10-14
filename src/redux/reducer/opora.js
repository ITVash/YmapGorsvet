const initialState = {
  items: [],
  getCurrentID: null
};
export default ( state = initialState, { type, payload } ) => {
  switch (type) {
    case 'GET_OPORA':
      return {
        ...state,
        items: payload
      };
    case 'GET_CURRENT_ID':
      return {
        ...state,
        getCurrentID: payload
      };
    default:
      return state;
  }
}