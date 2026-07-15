import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filter_context";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();
  return (
    <Wrapper className="sort-section">
      {/* 1st column  */}
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}>
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={!grid_view ? "active sort-btn" : " sort-btn"}
          onClick={setListView}>
          <BsList className="icon" />
        </button>
      </div>
      {/* 2nd column  */}
      <div className="product-data">
        <p>{`${filter_products.length} Product Available`}</p>
      </div>

      {/* 3rd column  */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onChange={sorting}>
            <option value="lowest">Price: Low to High</option>
            <option value="highest">Price: High to Low</option>
            <option value="a-z">Name: A to Z</option>
            <option value="z-a">Name: Z to A</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1.4rem 2rem;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.colors.radius};

  .sorting-list--grid {
    display: flex;
    gap: 1rem;

    .sort-btn {
      width: 4rem;
      height: 4rem;
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: 10px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.text};
      transition: all 0.2s ease;

      &:hover {
        border-color: ${({ theme }) => theme.colors.helper};
        color: ${({ theme }) => theme.colors.helper};
      }
    }

    .icon {
      font-size: 1.7rem;
    }

    .active {
      background-color: ${({ theme }) => theme.colors.helper};
      border-color: ${({ theme }) => theme.colors.helper};
      color: #fff;
    }
  }

  .product-data p {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
  }

  .sort-selection .sort-selection--style {
    padding: 0.9rem 1.2rem;
    cursor: pointer;
    font-size: 1.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 10px;
    background: #fff;
    color: ${({ theme }) => theme.colors.heading};
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export default Sort;
