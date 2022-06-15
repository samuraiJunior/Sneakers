import React,{useEffect, useState} from 'react'
import s from "./Pages.module.scss"
import { useLocation, useParams } from 'react-router-dom'
import { GetOnceItem, GetOnceThirt, SetItemtoCart } from '../Redux/ItemSlice'
import { useDispatch, useSelector } from 'react-redux'
import Greenbtn from '../Components/Greenbtn'
import CharacteristicComponet from '../Components/CharacteristicComponet'
import Like from '../Components/Like'

const FullItemInfo = () => {
  const location=useLocation()
  const PartName=location.pathname
  const item=useSelector(state=>state.Items.OnceItem)
  const itemsIncart=useSelector(state=>state.Items.itemsIncart)

  const IsItemInCart=()=>{
    return itemsIncart?.some(i=>i?.ParentID===item.ParentID)
  }
    const dispatch=useDispatch()
    const params=useParams()
   
    useEffect(()=>{
        dispatch(Number(params.id)>=13?GetOnceThirt(params.id):GetOnceItem(params.id))
    },[params.id,dispatch])
    const [size,setSize]=useState(PartName==="/"+params.id?"41":"S")

    const SwitchActiveSize=(sz)=>{
      return  size===sz?s.active:null
    }
    const handleClick=()=>{
        dispatch(SetItemtoCart({...item, size}))
    }
   
      const sz=(sneakers,thirts)=>{
       return PartName==="/"+params.id?sneakers:thirts
      }

      const characteristic=item.characteristic!==undefined?item.characteristic.map(i=><CharacteristicComponet
         key={i.title} value={i.value} title={i.title}/>):null
  return (
      item !==[]?
    <main className={s.content}>

        <div className={s.content__Preview}>

        <div className={s.imgWrapper}>
            <img src={item.Imgsrc} alt="img" />
        </div>

        <div className={s.Options}>
          <span className={s.ItemName}><h2>Категория: {item.category}</h2>
            <h2>Модель: {item.itemName}</h2></span>
            <span className={s.PriceBlock}>Цена: {item.price}</span>
            <div className={s.sizeTab}>
                <h3>Размеры</h3>
                <ul className={s.Sizes}>
                    <li onClick={()=>setSize(sz("41","S"))} className={SwitchActiveSize(sz("41","S"))}>{sz("41","S")}</li>
                    <li onClick={()=>setSize(sz("42","M"))} className={SwitchActiveSize(sz("42","M"))}>{sz("42","M")}</li>
                    <li onClick={()=>setSize(sz("43","L"))} className={SwitchActiveSize(sz("43","L"))}>{sz("43","L")}</li>
                    <li onClick={()=>setSize(sz("44","XL"))} className={SwitchActiveSize(sz("44","XL"))}>{sz("44","XL")}</li>
                </ul>
            </div>
            <div className={s.FormWrapper}>
              {IsItemInCart()?<Greenbtn Smallsize={true} handleClick={handleClick} disabled={true} title={"Товар уже есть в корзине"}/>
               : <Greenbtn Smallsize={true} handleClick={handleClick} title={"Добавить в корзину"}/>}
       
        <Like item={item}/>
            </div> 
         </div>

        </div>

      <div className={s.Info}>
        <div className={s.descrition}>
            <h1>Описание</h1>
            <p>{item.description}</p>
        </div>
        <div className={s.characteristic}>
            <h1>Характеристики</h1>
            <ul>
                {characteristic}
            </ul>
        </div>
      </div>
    </main>:null
  )
}

export default FullItemInfo
