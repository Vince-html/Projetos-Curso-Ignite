import { memo } from 'react'


interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  },
  addFavorite: (id: number) => void;
}


function ProductItemComponent({ product, addFavorite }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong> {product.price} </strong>
      <button onClick={() => addFavorite(product.id)}>Add Favorite</button>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
});