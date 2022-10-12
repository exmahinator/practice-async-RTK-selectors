import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Without createApi-------
// import { fetchProducts } from 'redux/operations';
import { useFetchProductsQuery } from 'redux/rtkQuery/rtkQuery';
import { addToCart } from 'redux/slice';
import { Spinner } from 'components/Spinner/Spinner';
import { getLoaderSelector, getProductsSelector } from 'redux/selectors';

export const ProductsList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const dispatch = useDispatch();

  // Without createApi-------
  // const products = useSelector(getProductsSelector);

  const loader = useSelector(getLoaderSelector);

  // With createApi---------
  const { data: products } = useFetchProductsQuery();

  // Without createApi-------
  // useEffect(() => {
  //   dispatch(fetchProducts());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const handleAddProdact = el => {
    dispatch(addToCart(el));
  };

  return (
    <div>
      {loader && <Spinner />}
      <button
        onClick={() => {
          setModalIsOpen(!modalIsOpen);
        }}
      >
        products open
      </button>
      {modalIsOpen && (
        <div>
          <ul>
            {products?.map(el => {
              const { id, name, price, description } = el;
              return (
                <li key={id}>
                  <h3>{name}</h3>
                  <p>price: {price}</p>
                  <p>{description}</p>
                  <button
                    onClick={() => {
                      handleAddProdact(el);
                    }}
                  >
                    add product
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
