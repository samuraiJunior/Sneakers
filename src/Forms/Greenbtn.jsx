import React from 'react'
import s from './Forms.module.scss'


const Greenbtn = (props) => {
  return (
    <button onClick={props.OrderSucces}  className={s.greenbtn}>Оформить заказ<img src="Imgs/button arrow.svg" alt="arrow" /></button>
  )
}

export default Greenbtn
