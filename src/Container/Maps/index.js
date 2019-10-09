import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { coupActions } from '../../redux/actions';
import { YMaps, SearchBox } from '../../Components';

const Maps = ({ fetchCoup, items, getCurrentID, getUppCoup }) => {
  const [ searchValue, setSearchValue ] = useState('');
  const [ filter, setFilter ] = useState(Array.from(items));
  const onSearch = value =>{
    setFilter(items.filter(item => item.title.toLowerCase().indexOf(value.toLowerCase()) >= 0 ));
    setSearchValue(value);
  };
  useEffect(() => {
    if(!items.length) {
      fetchCoup();
    } else {
      setFilter(items);
    }
  }, [items])
  return (
    <>
      <SearchBox 
        onSearch={ onSearch } 
        SearchValue={ searchValue }
      />
      <YMaps
        coups={ filter } 
        onSelectCoup={ getCurrentID }
        uppCoup={getUppCoup}
      />
    </>
  )
}
const mapStateToProps = state => {
  return {
    items: state.coup.items,
    fetchCoup: state.coup.fetchCoup,
    getCurrentID: state.coup.getCurrentID,
    accessLevel: state.auth.accessLevel,
    getUppCoup: state.coup.getUppCoup
  }
};
export default connect(mapStateToProps, coupActions)(Maps);
