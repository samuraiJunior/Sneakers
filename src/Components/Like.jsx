import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddItemToFavorite, deleteFavorite, ToggleIconActive } from '../Redux/FavotiteSlice'
import s from "./Components.module.scss"

const Like = ({item,ParentID}) => {
    /*"size":"41",
    "size":"S",*/

  const dispatch = useDispatch()
    const FindObj=(itemsIncart)=>{
        const findobj=itemsIncart.find(obj=>obj.ParentID===item.ParentID)
        return findobj
       }

       const addItemToFavorite=()=>{
        dispatch(AddItemToFavorite(item))
       dispatch(ToggleIconActive())
       setTimeout(() => {
         dispatch(ToggleIconActive())
       }, 1500);
      }
       const DeleteFavorite=()=>{
        const obj=FindObj(favorite)
        console.log(obj)
        dispatch(deleteFavorite(obj.id))
      } 
 const favorite=useSelector(state=>state.Favorite.favorite)
    const IsItemIn=(part,id)=>{
        return part.some((obj)=>obj?.ParentID===id)
      }
  return (<>
    {IsItemIn(favorite,item.ParentID)?/*<span onClick={DeleteFavorite} className={s.like_wrapper}>
           <img className={s.like}  src="Imgs/itemsIMG/like.svg" alt="icon" />
           </span>*/<img  onClick={DeleteFavorite} className={s.like} src="Imgs/Like.png" alt="like" />
           :
           <img  onClick={addItemToFavorite}  className={s.like} src="Imgs/dislike.svg" alt="unlike" />}
         </>
  )
}

export default Like
