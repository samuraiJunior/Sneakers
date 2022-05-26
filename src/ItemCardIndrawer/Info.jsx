import React from 'react'
import s from "./Drawer.module.scss"
const Info = (props) => {
  return (
    <div className={s.pureBox}>
          <img width={props.width} height={props.height} src={props.imgSrc} alt="" />
          <h3 className={props.OrderSucces}>{props.cartStatus}</h3>
          <p>{props.InfoText}</p>
   </div>
  )
}

export default Info
