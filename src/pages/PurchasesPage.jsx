import { useEffect } from "react"
import usePurchases from "../hooks/usePurchases"
import ProductPurchased from "../components/PurchasesPage/ProductPurchased"
import "./styles/PurchasesPage.css"


const PurchasesPage = () => {


  const { getAllPurchases, purchases } = usePurchases()

  useEffect(()=>{
    getAllPurchases()
  }, [])

  console.log(purchases)

  return (
    <section className="purchasespage__container">
      <h2 className="purchasespage__title">My purchases</h2>
      <div className="purchasespage__items">
          {
            purchases?.map(purch=>(
              <ProductPurchased 
                key={purch.id}
                purchase={purch}
              />
            ))
          }
      </div>
    </section>
  )
}

export default PurchasesPage