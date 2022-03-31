import { useParams } from "react-router-dom";
import UserContext from "../../store/userContext";
import { useContext } from "react";
import Section from "../section";
const CategoryProduct = () => {
  const { categoryId } = useParams();
  const userCntx = useContext(UserContext);
  const { productList, categoryList } = userCntx;
  const category = categoryList.find((c) => c.id === Number(categoryId));
  return (
    <div>
      {category && (
        <Section
          title={category.name}
          cards={productList.filter((i) => i.category === Number(categoryId))}
          centerMode={true}
          slide={false}
        />
      )}
    </div>
  );
};

export default CategoryProduct;
