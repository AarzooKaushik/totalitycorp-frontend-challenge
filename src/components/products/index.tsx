import React from "react";
import { Link } from "react-router-dom";
import classes from "./style.module.css";

interface ProductsProps {
  id: string;
  title?: string;
  price?: string;
  image?: string;
}

const Products: React.FC<ProductsProps> = ({
  id,
  title = "I'm a product",
  price = "",
  image = "",
}) => {
  return (
    <>
      <Link to={`/shop/shop/${id}`}>
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
