const initialState = {
  items:[],
  logIn: true,
  accessLevel: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'AUTH_ME':
      return {
        ...state,
        items: payload,
        logIn: true
      };
  
    default:
      return state;
  }
}