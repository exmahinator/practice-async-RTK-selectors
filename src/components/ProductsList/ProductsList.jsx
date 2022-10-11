import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from 'redux/operations';
import { addToCart } from 'redux/slice';
import { Spinner } from 'components/Spinner/Spinner';
export const ProductsList = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { products, loader } = useSelector(store => store);

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddProdact = el => {
    console.log(el);

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
