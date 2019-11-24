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
          items: state.items.filter(item => {
            if (item.id === state.currentID) {
              return  Object.assign(item, payload)
            }
            return item;
          })
        };
        case 'UPP_COUP1':
          return {
            ...state,
            items: state.items.filter( item => {
              if (item.ID === state.currentID) {
                item.breac1 = payload.breac1
                item.breac2 = payload.breac2
                item.breac3 = payload.breac3
                item.breac4 = payload.breac4
                item.breac5 = payload.breac5
                item.breac6 = payload.breac6
                item.breac7 = payload.breac7
                item.breac8 = payload.breac8
                item.breac9 = payload.breac9
                item.date_K1 = payload.date_K1
                item.date_K2 = payload.date_K2
                item.date_Shetchika = payload.date_Shetchika
                item.date_Sugo = payload.date_Sugo
                item.func = payload.func
                item.kontaktor1 = payload.kontaktor1
                item.kontaktor1_name = payload.kontaktor1_name
                item.kontaktor2 = payload.kontaktor2
                item.kontaktor2_name = payload.kontaktor2_name
                item.life_Time_Shethcika = payload.life_Time_Shethcika
                item.life_Time_Sugo = payload.life_Time_Sugo
                item.life_Time_k1 = payload.life_Time_k1
                item.life_Time_k2 = payload.life_Time_k2
                item.note = payload.note
                item.postavchik_K1 = payload.postavchik_K1
                item.postavchik_K2 = payload.postavchik_K2
                item.postavchik_Shethika = payload.postavchik_Shethika
                item.postavchik_Sugo = payload.postavchik_Sugo
                item.shetchik_name = payload.shetchik_name
                item.shethcik = payload.shethcik
                item.sugo = payload.sugo
                item.sugo_name = payload.sugo_name
                item.title = payload.title
                console.log('item', item)
                console.log('state', state.items)
              }
              return item;
            })
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