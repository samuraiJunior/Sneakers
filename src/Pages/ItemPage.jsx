import React from 'react'
import { useSelector } from 'react-redux'
import SearchInput from '../Components/SearchInput'
import Item from '../itemCard/Item'
import ItemLoading from '../Loadings/ItemLoading'
import s from "./Pages.module.scss"

const ItemPage = ({Items,title}) => {
    const FakeItemsNumber=12
    const FakeItems=[]
    for(let i=0;i<FakeItemsNumber;i++){
      FakeItems.push(i)
    }
    const SearchValue=useSelector(state=>state.Items.SearchValue)
    const item=Items.filter(i=>i.itemName.toLowerCase().includes(SearchValue.toLowerCase())).map(i=><Item
       i={i} title={title} key={i.id}/>)
       const itemsLoading=useSelector(state=>state.Items.itemsLoading)
       const itemskeleton=FakeItems.map(i=><ItemLoading key={i} />)
  return (
    <main className={s.content}> 
        <div className={s.content_header}>
        <SearchInput searchTitle={title}  />
        </div>
        <div className={s.content_items}>
          {!itemsLoading?item:itemskeleton}
        </div>
      </main>
  )
}

export default ItemPage