import { useNavigate } from "react-router-dom"
import useCartApi from "../../hooks/useCartApi"
import "./styles/ProductInCart.css"

const ProductInCart = ({ prodCart }) => {
  
  const { deleteProductInCart } = useCartApi()
  const navigate = useNavigate()

  const handleDeleteCart = () => {
    deleteProductInCart(prodCart.id)
  }

  const handleNavigate = () => {
    navigate(`/product/${prodCart.productId}`)
  }

  console.log(prodCart)

  return (
    <article className="prcart__container"> 
      <header className="prcart__header">
        <img className="prcart__img" onClick={handleNavigate} src={prodCart.product.images[0].url} alt="" />
      </header>
      <section className="prcart__section">
        <h3 className="prcart__title">{prodCart.product.title}</h3>
        <span className="prcart__quantity">{prodCart.quantity}</span>
        <button className="prcart__btn" onClick={handleDeleteCart} style={{fontSize: '1rem'}}>
          <i className='bx bx-trash bx-xs'></i>
        </button>
      </section>
      <footer className="prcart__footer">
        <span className="prcart__subtotal__title">Subotal:</span>
        <span className="prcart__subtotal">{prodCart.product.price * prodCart.quantity}</span>
      </footer>
    </article>
  )
}

export default ProductInCart