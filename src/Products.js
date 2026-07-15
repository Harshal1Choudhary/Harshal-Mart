import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
import { useFilterContext } from "./context/filter_context";

const Products = () => {
  return (
    <Wrapper>
      <div className="container">
        <header className="products-header">
          <p className="intro-data">Catalog</p>
          <h1>All Products</h1>
        </header>

        <div className="grid grid-filter-column">
          <aside>
            <FilterSection />
          </aside>

          <section className="product-view--sort">
            <div className="sort-filter">
              <Sort />
            </div>
            <div className="main-product">
              <ProductList />
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0 8rem;

  .products-header {
    margin-bottom: 3.2rem;

    h1 {
      font-size: 3.6rem;
    }
  }

  .grid-filter-column {
    grid-template-columns: 26rem 1fr;
    gap: 3.2rem;
    align-items: start;
  }

  .main-product {
    margin-top: 2.4rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
