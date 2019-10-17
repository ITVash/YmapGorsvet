import React, { useState } from 'react';
import { AdminMaps, AdminMenu } from '../../Components'
import './style.scss';
const AdminTools = () => {
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
    date_K1: "",
    date_K2: "",
    date_Sugo: "",
    date_Shetchika: "",
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
    date_Svet: "",
    life_Time_Svet: "",
    Lampa: "",
    postavchik_Lamp: "",
    date_Lamp: "",
    life_Time_Lamp: "",
    pos: {
      lat: null,
      lng: null
    }
  });
  return (
    <>
      <AdminMenu />
      <AdminMaps
        items={ coup }
        editItems={ setCoup }
        opora={ opora }
        editOpora={ setOpora }
      />
    </>
  )
}

export default AdminTools
