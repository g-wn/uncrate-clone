import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProducts } from "../../store/all_products";
import { getProductImages } from "../../store/product_images";
import "./ProductIndex.css";

const ProductIndex = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => Object.values(state.products));
  const productImages = useSelector((state) =>
    Object.values(state.product_images)
  );

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getProductImages());
  }, [dispatch]);

  if (!products) return null;

  return (
    <div className="product-index">
      {products.map((product) => (
        <div key={product.id} className="one-product">
          <NavLink to={`/products/${product.id}`}>
            <img src={productImages[product.previewImgId].url}></img>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default ProductIndex;
