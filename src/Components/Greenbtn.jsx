import React from 'react'
import s from './Components.module.scss'


const Greenbtn = ({handleClick,title,Smallsize,disabled}) => {
  return (
    <button onClick={handleClick} disabled={disabled?true:false} className={Smallsize ===true?`${s.greenbtn} ${s.buttonSmallSize}`:s.greenbtn}>{title}
    <img src={"Imgs/button arrow.svg"} alt="arrow" /></button>
  )
}

export default Greenbtn
