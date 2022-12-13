import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProducts } from "../../store/all_products";
import "./ProductIndex.css";
import Navigation from "../Navigation/Navigation";

const ProductIndex = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => Object.values(state.products));
  // const productImages = useSelector(state => Object.values(state.product_images))

  useEffect(() => {
    dispatch(getProducts());
    // dispatch(getProductImages());
  }, [dispatch]);

  if (!products || products.length === 0) return null;

  const categoriesList = [
    "GEAR",
    "STYLE",
    "CARS",
    "TECH",
    "SHELTER",
    "VICES",
    "BODY",
    "ETC",
  ];

  const findCategory = (product_id) => {
    let category;
    for (let item in products) {
      if (products[item].id === product_id) {
        category = products[item].categoryId;
      }
    }

    console.log("Category: " + category);

    switch (category) {
      case 1:
        return "GEAR";
      case 2:
        return "STYLE";
      case 3:
        return "CARS";
      case 4:
        return "TECH";
      case 5:
        return "SHELTER";
      case 6:
        return "VICES";
      case 7:
        return "BODY";
      case 8:
        return "ETC";
      default:
        break;
    }
  };
  return (
    <>
      <Navigation />
      <div className="all-products-index">
        <div className="featured-product">
          <NavLink className="product-link" to={`/products/${products[0].id}`}>
            <img
              alt="main-product-img"
              className="featured-product-image"
              src={products[0].productImages[products[0].previewImgId].url}
            ></img>
            <div className="featured-product-text">
              <h6 className="featured-product-category">
                {products[0].category}
              </h6>
              <h1 className="featured-product-title">{products[0].title}</h1>
              <p className="featured-product-description">
                {products[0].description}
              </p>
              <span className="featured-product-buy-link">
                Buy From Uncrate Supply
              </span>
            </div>
          </NavLink>
        </div>
        <div className="all-other-products">
          {products.slice(1, 35).map((product) => (
            <div key={product.id} className="all-other-products-one-product">
              <NavLink className="product-link" to={`/products/${product.id}`}>
                <img
                  alt="main-product-img"
                  className="all-other-products-image"
                  src={product.productImages[product.previewImgId].url}
                ></img>
                <div className="all-other-products-text">
                  <h6 className="featured-product-category">
                    {product.productCategory.name.toUpperCase()}
                  </h6>
                  <h1 className="all-other-products-title">{product.title}</h1>
                  <p className="all-other-products-description">
                    {product.description}
                  </p>
                  <span className="featured-product-buy-link">
                    Buy From Uncrate Supply
                  </span>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductIndex;
