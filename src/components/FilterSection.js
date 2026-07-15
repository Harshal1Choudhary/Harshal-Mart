import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../styles/Button";

const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
  };

  // we need to have the individual data of each in an array format
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");
  // console.log(
  //   "🚀 ~ file: FilterSection.js ~ line 23 ~ FilterSection ~ companyData",
  //   colorsData
  // );

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {categoryData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "active" : ""}
                onClick={updateFilterValue}>
                {curElem}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}>
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>

        <div className="filter-color-style">
          {colorsData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all--style"
                  onClick={updateFilterValue}>
                  all
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={updateFilterValue}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>

      <div className="filter-clear">
        <Button className="btn" onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: sticky;
  top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.4rem;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.colors.radius};

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
    color: ${({ theme }) => theme.colors.heading};
  }

  .filter-search input {
    width: 100%;
    padding: 1rem 1.4rem;
    font-size: 1.4rem;
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.4rem;

      button {
        border: none;
        background-color: transparent;
        text-transform: capitalize;
        cursor: pointer;
        font-size: 1.4rem;
        padding: 0.4rem 0;
        color: ${({ theme }) => theme.colors.text};
        transition: color 0.2s ease;

        &:hover {
          color: ${({ theme }) => theme.colors.helper};
        }
      }

      .active {
        color: ${({ theme }) => theme.colors.helper};
        font-weight: 600;
      }
    }
  }

  .filter-company--select {
    width: 100%;
    padding: 1rem 1.2rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;
    background: #fff;
    cursor: pointer;
  }

  .filter-color-style {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
      color: ${({ theme }) => theme.colors.helper};
    }
  }

  .btnStyle {
    width: 2.2rem;
    height: 2.2rem;
    background-color: #000;
    border-radius: 50%;
    border: 2px solid transparent;
    outline: none;
    opacity: 0.75;
    cursor: pointer;
    display: grid;
    place-items: center;
    transition: opacity 0.2s ease, transform 0.2s ease;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }

    &.active {
      opacity: 1;
      border-color: ${({ theme }) => theme.colors.heading};
    }
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    p {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.heading};
      margin-bottom: 0.4rem;
    }

    input[type="range"] {
      width: 100%;
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
      accent-color: ${({ theme }) => theme.colors.helper};
    }
  }

  .filter-clear .btn {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    position: static;
  }
`;

export default FilterSection;
