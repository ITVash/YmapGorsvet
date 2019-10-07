const initialState = {
  items:[{
    login: 'Vash',
    email: 'vash_dn@mail.ru'
  }],
  logIn: false
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_AUTH':
      return {
        ...state,
        items: payload,
        logIn: true
      };
  
    default:
      return state;
  }
}