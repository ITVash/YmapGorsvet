import React, { useState, useEffect } from 'react';
import { AdminMaps, AdminMenu } from '../../Components';
import { connect } from 'react-redux';
import { coupActions, oporaActions } from '../../redux/actions';
import './style.scss';
const AdminTools = ({ itemsR, oporaR, fetchCoup, fetchOpora, addCoup, addOpora }) => {
  const [ coup, setCoup ] = useState({
    ID: null,
    title: "",
    areaID: null,
    note: "",
    func: 0,
    breac1: false,
    breac2: false,
    breac3: false,
    breac4: false,
    breac5: false,
    breac6: false,
    breac7: false,
    breac8: false,
    breac9: false,
    sugo: "",
    shethcik: "",
    kontaktor1: false,
    kontaktor2: false,
    postavchik_K1: "",
    postavchik_K2: "",
    postavchik_Sugo: "",
    postavchik_Shethika: "",
    date_K1: "01.01.2019",
    date_K2: "01.01.2019",
    date_Sugo: "01.01.2019",
    date_Shetchika: "01.01.2019",
    life_Time_k1: "",
    life_Time_k2: "",
    life_Time_Sugo: "",
    life_Time_Shethcika: "",
    kontaktor1_name: "",
    kontaktor2_name: "",
    sugo_name: "",
    shetchik_name: "",
    pos: {
      lat: null,
      lng: null
    }
  });
  const [ opora, setOpora ] = useState({
    ID: null,
    coupID: null,
    areaID: null,
    func:0,
    title: "",
    note: "",
    svetilnik: "",
    postavchik_Svet: "",
    date_Svet: "01.01.2019",
    life_Time_Svet: "",
    Lampa: "",
    postavchik_Lamp: "",
    date_Lamp: "01.01.2019",
    life_Time_Lamp: "",
    pos: {
      lat: null,
      lng: null
    }
  });
  const [ type, setType ] = useState('');
  useEffect(() => {
    fetchCoup();
    fetchOpora();
  }, [fetchCoup, fetchOpora]);
  const coupID = itemsR.length + 1;
  const oporaID = oporaR.length + 1;
  return (
    <>
      <AdminMenu
        editType={ setType }
      />
      <AdminMaps
        coupID={ coupID }
        oporaID={ oporaID }
        type={ type }
        items={ coup }
        editItems={ setCoup }
        opora={ opora }
        editOpora={ setOpora }
        addCoup={ addCoup }
        addOpora={ addOpora }
        infoCoup={ itemsR }
      />
    </>
  )
}

export default connect(({coup, opora}) => ({itemsR: coup.items, oporaR: opora.items}), {...oporaActions, ...coupActions})(AdminTools);
