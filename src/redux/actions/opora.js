import { opora } from '../../api';

const actions = {
  getOpora: items => ({
    type: 'GET_OPORA',
    payload: items
  }),
  fetchOpora: () => dispatch => {
    opora.getAll().then(({data}) =>{
      dispatch(actions.getOpora(data));
    });
  }
};
export default actions;