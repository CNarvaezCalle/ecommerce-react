import { useForm } from "react-hook-form"
import { useState } from "react";
import "./styles/FilterPrice.css"

const FilterPrice = ({ setFromTo }) => {

  const { register, reset, handleSubmit } = useForm()
  const [isOpen, setIsOpen] = useState(false)

  const submit = (data) => {
    const from = Number(data.from.trim())
    const to = +data.to.trim()
    const obj = {
      from: from || 0,
      to: to || Infinity
    }
    setFromTo(obj)
    setIsOpen(false)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <article className={`price__container ${isOpen ? "open" : ""}`}>
      <h3 className="price__title" onClick={toggleDropdown}>Select Price
      <span className={`arrow ${isOpen ? "open" : ""}`}></span>
      </h3>
      {
        isOpen && (
      <form onSubmit={handleSubmit(submit)}>
        <div className="price__from">
          <label htmlFor="from">From:</label>
          <input {...register('from')} className="from__input" type="text" id="from" />
        </div>
        <div className="price__to">
          <label htmlFor="to">To:</label>
          <input {...register('to')} className="to__input" type="text" id="to" />
        </div>
        <button className="filter__price__btn">Filter Price</button>
      </form>
      )}
    </article>
  );
};

export default FilterPrice;
