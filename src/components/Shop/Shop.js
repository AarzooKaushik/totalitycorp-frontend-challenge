import classes from "./Shop.module.css";
import Filter from "./Filter";
import Products from "./product";
import PRODUCTS from "../../data";
import { useState } from "react";

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);
  const [showFilter, setShowFilter] = useState(false);

  const minPrice = PRODUCTS.reduce((min, product) => {
    return product.price < min ? product.price : min;
  }, Infinity);

  const maxPrice = PRODUCTS.reduce((max, product) => {
    return product.price > max ? product.price : max;
  }, -Infinity);

  const onHideFilter = () => {
    setShowFilter(false);
  };

  const updateFilter = (filterType, filterValue) => {
    let updatedProducts = [];

    if (filterType === "price") {
      updatedProducts = PRODUCTS.filter((product) => {
        return (
          product.price >= filterValue[0] && product.price <= filterValue[1]
        );
      });
    } else if (filterType === "category") {
      if (filterValue.length > 0) {
        updatedProducts = PRODUCTS.filter((product) => {
          return filterValue.includes(product.category.toLowerCase());
        });
      } else {
        updatedProducts = PRODUCTS;
      }
    } else if (filterType === "rating") {
      if (filterValue !== null) {
        updatedProducts = PRODUCTS.filter((product) => {
          return product.rating === filterValue;
        });
      } else {
        updatedProducts = PRODUCTS;
      }
    } else if (filterType === "all") {
      updatedProducts = PRODUCTS;
    }

    setFilteredProducts(updatedProducts);
  };

  return (
    <>
      <div className={classes.container}>
        <h1>SHOP</h1>
        <button
          onClick={() => setShowFilter(true)}
          className={classes.filterBtn}
        >
          Filter
        </button>
        <div className={classes.productContainer}>
          <Filter
            updateFilter={updateFilter}
            minPrice={minPrice}
            maxPrice={maxPrice}
            showFilter={showFilter}
            onHideFilter={onHideFilter}
            disabled={filteredProducts === PRODUCTS}
          />
          <div className={classes.products}>
            {filteredProducts?.length ? (
              filteredProducts.map((item) => {
                return (
                  <Products
                    key={item.id}
                    id={item.id}
                    title={item.name}
                    price={item.price}
                    image={item.image}
                  ></Products>
                );
              })
            ) : (
              <p>No Product Found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
