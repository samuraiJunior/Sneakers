import React, { memo,useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import Like from '../Components/Like'
import { deleteIteminCart, SetItemtoCart, ToggleWrapperActive } from '../Redux/ItemSlice'
import s from "./Item.module.scss"


const Item =({i,title}) => {
  const itemsIncart=useSelector(state=>state.Items.itemsIncart)
  const maxWord=20

  const FindObj=(itemsIncart)=>{
   const findobj=itemsIncart.find(obj=>obj.ParentID===i.ParentID)
   return findobj
  }
  const IsItemIn=(part,id)=>{
    return part.some((obj)=>obj?.ParentID===id)
  }
  
 const dispatch=useDispatch()
  const setitemIncart=()=>{
    dispatch(SetItemtoCart(i))
    dispatch(ToggleWrapperActive())
    setTimeout(() => {
    dispatch(ToggleWrapperActive())
    }, 1500);
  }
  const deleteitemIncart=()=>{
    const obj=FindObj(itemsIncart)
    dispatch(deleteIteminCart(obj.id))
  }
 
  const [overlay,setOverlay]=useState(false)


  return (<>
    
      <div className={s.content__card}>
      <Link to={title==="Все кроcсовки"?"/"+i.ParentID:"/thirts"+i.ParentID}>
        <div className={s.imgWrapper} onMouseEnter={()=>setOverlay(true)} onMouseLeave={()=>setOverlay(false)}>
          <img className={s.PreviewImg} src={i.Imgsrc} alt="icon"/>
          <span className={overlay?s.imgOverlay:s.none}></span>
          </div>
          </Link>
          <span className={s.likeWrapper}><Like item={i}/></span>
          
          

          <div className={s.content__card_title}>{i.category}</div>
          <div className={s.content__card_subtitle}>{i.itemName.slice(0,maxWord)}...</div>
          <div className={s.content__card_priceHolder}>
          
          <div>
          <span>Цена:</span>
            <b><br />{i.price}</b>
          </div>
          {IsItemIn(itemsIncart,i.ParentID)?<button className={s.btnChecked} onClick={deleteitemIncart}><img src="Imgs/itemsIMG/check.svg" alt="icon" /></button>:
            <button className={s.btnUNChecked} onClick={setitemIncart}><img src="Imgs/itemsIMG/plus.png" alt="icon" /></button>}
          
          </div>
         </div>
         
         </>
  )
}

export default memo(Item)

