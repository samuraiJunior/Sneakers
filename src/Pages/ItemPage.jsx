import React from 'react'
import { useSelector } from 'react-redux'
import SearchInput from '../Forms/SearchInput'
import Item from '../itemCard/Item'
import ItemLoading from '../Loadings/ItemLoading'
import "./../App.scss"

const ItemPage = ({Items,title}) => {
    const FakeItemsNumber=12
    const FakeItems=[]
    for(let i=0;i<FakeItemsNumber;i++){
      FakeItems.push(i)
    }
    const SearchValue=useSelector(state=>state.Items.SearchValue)
    const item=Items.filter(i=>i.itemName.toLowerCase().includes(SearchValue.toLowerCase())).map(i=><Item
       i={i}  key={i.id}/>)
       const itemsLoading=useSelector(state=>state.Items.itemsLoading)
       const itemskeleton=FakeItems.map(i=><ItemLoading key={i} />)
  return (
    <main className="content"> 
        <div className='content_header'>
        <SearchInput searchTitle={title}  />
        </div>
        <div className="content_items">
          {!itemsLoading?item:itemskeleton}
        </div>
      </main>
  )
}

export default ItemPage