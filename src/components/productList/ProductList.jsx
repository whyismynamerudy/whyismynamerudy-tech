import React from 'react'
import './ProductList.css'
import Product from '../product/Product'
import { products } from "../../data"

const ProductList = () => {
  return (
    <div className='productList'>
        <div className="productList-text">
            <h1 className="productList-title">Personal Projects</h1>
            <p className="productList-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non voluptatibus velit assumenda, quae ab harum qui voluptatem, nesciunt animi vitae eligendi facilis, eveniet quo tempora nemo? Nostrum nisi veniam ratione.    
            </p>    
        </div>
        <div className="productList-list">
            {products.map((item) => (
                <Product key={item.id} img={item.img} link={item.link} />
            ))}
            
        </div>
    </div>
  )
}

export default ProductList