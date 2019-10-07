const initialState = {
  items:[],
  currentID: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_COUP':
      return {
        ...state,
        items: payload
      };
    case 'ADD_COUP':
      return {
        ...state,
        items: [
          ...state,
          payload
        ]
      };
    case 'GET_GURRENT_ID':
      return {
        ...state,
        currentID: payload
      };
  
    default:
      return state;
  }
}