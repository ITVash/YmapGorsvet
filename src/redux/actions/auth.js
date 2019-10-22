import { auth } from '../../api';

const actions = {
  authData: data => ({
    type: 'AUTH_ME',
    payload: data
  }),
  authMe: () => dispatch => {
    debugger
    auth.authMe().then(({ data }) => {
      console.log('object', data)
      dispatch(actions.authData(data));
    }).catch(err=> {console.log('err', err)})
  },
};

export default actions;