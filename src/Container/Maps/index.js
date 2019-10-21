import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { coupActions, oporaActions } from '../../redux/actions';
import { YMaps, SearchBox } from '../../Components';
import { Menu } from '../../Container'

const Maps = ({ fetchCoup, items, getCurrentID, getOporaID, getInfoCoup, infoCoup, getUppCoup, opora, fetchOpora, uppOpora }) => {
  const [ searchValue, setSearchValue ] = useState('');
  const [ filter, setFilter ] = useState(Array.from(items));
  const [ filterOpora, setFilterOpora ] = useState(Array.from(opora));
  const onSearch = (value = '') =>{
    setFilter(items.filter(item => item.title.toLowerCase().indexOf(value.toLowerCase()) >= 0 ));
    setFilterOpora(opora.filter(item => item.title.toLowerCase().indexOf(value.toLowerCase()) >= 0 ));
    setSearchValue(value);
  };
  /*useEffect(() => {
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
  }, [opora]);*/
  useEffect(() => {
    if (items.length || opora.length) {
      onSearch();
    }
  }, [items, opora]);
  useEffect(() => {
    fetchCoup();
    fetchOpora();
  }, [fetchCoup, fetchOpora])
  return (
    <>
      <SearchBox 
        onSearch={ onSearch } 
        SearchValue={ searchValue }
      />
      <Menu />
      <YMaps
        coups={ filter }
        opora={ filterOpora }
        coupInfo={ getInfoCoup }
        infoCoup= { infoCoup }
        onSelectOpora={ getOporaID }
        onSelectCoup={ getCurrentID }
        uppCoup={ getUppCoup }
        uppOpora={ uppOpora }
      />
    </>
  )
}
export default connect(({coup, opora}) => ({items: coup.items, opora: opora.items, infoCoup: opora.infoCoup}), {...coupActions, ...oporaActions})(Maps);
