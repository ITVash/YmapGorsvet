const initialState = {
  items: [],
  currentID: null,
  infoCoup: []
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
        currentID: payload
      };
      case 'UPP_OPORA':
        return {
          ...state,
          items: state.items.filter(item => {
            if (item.ID === state.currentID) {
              return Object.assign(item, payload)
            }
            return item;
          })
        };
      case 'GET_COUP_INFO':
        return {
          ...state,
          infoCoup: payload
        };
    default:
      return state;
  }
}