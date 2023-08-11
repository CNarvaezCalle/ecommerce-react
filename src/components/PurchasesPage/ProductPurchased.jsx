import "./styles/ProductPurchased.css";
import { Link } from "react-router-dom";

const ProductPurchased = ({ purchase }) => {

  const dateObj = new Date(purchase.updatedAt);

  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  const formattedDate = `${day}/${month}/${year}`

  console.log(purchase)
  return (
    <article className="purchased__container">
      <header className="purchased__header">
        <Link to={`/product/${purchase.product.id}`}>
        <img
          className="purchased__img"
          src={purchase.product.images[0].url}
          alt=""
        />
        </Link>
      </header>
      <section className="purchased__section">
        <h3 className="purchased__title">{purchase.product.title}</h3>
        <div>Cantidad: {purchase.quantity}</div>
        <div className="purchased__date">{formattedDate}</div>
        <div>$ {purchase.quantity * purchase.product.price}</div>
      </section>
    </article>
  );
};

export default ProductPurchased;
