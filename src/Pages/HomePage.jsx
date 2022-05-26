import React from 'react'
import { useSelector } from 'react-redux'
import SearchInput from '../Forms/SearchInput'
import Item from '../itemCard/Item'
import ItemLoading from '../Loadings/ItemLoading'
import "./../App.scss"

const HomePage = () => {
    const FakeItemsNumber=12
    const FakeItems=[]
    for(let i=0;i<FakeItemsNumber;i++){
      FakeItems.push(i)
    }
    const SearchValue=useSelector(state=>state.Items.SearchValue)
    const Items=useSelector(state=>state.Items.items)
    
    const item=Items.filter(i=>i.itemName.toLowerCase().includes(SearchValue.toLowerCase())).map(i=><Item
       i={i} /*added={IsItemInDrawer(i)itemsIncart.some((obj)=>obj.itemName===i.itemName)}*/  key={i.id}/>)
       const itemsLoading=useSelector(state=>state.Items.itemsLoading)
       
       const itemskeleton=FakeItems.map(i=><ItemLoading key={i} />)
       
  return (
    <main className="content"> 
        <div className='content_header'>
        <SearchInput searchTitle={"Все кроссовки"}  />
        </div>
        <div className="content_items">
          {!itemsLoading?item:itemskeleton}
        {/*itemsLoading?itemskeleton:item*/}
        </div>
      </main>
  )
}

export default HomePage
