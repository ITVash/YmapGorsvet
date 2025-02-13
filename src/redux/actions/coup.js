import { coup } from '../../api';

const actions = {
  addCoup: items => ({
    type: 'ADD_COUP',
    payload: items
  }),
  getCoup: items => ({
    type: 'GET_COUP',
    payload: items
  }),
  getUppCoup: items => ({
    type: 'UPP_COUP',
    payload: items
  }),
  getCurrentID: id => ({
    type: 'GET_GURRENT_ID',
    payload: id
  }),
  fetchCoup: () => dispatch => {
    coup.getAll().then(({ data }) => {
      dispatch(actions.getCoup(data));
    });
  }
};
export default actions;