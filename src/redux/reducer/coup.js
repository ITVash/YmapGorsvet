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
          ...state.items,
          payload
        ]
      };
      case 'UPP_COUP':
        return {
          ...state,
          items: state.items.filter(o => {
            if (o.ID === state.currentID) {
              console.log('Массив', o);
              return {...state.items, ... payload}
              /*o.sugo = payload.sugo;
              o.shetchik_name = payload.shetchik_name;*/              
            }
            return o;
          })
        };
        case 'UPP_COUP1':
        return {
          ...state,
          items: {...state.items, payload}
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