import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getSingleProduct } from "../../store/one_product";
import { addToFavorites } from "../../store/favorites";
import "./SingleProduct.css";
import Carousel from "./ImageCarousel/Carousel";
import SupplyNavBar from "./SupplyNavBar/SupplyNavBar";
import availableProducts from "./availableProducts";
import { postCartItem, editCartItem } from "../../store/cart_items";
import { Modal } from "../../context/Modal";
import Cart from "../Cart/Cart";
import { getCart } from "../../store/cart";
import SuggestedProduct from "./SuggestedProducts/SuggestedProduct";
import LoginForm from "../auth/LoginForm";
import Footer from "../Footer/Footer";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const singleProduct = useSelector((state) => state.product[id]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [suggested, setSuggested] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const user = useSelector((state) => state.session.user);

  const cart = useSelector((state) => state.cart);
  let thisCartItem;
  for (let item in cart.cartItems) {
    if (+cart.cartItems[item].productId === +id)
      thisCartItem = cart.cartItems[item];
  }

  useEffect(() => {
    dispatch(getSingleProduct(id));
    const shuffled = availableProducts.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 8);
    setSuggested(selected);
    dispatch(getCart());
  }, [dispatch, id]);

  // Get sub-array of first n elements after shuffled

  let imgList = [];

  if (singleProduct) {
    for (let id in singleProduct.productImages) {
      if (singleProduct.productImages[id].productId === singleProduct.id) {
        imgList.push(singleProduct.productImages[id].url);
      }
    }
  }

  if (!singleProduct) return null;

  return (
    <div className="single-product-page">
      <SupplyNavBar />
      <div className="single-product">
        <Carousel infinite imageLength={imgList.length}>
          {imgList.map((img, idx) => (
            <img key={idx} src={img} alt="single-product" />
          ))}
        </Carousel>
        <div className="single-product-details-wrapper">
          <div className="single-product-details">
            <p className="single-product-category">
              <a href="#hi">{singleProduct.productCategory.name}</a>
            </p>
            <h1>
              {singleProduct.title.toUpperCase()} / ${singleProduct.price}
            </h1>
            <p className="single-product-detailed-description">
              {singleProduct.detailedDescription}
            </p>
            <p className="single-product-details-greentxt">
              IN STOCK AND SHIPS FREE WITH EASY RETURNS.
            </p>
            <div className="single-product-details-btns">
              {user ? (
                <button
                  className="single-product-details-btn btn-add-cart"
                  onClick={async (e) => {
                    e.preventDefault();
                    console.log(thisCartItem);
                    if (thisCartItem) {
                      await dispatch(
                        editCartItem(thisCartItem, thisCartItem.quantity + 1)
                      );
                      await dispatch(getCart());
                    } else {
                      await dispatch(postCartItem(singleProduct.id));
                    }
                    setShowCartModal(true);
                  }}
                >
                  ADD TO CART
                </button>
              ) : (
                <button
                  className="single-product-details-btn btn-add-cart"
                  onClick={() => {
                    setShowLoginModal(true);
                  }}
                >
                  ADD TO CART
                </button>
              )}
              {showCartModal && (
                <Modal onClose={() => setShowCartModal(false)}>
                  <Cart setShowCartModal={setShowCartModal} />
                </Modal>
              )}
              {showLoginModal && (
                <Modal onClose={() => setShowLoginModal(false)}>
                  <LoginForm setShowLoginModal={setShowLoginModal} />
                </Modal>
              )}
              <button
                className="single-product-details-btn btn-stash-later"
                onClick={async (e) => {
                  e.preventDefault();
                  await dispatch(addToFavorites(singleProduct.id));
                  history.push(`/my-stash`);
                }}
              >
                STASH FOR LATER
              </button>
            </div>
          </div>
        </div>
        <div className="suggested-products">
          {suggested.map((product, idx) => (
            <SuggestedProduct key={idx} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
