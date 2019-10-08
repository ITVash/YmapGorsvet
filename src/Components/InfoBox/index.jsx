import React from 'react'
import { Icon, Input } from 'antd';
import './style.scss';
const InfoBox = (props) => {
  console.log("Это для информации", props);
  const area = {
    1: "Ворошиловском районе",
    2: "Киевском районе",
    3: "Калининском районе",
    4: "Куйбышевском районе",
    5: "Ленинском районе",
    6: "Кировском районе",
    7: "Петровском районе",
    8: "Буденовском районе",
    9:  "Пролетарском районе"
  }
  return (
    <div className="info-box">
      <span className="info-box__close" onClick={
        () => {
          const wind = document.querySelector(".info-box");
          wind.classList.toggle("open");
        }
      }><Icon type="close" /></span>
      <div className="info-box__title">
        <h3>{props.items.title}</h3>
        <span>{area[props.items.areaID]}</span>
      </div>
      <div className="info-box__content">
        <center><h3>Комплектация</h3></center>
        <div className="info-box__content_sugo">
          <div className="info-box__content_sugo-item">
            <label htmlFor="">СУГО, старт</label>
            <Input value={props.items.sugo_name} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Счетчик</label>
            <Input value={props.items.shetchik_name} />
          </div>
        </div>
        <div className="info-box__content_sugo kont">
          <div className="info-box__content_sugo-item">
            <label htmlFor="">К1</label>
            <span className={props.items.kontaktor1 ? "tr" : null}>{props.items.kontaktor1 ? "Есть" : "Нет"}</span>
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">К2</label>
            <span className={props.items.kontaktor2 ? "tr" : null}>{props.items.kontaktor2 ? "Есть" : "Нет"}</span>
          </div>
        </div>
        <center><h4>Предохранители</h4></center>
        <div className="info-box__content_sugo pr">
          <div className="info-box__content_sugo-item"><span className={props.items.breac1 ? "tr" : null}>1</span></div>
          <div className="info-box__content_sugo-item"><span className={props.items.breac2 ? "tr" : null}>2</span></div>
          <div className="info-box__content_sugo-item"><span className={props.items.breac3 ? "tr" : null}>3</span></div>
          <div className="info-box__content_sugo-item"><span className={props.items.breac4 ? "tr" : null}>4</span></div>
          <div className="info-box__content_sugo-item"><span className={props.items.breac5 ? "tr" : null}>5</span></div>
          <div className="info-box__content_sugo-item"><span className={props.items.breac6 ? "tr" : null}>6</span></div>
          <div className="info-box__content_sugo-item"><span className={props.items.breac7 ? "tr" : null}>7</span></div>
          <div className="info-box__content_sugo-item"><span className={props.items.breac8 ? "tr" : null}>8</span></div>
          <div className="info-box__content_sugo-item"><span className={props.items.breac9 ? "tr" : null}>9</span></div>
        </div>
        <center><h3>Информация</h3></center>
        <div className="info-box__content_sugo">
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Поставщик К1</label>
            <Input value={props.items.postavchik_K1} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Тип К1</label>
            <Input value={props.items.kontaktor1_name} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Дата установки</label>
            <Input value={props.items.date_K1} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Срок службы</label>
            <Input value={props.items.life_Time_k1} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Поставщик К2</label>
            <Input value={props.items.postavchik_K2} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Тип К2</label>
            <Input value={props.items.kontaktor2_name} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Дата установки</label>
            <Input value={props.items.date_K2} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Срок службы</label>
            <Input value={props.items.life_Time_k2} />
          </div>
        </div>
        <div className="info-box__content_sugo">
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Поставщик счетчика</label>
            <Input value={props.items.postavchik_Shethika} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Тип счетчика</label>
            <Input value={props.items.shetchik_name} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Дата установки</label>
            <Input value={props.items.date_Shetchika} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Срок службы</label>
            <Input value={props.items.life_Time_Shethcika} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Поставщик СУГО, старт</label>
            <Input value={props.items.postavchik_Sugo} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Тип вкл. устройства</label>
            <Input value={props.items.postavchik_Sugo} />
          </div>
          <div className="info-box__content_sugo-item"><label htmlFor="">Text</label><Input></Input></div>
          <div className="info-box__content_sugo-item"><label htmlFor="">Text</label><Input></Input></div>
        </div>
      </div>
    </div>
  )
}

export default InfoBox
