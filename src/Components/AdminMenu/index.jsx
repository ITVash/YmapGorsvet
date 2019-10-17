import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
const AdminMenu = props => {
  const { editType } = props;
  return (
    <div className="menu">
      <div className="menu__items">
        <div className="menu__items_coup" onClick={ () => editType('coup') }>
          <img src="./img/coup_item.png" alt="ШУ"/>
        </div>
        <div className="menu__items_opora" onClick={ () => editType('opora') }>
          <img src="./img/opora_item.png" alt="Опора"/>
        </div>
        <div className="menu__items_exit" onClick={ () => {} }>
          <Link to={`/`} ><span> &#171; </span></Link>
        </div>
      </div>
    </div>
  )
}

export default AdminMenu
