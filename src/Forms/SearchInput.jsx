import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ClearSearchValue, SetSearchValue } from '../Redux/ItemSlice'
import s from "./Forms.module.scss"

const SearchInput = (props) => {
 const dispatch=useDispatch()
  const onchange=(e)=>{
    dispatch(SetSearchValue(e.target.value))
     }
     const Clear=()=>{
      dispatch(ClearSearchValue())
     }
    const SearchValue=useSelector(state=>state.Items.SearchValue)

  return (<>
    <div className={s.search_title}>{SearchValue?`Поиск по запросу:  ${SearchValue}`:props.searchTitle}</div>
    <div className={s.search_block}>
        <input onChange={onchange} value={SearchValue}   placeholder='Поиск' />{/*useform*/}
          <img className={s.search_img} src="Imgs/itemsIMG/search.svg" alt="search Icon"/>
          {SearchValue&&<img onClick={Clear} className={s.search_clearbtn} src="Imgs/itemsIMG/btnCross.svg" alt="icon"/>}
        </div>
        </>
  )
}

export default SearchInput
