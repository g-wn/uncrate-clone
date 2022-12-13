import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../store/all_products';
import SupplyNavBar from '../SingleProduct/SupplyNavBar/SupplyNavBar';

const ImageForm = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector(state => state.products);
  const product = products[id];

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (!product) return null;

  return (
    <div className='create-image-form'>
      <SupplyNavBar />
      <h1>Add or Edit an Image</h1>
      {product ? (
        Object.values(product.productImages).map((image, idx) => (
          <div key={idx}>
            <img
              src={image.url}
              alt='product-img'
            />
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ImageForm;
