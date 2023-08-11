import { useSelector } from "react-redux";
import CardProduct from "../components/HomePage/CardProduct";
import "./styles/HomePage.css";
import { useRef, useState } from "react";
import FilterCategory from "../components/HomePage/FilterCategory";
import FilterPrice from "../components/HomePage/FilterPrice";

const HomePage = () => {
  const [nameValue, setNameValue] = useState("");
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  });

  const products = useSelector((reducer) => reducer.products);

  const inputName = useRef();

  const handleFilterName = () => {
    setNameValue(inputName.current.value);
    //tambien se puede hacer con setNameValue(e.target.value)
  };

  const cbFilter = (prod) => {
    // Filter By Name
    const inputNameLower = nameValue.toLowerCase().trim();
    const nameReal = prod.title.toLowerCase();
    const filterName = nameReal.includes(inputNameLower);
    // Filter By Price
    const price = Number(prod.price);
    const filterPrice = fromTo.from <= price && price <= fromTo.to;
    return filterName && filterPrice;
  };

  console.log(products);

  return (
    <div className="home">
      <div className="home__page">
        <div className="home__input__container">
          <input
            className="filter__name"
            style={{ fontSize: "1.5rem" }}
            value={nameValue}
            ref={inputName}
            onChange={handleFilterName}
            type="text"
          />
          <button className="filter__name__btn"><i className='bx bx-search-alt-2' style={{color: "white"}}></i></button>
        </div>
        <div className="home__category__price">
          <FilterCategory />
          <FilterPrice 
           setFromTo={setFromTo} 
          />
        </div>
        <div className="product__container">
          {products?.filter(cbFilter).length ? (
            products
              ?.filter(cbFilter)
              .map((prod) => <CardProduct key={prod.id} product={prod} />)
          ) : (
            <h2>Sorry 😭, not exist products with that filters. ❌</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
