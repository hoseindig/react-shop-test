import { useContext } from "react";
import UserContext from "../store/userContext";
const CardItem = ({ items }) => {
  const UserCtx = useContext(UserContext);
  return (
    <div>
      {items.map((i) => {
        return (
          <div className="cart-product" key={i.id}>
            <a href="product-details.html" className="image">
              <img src={"images/products/" + i.image} alt="" />
            </a>
            <div className="content">
              <h3 className="title">
                <a href="product-details.html">{i.title}</a>
              </h3>
              <p className="price">
                <span className="qty">{i.count} ×</span>{" "}
                {UserCtx.siteSeting.priceUnitSelect.symbol}
                {i.price}
              </p>
              <button
                className="cross-btn"
                onClick={() => UserCtx.removeFromCartItems(i)}
              >
                <i className="fa fa-times"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardItem;
