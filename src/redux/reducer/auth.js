const initialState = {
  items:[],
  logIn: true,
  accessLevel: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'AUTH_ME':
        if (payload.status_code === 1) {
          return {
            ...state,
            items: payload.data,
            logIn: false
          };
        } if (payload.status_code === 0) {
          return {
            ...state,
            items: payload.data,
            logIn: true,
            accessLevel: payload.data.access
          };
        }
        break;
        //return state;
      /*return {
        ...state,
        items: payload,
        logIn: true
      };*/
  
    default:
      return state;
  }
}