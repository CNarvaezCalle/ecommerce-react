import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { getAllProductsThunk, getFilteredProductsThunk } from "../../store/slices/products.slice"
import { useDispatch } from "react-redux"
import './styles/FilterCategory.css'


const FilterCategory = () => {


 const [ categories, getAllCategories ] = useFetch()
 const [isOpen, setIsOpen] = useState(false)


 useEffect(()=>{
  getAllCategories('/categories')
 }, [])

 const dispatch = useDispatch()

 const handleAllCategories = () => {
  dispatch(getAllProductsThunk())
  setIsOpen(false)
 }

 const handleFilterCategories = (id) => {
  dispatch(getFilteredProductsThunk(id))
  setIsOpen(false)
 }



 const toggleDropdown = () => {
  setIsOpen(!isOpen)
 }



  return (
    <article className={`filtercategory__container" ${isOpen ? "open" : ""}`}>
      <h3 className="category__title" onClick={toggleDropdown}>Select Category
      <span className={`arrow ${isOpen ? "open" : ""}`}></span>
      </h3>
      {isOpen && (
      <ul className="category__wrap">
        <li className="category__list" onClick={handleAllCategories}>All categories</li>
        {
          categories?.map(category => (
            <li className="category__list" onClick={() => handleFilterCategories(category.id)} key={category.id}>{category.name}</li>
          ))
        }
      </ul>
      )}
    </article>
  )
}

export default FilterCategory