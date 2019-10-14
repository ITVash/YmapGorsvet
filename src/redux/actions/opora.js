import { opora } from '../../api';

const actions = {
  getOpora: items => ({
    type: 'GET_OPORA',
    payload: items
  }),
  getOporaID: id => ({
    type: 'GET_CURRENT_ID',
    payload: id
  }),
  fetchOpora: () => dispatch => {
    opora.getAll().then(({data}) =>{
      dispatch(actions.getOpora(data));
    });
  }
};
export default actions;