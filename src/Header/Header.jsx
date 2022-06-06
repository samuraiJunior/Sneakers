import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import s from "./Header.module.scss"
import {FiUserCheck} from "react-icons/fi"
import { SetTotalPrice } from '../Redux/ItemSlice'
const Header = (props) => {
  const favoriteIconActive=useSelector(state=>state.Favorite.favoriteIconActive)
  const WrapperIconActive=useSelector(state=>state.Items.WrapperIconActive)
  const itemsIncart=useSelector(state=>state.Items.itemsIncart)

  const TotalPrice=useSelector(state=>state.Items.totalPrice)
 
  return (<>
    <header className={s.header}>
        <div className={s.header_Left}>
            <Link to="/">
          <img width={"100px"} src="Imgs/logo.png" alt="icon"/>
          <div>
            <h1>SNEAKERS</h1>
            <p>Магазин лучших кроссовок</p>
          </div>
          </Link>
        </div>
        <div className={s.header_Right}>
          <div className={s.header_Right__path1}>
            <Link to="/favorites">
          <img className={favoriteIconActive?s.buttonOpacity:null} width={"20px"} src="Imgs/Vector (1).png" alt="favorites"/>
            </Link>
          </div>
          <div className={s.header_Right__path2}>
            <div className={s.header_Right__path1_wrapperIcon}>
        <img className={WrapperIconActive?s.buttonOpacity:null} width={"20px"} onClick={props.ToggleshowWrapper} src="Imgs/wrapper.svg" alt="wrapper"/>
        {itemsIncart.length>0?<span>{itemsIncart.length}</span>:null}
        </div>
          <div>{TotalPrice + " ₽"}</div>
            <Link to="/orders">
              <div className={s.orders}>
              <FiUserCheck />
              </div>
          </Link>
          </div>
          </div>  
      </header>
      
      </>
  )
}

export default Header
