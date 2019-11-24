import React from 'react';
//import { connect } from 'react-redux';
//import { coupActions, oporaActions } from '../../redux/actions';
import { YMaps, SearchBox } from '../../Components';
import { Menu } from '../../Container'
//{ fetchCoup, items, getCurrentID, getOporaID, getUppCoup, opora, fetchOpora, uppOpora }
const Maps = props => {
  /*const [ searchValue, setSearchValue ] = useState('');
  const [ filter, setFilter ] = useState(Array.from(items));
  const [ filterOpora, setFilterOpora ] = useState(Array.from(opora));
  const onSearch = (value = '') =>{
    setFilter(items.filter(item => item.title.toLowerCase().indexOf(value.toLowerCase()) >= 0 ));
    setFilterOpora(opora.filter(item => item.title.toLowerCase().indexOf(value.toLowerCase()) >= 0));
    setSearchValue(value);
  };
  useEffect(() => {
    if (items.length || opora.length) {
      onSearch();
    }
  }, [items, opora]);
  useEffect(() => {
    fetchCoup();
    fetchOpora();
  }, [fetchCoup, fetchOpora]);*/
  return (
    <>
      <SearchBox 
        /*onSearch={ onSearch } 
        SearchValue={ searchValue }*/
      />
      <Menu />
      <YMaps
        /*coups={ filter }
        opora={ filterOpora }
        onSelectOpora={ getOporaID }
        onSelectCoup={ getCurrentID }
        uppCoup={ getUppCoup }
        uppOpora={ uppOpora }*/
      />
    </>
  )
}
//connect(({coup, opora}) => ({ items: coup.items, opora: opora.items }), {...coupActions, ...oporaActions})(Maps)
export default Maps;
