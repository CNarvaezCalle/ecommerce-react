import { useState } from "react";
import useCartApi from "../../hooks/useCartApi";
import "./styles/ProductInfo.css";

const ProductInfo = ({ product }) => {
  const [counter, setCounter] = useState(1);

  const handleMinus = () => {
    if (counter - 1 >= 1) {
      //(counter > 1)
      setCounter(counter - 1);
    }
  };

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const { addProductInCart } = useCartApi();

  const handleAddCart = () => {
    const data = {
      quantity: counter,
      productId: product.id,
    };
    addProductInCart(data);
  };

  return (
    <article className="info__container">
      <section className="info__description">
      <h4 className="info__brand">{product?.brand}</h4>
      <h3 className="info__title">{product?.title}</h3>
      <p className="info__description__text">{product?.description}</p>
      </section>
      <section className="info__container__price">
        <h4 className="info__title__price">Price</h4>
        <span className="info__price">{product?.price}</span>
      </section>
      <section className="info__container__quantity">
        <h4 className="info__quantity__title">Quantity</h4>
        <div className="info__quantity__counter">
          <button className="info__btn" onClick={handleMinus}>
            -
          </button>
          <span className="info__counter">{counter}</span>
          <button className="info__btn" onClick={handlePlus}>
            +
          </button>
        </div>
      </section>
      <footer className="info__footer">
        <button className="info__btn__add" onClick={handleAddCart}>
          Add to Cart <i className="bx bxs-cart-add bx-sm" style={{color: "#f85555"}}></i>{" "}
        </button>
      </footer>
    </article>
  );
};

export default ProductInfo;
