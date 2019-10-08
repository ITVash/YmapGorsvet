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
        <div className="info-box__content_sugo">
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Контактор</label>
            <Input value={props.items.kontaktor1_name} />
          </div>
          <div className="info-box__content_sugo-item">
            <label htmlFor="">Контактор</label>
            <Input value={props.items.kontaktor2_name} />
          </div>
        </div>
        <center><h4>Предохранители</h4></center>
        <div className="info-box__content_sugo pr">
          <div className="info-box__content_sugo-item"><span className={props.items.breac1 && "tr"}>1</span></div>
          <div className="info-box__content_sugo-item"><span className={props.items.breac2 && "tr"}>2</span></div>
          <div className="info-box__content_sugo-item"><span className={props.items.breac3 && "tr"}>3</span></div>
          <div className="info-box__content_sugo-item"><span className={props.items.breac4 && "tr"}>4</span></div>
          <div className="info-box__content_sugo-item"><span className={props.items.breac5 && "tr"}>5</span></div>
          <div className="info-box__content_sugo-item"><span className={props.items.breac6 && "tr"}>6</span></div>
          <div className="info-box__content_sugo-item"><span className={props.items.breac7 && "tr"}>7</span></div>
          <div className="info-box__content_sugo-item"><span className={props.items.breac8 && "tr"}>8</span></div>
          <div className="info-box__content_sugo-item"><span className={props.items.breac9 && "tr"}>9</span></div>
        </div>
      </div>
    </div>
  )
}

export default InfoBox
