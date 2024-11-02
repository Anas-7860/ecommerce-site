import React, { useContext } from 'react'
import './CSS/Category.css'
import { ShopContext } from '../Contexts/ShopContext';
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Items from '../components/Items/Items';
const Category = (props) => {
  const {all_data} = useContext(ShopContext);
  return (
    <div className='category'>
          <img id="i1" src ={props.banner} alt = "" />
          <div className="shopcategory-indexSort">
            <p>
            <span>showing 1-12</span> out of 50
            </p>
            <div className="shopcategory">
              Sort by <img src ={dropdown_icon} alt=" " />
            </div>
          </div>
          <div className="shopcategory-products">
            {all_data.map((item,i)=>{
              if(props.category === item.category){
               return <Items key={i}
               id = {item.id} 
               name = {item.name}
               image = {item.image}
               new_price = {item.new_price}
               old_price = {item.old_price}/>
              }
              else{
                return null;
              }
            })}
          </div>
          <div className="shopcategory-loadmode">
            Explore More
          </div>
    </div>
  )
}

export default Category