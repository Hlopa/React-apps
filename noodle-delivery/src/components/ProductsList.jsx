import React from 'react';
import ProductItem from './ProductItem';

const ProductsList = ({items =  [], handleChoseProduct}) => {
  
  const products = items.map((product) => (
  <ProductItem key = {product.id} {...product} handle={handleChoseProduct}/>
  ))

  return (
    <ul className="products__list">
      {products}
    </ul>

  )
}

export default ProductsList;
