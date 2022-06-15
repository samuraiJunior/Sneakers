import React from 'react'
import s from "./Components.module.scss"
const CharacteristicComponet = ({title,value,rub,bold}) => {
  return (
    <li className={s.characteristic}>
     <span>{title}</span>
     <div></div>
    <span className={bold?s.bold:null}>{value} {rub?" руб.":null} </span>
  </li>
  )
}

export default CharacteristicComponet
