import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import CardProduct from "../HomePage/CardProduct"
import "./styles/SimilarProducts.css"

const SimilarProducts = ({ product }) => {

  const [ productsByCategory, getProductsByCategory ] = useFetch()

  useEffect(()=>{
    if (product) {
      getProductsByCategory(`/products?categoryId=${product.categoryId}`)
    }
  }, [product])

 

  const cbFilter = prod => {
    if (prod.id !== product.id) {
      return prod    
    } 
  }

  return (
    <div className="similarp__container">
      <h3 className="similarp__title">Similar Products</h3>
      <div className="similarp__card">
        {
          productsByCategory?.filter(cbFilter).map(prod => (
            <CardProduct 
              key={prod.id}
              product={prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default SimilarProducts