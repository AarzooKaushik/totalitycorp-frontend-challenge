import { Link } from "react-router-dom";
import classes from "./Products.module.css";

const Products = (props) => {
  const { id, title = "i'm a prooduct", price = "", image = "" } = props;
  return (
    <>
      <Link to={`/shop/${id}`}>
        <div className={classes.product}>
          <div className={classes.productImage}>
            <img src={image} alt="Product view" />
            <div className={classes.quickView}>Quick View</div>
          </div>
          <div className={classes.productDetail}>
            <h3>{title}</h3>
            <p>$ {price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Products;
