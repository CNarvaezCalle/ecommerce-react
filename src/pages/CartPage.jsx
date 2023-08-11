import { useDispatch, useSelector } from "react-redux"
import { getCartThunk } from "../store/slices/cart.slice"
import { useEffect } from "react"
import ProductInCart from "../components/CartPage/ProductInCart"
import usePurchases from "../hooks/usePurchases"
import { useNavigate } from "react-router-dom"
import "./styles/CartPage.css"

const CartPage = () => {

  const cart = useSelector(reducer => reducer.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(getCartThunk())
  }, [])

  console.log(cart)

  const totalAmount = cart.reduce((acc, cv) =>{ 
    const subtotal = cv.quantity * cv.product.price
    return acc + subtotal 
   }, 0)

   const { makeAPurchase } = usePurchases()
   

   const handlePurchase = () => {
    makeAPurchase()
    navigate('/purchases')
   }


  return (
    <section className="cart__container">
      <h2 className="cart__title">Cart</h2>
      <div className="cart__items">
        {
          cart.map(prod =>(
            <ProductInCart 
              key={prod.id}
              prodCart={prod}
            />
          ))
        }
      </div>
      <footer className="cart__footer">
        <span className="cart__total">Total</span>
        <h3 className="cart__total__amount">{totalAmount}</h3>
        <button className="cart__btn" onClick={handlePurchase}>Checkout</button>
      </footer>
    </section>
  )
}

export default CartPage