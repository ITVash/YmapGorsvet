const initialState = {
  items: []
};
export default ( state = initialState, { type, payload } ) => {
  switch (type) {
    case 'GET_OPORA':
      return {
        ...state,
        items: payload
      };
    default:
      return state;
  }
}