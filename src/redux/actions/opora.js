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
  addOpora: items => ({
    type: 'ADD_OPORA',
    payload: items
  }),
  /*getSelect: coup => (dispatch, getState) => {
    const { opora } = getState();
    const { items } = opora;
    items.filter(item => {})
  },*/
  getInfoCoup: opora => (dispatch, getState) => {
    const { coup } = getState();
    const { items } = coup;
    items.filter(item => {
      if (item.ID === opora.coupID) {
        dispatch({
          type: 'GET_COUP_INFO',
          payload: item
        });
      }
      return item
    });
  },
  uppOpora: items => ({
    type: 'UPP_OPORA',
    payload: items
  }),
  fetchOpora: () => dispatch => {
    opora.getAll().then(({data}) =>{
      dispatch(actions.getOpora(data));
    });
  }
};
export default actions;