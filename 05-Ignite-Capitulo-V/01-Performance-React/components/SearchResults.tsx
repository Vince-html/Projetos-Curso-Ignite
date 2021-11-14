/* eslint-disable */

import { useMemo } from 'react';
import { ProductItem } from './ProductItem';

type ResultsProps = {
  addFavorite: (id: number) => void;
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>
  totalPrice: number
}


export function SearchResults({ results, addFavorite, totalPrice }: ResultsProps) {



  return (
    <div>
      <h2> {totalPrice} </h2>
      {results.map(product => {
        return (
          <ProductItem product={product} key={product.id} addFavorite={addFavorite} />
        );
      })}
    </div>
  )
}