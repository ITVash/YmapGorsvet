import React from 'react';
import './style.scss';
const AdminMenu = props => {
  return (
    <div className="menu">
      <div className="menu__items">
        <div className="menu__items_coup">
          <img src="./img/coup_item.png" alt="ШУ"/>
        </div>
        <div className="menu__items_opora">
          <img src="./img/opora_item.png" alt="Опора"/>
        </div>
      </div>
    </div>
  )
}

export default AdminMenu
