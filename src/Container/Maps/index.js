import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { coupActions, oporaActions } from '../../redux/actions';
import { YMaps, SearchBox } from '../../Components';

const Maps = ({ fetchCoup, items, getCurrentID, getOporaID, getUppCoup, opora, fetchOpora }) => {
  const [ searchValue, setSearchValue ] = useState('');
  const [ filter, setFilter ] = useState(Array.from(items));
  const [ filterOpora, setFilterOpora ] = useState(Array.from(opora));
  const onSearch = value =>{
    setFilter(items.filter(item => item.title.toLowerCase().indexOf(value.toLowerCase()) >= 0 ));
    setFilterOpora(opora.filter(item => item.title.toLowerCase().indexOf(value.toLowerCase()) >= 0 ));
    setSearchValue(value);
  };
  useEffect(() => {
    if(!items.length) {
      fetchCoup();
    } else {
      setFilter(items);
    }
  }, [items]);
  useEffect(() => {
    if (!opora.length) {
      fetchOpora();
    } else {
      setFilterOpora(opora);
    }
  }, [opora]);
  return (
    <>
      <SearchBox 
        onSearch={ onSearch } 
        SearchValue={ searchValue }
      />
      <YMaps
        coups={ filter }
        opora={ filterOpora }
        onSelectOpora={ getOporaID }
        onSelectCoup={ getCurrentID }
        uppCoup={getUppCoup}
      />
    </>
  )
}
/*const mapStateToProps = state => {
  return {
    items: state.coup.items,
    fetchCoup: state.coup.fetchCoup,
    getCurrentID: state.coup.getCurrentID,
    accessLevel: state.auth.accessLevel,
    getUppCoup: state.coup.getUppCoup,
    opora: state.opora.items,
    fetchOpora: state.opora.fetchOpora
  }
};*/

export default connect(({coup, opora}) => ({items: coup.items, opora: opora.items}), {...coupActions, ...oporaActions})(Maps);
