import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getFavorites } from "../../store/favorites";
import Navigation from "../Navigation/Navigation";
import "./Favorites.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [isHovering, setIsHovering] = useState(false);
  const favorites = useSelector((state) => Object.values(state.favorites));
  const usDollar = Intl.NumberFormat("en-US");

  useEffect(() => {
    dispatch(getFavorites(user.id));
  }, [dispatch, user.id]);

  if (!favorites) return null;

  return (
    <>
      <Navigation isHovering={isHovering} setIsHovering={setIsHovering} />
      <div className="stash-title">{`${user.first_name}'s Stash`}</div>
      <div className="user-favorites">
        {favorites.map((favorite) => (
          <div className="outer">
            <NavLink className="image" to={`/products/${favorite.id}`}>
              <img
                alt="main-product-img"
                className="product-img"
                src={favorite.productImages[favorite.previewImgId].url}
              ></img>
              <div className="product-name">
                {favorite.title} / ${usDollar.format(favorite.price)}
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default Favorites;
