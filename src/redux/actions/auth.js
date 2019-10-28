import { auth } from '../../api';

const actions = {
  authData: data => ({
    type: 'AUTH_ME',
    payload: data
  }),
  authMe: () => dispatch => {
    auth.authMe().then(({ data }) => {
      const { response } = data;
      console.log('object',   data);
      dispatch(actions.authData(response));
    }).catch(err=> {console.log('err', err)})
  },
};

export default actions;