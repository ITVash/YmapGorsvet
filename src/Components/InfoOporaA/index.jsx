import React from 'react'
import { Icon, Input, DatePicker, Button } from 'antd';
import moment from 'moment';

import './style.scss';
const InfoOpora = (props) => {
  const dateFormat = 'DD.MM.YYYY';

  window.valuesOpora = props.items;
  window.editValuesOpora = props.editItems;
  const { items, editItems, infoCoup, uppOpora } = props;
  return (
    <div className="info-opora" tabIndex='0'>
      <span className="info-opora__close" onClick={
        () => {
          const wind = document.querySelector(".info-opora");
          wind.classList.remove("open");
        }
      }><Icon type="close" /></span>      
      <div className="info-opora__title">
        <h3>
          <label htmlFor="">Название Опоры</label>
          <Input onChange={e => editItems({...items, title : e.target.value})} />
        </h3>
        <span>
          <select name="areasID" className="opt"
              onChange={ e => editItems({...items, coupID : e.target.value})}
          >
            {infoCoup.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
          </select> 
          <select name="areasID" className="opt"
              onChange={ e => editItems({...items, areaID : e.target.value})}
            >
            <option value="0">Район расположения</option>
            <option value="1">Ворошиловский район</option>
            <option value="2">Киевский район</option>
            <option value="3">Калининский район</option>
            <option value="4">Куйбышевский район</option>
            <option value="5">Ленинский район</option>
            <option value="6">Кировский район</option>
            <option value="7">Петровский район</option>
            <option value="8">Буденовский район</option>
            <option value="9">Пролетарский райое</option>
          </select>
        </span>
      </div>
      <div className="info-opora__content">
        <center><h3>Светильник</h3></center>
        <div className="info-opora__content_opora">
          <div className="info-opora__content_opora-item">
            <label htmlFor="">Поставщик</label>
            <Input name="sugo" 
              value={items.postavchik_Svet} onChange={e => editItems({...items, postavchik_Svet : e.target.value})} />
          </div>
          <div className="info-opora__content_opora-item">
            <label htmlFor="">Светильник</label>
            <Input name="shetchik_name" 
              value={items.svetilnik } onChange={e => editItems({...items, svetilnik : e.target.value})} />
          </div>
          <div className="info-opora__content_opora-item">
            <label htmlFor="">Дата установки</label>
            <DatePicker className='date' defaultValue={moment(items.date_Svet, dateFormat)} format={dateFormat}
              onChange={(date, newDate)=> {editItems({...items, date_Svet : newDate})}} />
          </div>
          <div className="info-opora__content_opora-item">
            <label htmlFor="">Срок службы</label>
            <Input value={items.life_Time_Svet}
              onChange={ e => {editItems({...items, life_Time_Svet : e.target.value})}} />
          </div>
        </div>
        <center><h3>Лампа</h3></center>
        <div className="info-opora__content_opora">
          <div className="info-opora__content_opora-item">
            <label htmlFor="">Поставщик</label>
            <Input value={items.postavchik_Lamp}
              onChange={ e => {editItems({...items, postavchik_Lamp : e.target.value})}} />
          </div>
          <div className="info-opora__content_opora-item">
            <label htmlFor="">Лампа</label>
            <Input value={items.Lampa} 
              onChange={ e => {editItems({...items, Lampa : e.target.value})}} />
          </div>
          <div className="info-opora__content_opora-item">
            <label htmlFor="">Дата установки</label>
            <DatePicker className='date' defaultValue={moment(items.date_Lamp, dateFormat)} format={dateFormat}
              onChange={(date, newDate)=> {editItems({...items, date_Lamp : newDate})}} />
          </div>
          <div className="info-opora__content_opora-item">
            <label htmlFor="">Срок службы</label>
            <Input value={items.life_Time_Lamp}
              onChange={ e => {editItems({...items, life_Time_Lamp : e.target.value})}} />
          </div>
          <div className="info-opora__content_opora-item textarea">
            <label htmlFor="">Примечание</label>
            <Input.TextArea value={items.note}
              autosize={{ minRows: 3, maxRows: 5 }}
              onChange={ e => {editItems({...items, note : e.target.value})}} />
          </div>
        </div>
        <center><h3>Состояние</h3></center>
        <div className="info-opora__content_opora">
          <div className="info-opora__content_opora-item but">
            <span className={items.func === 1 ? "but-item err" : "but-item"} 
              onClick={ () => {editItems({...items, func : items.func === 1 ? 0 : 1})}}
            >{items.func === 1 ? "Не исправность" : "В работе"}</span>
          </div>
          <div className="info-opora__content_opora-item full">
            <Button type="primary" block onClick={ () => {
              uppOpora(items);
              editItems({});
              const wind = document.querySelector(".info-opora");
              wind.classList.remove("open");
            }}>Сохранить</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoOpora
