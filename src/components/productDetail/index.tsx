import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomDropdown from "./DropDown";
import Button from "../button/index";

import PRODUCTS , {Product} from "../../data";
import classes from "./style.module.css";

interface ProductDetailProps {}



const ProductDetail: React.FC<ProductDetailProps> = () => {
  const navigate = useNavigate();
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [nextIndex, setNextIndex] = useState<number | null>(null);

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const _product = PRODUCTS?.length
      ? PRODUCTS.find((it) => it.id === productId) || null 
      : null;
    const currentIndex = PRODUCTS.findIndex((it) => it.id === productId);
    setProduct(_product);
  
    setPrevIndex(currentIndex > 0 ? currentIndex - 1 : null);
    setNextIndex(currentIndex < PRODUCTS.length - 1 ? currentIndex + 1 : null);
  }, [productId]);
  

  const prevItemHandler = () => {
    if (prevIndex !== null) {
      const prevProductId = PRODUCTS[prevIndex].id;
      navigate(`/shop/shop/${prevProductId}`);
    }
  };

  const nextItemHandler = () => {
    if (nextIndex !== null) {
      const nextProductId = PRODUCTS[nextIndex].id;
      navigate(`/shop/shop/${nextProductId}`);
    }
  };

  const onAddCartItemHandler = () => {
    if (selectedSize === "") {
      toast.error("Please select a size before adding to the cart.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      return;
    }
    let cartItems = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingItem = cartItems.find(
      (item: any) => item.id === product?.id && item.size === selectedSize
    );
    if (!existingItem) {
      const newItem = {
        image: product?.image,
        id: product?.id,
        price: product?.price,
        quantity: quantity,
        totalPrice: (product?.price || 0) * quantity, 
        title: product?.name,
        size: selectedSize,
      };

      cartItems.push(newItem);
    } else {
      existingItem.quantity += quantity;
      existingItem.totalPrice += (product?.price || 0) * quantity;
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("storage"));
    toast.success("Product added to Cart!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
    });
    setQuantity(1);
    setSelectedSize("");
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (value > 0) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  const handleSizeChange = (option: string) => {
    setSelectedSize(option);
  };

  return (
    <div className={classes.container}>
      <div className={classes.flex}>
        <p className={classes.pagination}>
          <span
            onClick={() => {
              navigate("/shop");
            }}
          >
            Shop
          </span>{" "}
          / <span>{product?.name}</span>
        </p>
        <div className={classes.pagination}>
          <button onClick={prevItemHandler} disabled={prevIndex === null}>
            <i className="fa-solid fa-chevron-left"></i> Prev
          </button>{" "}
          | {""}
          <button onClick={nextItemHandler} disabled={nextIndex === null}>
            {" "}
            Next <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className={classes.productContain}>
        <div>
          <div className={classes.productImage}>
            <img src={product?.image} alt="" />
          </div>
          <p>
            I'm a product description. I'm a great place to include more
            information about your product. Buyers like to know what they're
            getting before they purchase.
          </p>
        </div>
        <div>
          <h1>{product?.name}</h1>

          <h2>${product?.price}</h2>

          <div>
            <p className={classes.label}>Size</p>
            <CustomDropdown value={selectedSize} onChange={handleSizeChange} />
          </div>

          <p className={classes.label}>Quantity</p>
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
          />

          <button className={classes.primaryBtn} onClick={onAddCartItemHandler}>
            Add to Cart
          </button>

          <Button>Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
