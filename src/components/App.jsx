import { ProductsList } from './ProductsList/ProductsList';
import { Cart } from './Cart/Cart';
import { readyToOrderProducts } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { useFetchProductsQuery } from 'redux/rtkQuery/rtkQuery';

export const App = () => {
  // With createApi-------------------------------
  const { data: products } = useFetchProductsQuery();

  const amount = useSelector(readyToOrderProducts(products));
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        color: '#010101',
      }}
    >
      <p>{amount}</p>
      <ProductsList />
      <Cart />
    </div>
  );
};
