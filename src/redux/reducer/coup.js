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
              if (payload.sugo) {
                o.sugo = payload.sugo
              } else if (payload.shetchik_name) {
                o.shetchik_name = payload.shetchik_name
              } else if (payload.breac === 1) {
                o.breac1 = !o.breac1;
              } else if (payload.breac === 2) {
                o.breac2 = !o.breac2;
              } else if (payload.breac === 3) {
                o.breac3 = !o.breac3
              } else if (payload.breac === 4) {
                o.breac4 = !o.breac4
              } else if (payload.breac === 5) {
                o.breac5 = !o.breac5
              } else if (payload.breac === 6) {
                o.breac6 = !o.breac6
              } else if (payload.breac === 7) {
                o.breac7 = !o.breac7
              } else if (payload.breac === 8) {
                o.breac8 = !o.breac8
              } else if (payload.breac === 9) {
                o.breac9 = !o.breac9
              }            
            }
            return o;
          })
        };
        case 'UPP_COUP1': 
          return Object.assign({}, state, {
            items: state.items.filter(item => {
              if (item.ID === state.currentID) {
                return Object.assign({}, item, {
                  sugo: payload.sugo,
                  shetchik_name: payload.shetchik_name
                })
              }
            })
          });
    case 'GET_GURRENT_ID':
      return {
        ...state,
        currentID: payload
      };
  
    default:
      return state;
  }
}