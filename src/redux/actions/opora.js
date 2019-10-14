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
    });
  },
  fetchOpora1: oporaItems => (dispatch, getState) => {
    const { coup } = getState();
    const { items } = coup;
    items.filter(item => {
      if (item.ID === oporaItems.coupID) {
        opora.getAll().then(({data}) => {
          dispatch(actions.getOpora(data));
        });
      }
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