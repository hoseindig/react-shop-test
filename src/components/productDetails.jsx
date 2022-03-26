import { useParams, useLocation } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../store/userContext";
const ProductDetails = (props) => {
  const userCntx = useContext(UserContext);
  const { productList } = userCntx;
  const { id } = useParams();
  debugger;
  let passItem = null;
  if (id) {
    passItem = productList.find((i) => i.id === Number(id));
  }
  console.log("ProductDetails", props);
  return (
    <div>
      <h1>ProductDetails</h1>
      <h2>{passItem && passItem.title}</h2>
    </div>
  );
};

export default ProductDetails;
