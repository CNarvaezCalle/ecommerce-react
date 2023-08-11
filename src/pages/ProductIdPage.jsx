import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from "../components/ProductIdPage/ProductInfo"
import SimilarProducts from "../components/ProductIdPage/SimilarProducts"
import SlidersImgs from "../components/ProductIdPage/SlidersImgs"
import "./styles/ProductIdPage.css"


const ProductIdPage = () => {

  const { id } = useParams()



  const [ product, getSingleProduct ] = useFetch()

  useEffect(()=>{
    getSingleProduct(`/products/${id}`)
  }, [id])

  

  return (
    <div className="product__info__container">
      <SlidersImgs 
        product={product}
      />
      <ProductInfo 
        key={product?.id}
        product={product}
      />
      <div className="product__info__similar">
        <SimilarProducts 
        product={product}
        />
      </div>
    </div>
  )
}

export default ProductIdPage