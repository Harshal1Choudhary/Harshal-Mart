import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const API = "https://fakestoreapi.com/products";

// The original course API (api.pujakaitem.com) is offline, so we use the
// reliable Fake Store API and map its response into the shape this app expects.
const BRANDS = ["Nova", "Aura", "Vertex", "Lumen", "Onyx"];
const SWATCHES = ["#111827", "#6254f3", "#e11d48", "#059669", "#f59e0b"];

const mapProduct = (p) => ({
  id: String(p.id),
  name: p.title,
  company: BRANDS[p.id % BRANDS.length],
  price: Math.round(p.price * 100),
  colors: [
    SWATCHES[p.id % SWATCHES.length],
    SWATCHES[(p.id + 2) % SWATCHES.length],
  ],
  description: p.description,
  category: p.category,
  image: [{ id: p.id, url: p.image, filename: p.title }],
  stock: 25,
  stars: p.rating?.rate ?? 4.5,
  reviews: p.rating?.count ?? 100,
  featured: p.id <= 6,
  shipping: true,
});

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = res.data.map(mapProduct);
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // 2nd api call for a single product
  const getSingleProduct = async (id) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(`${API}/${id}`);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: mapProduct(res.data) });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
