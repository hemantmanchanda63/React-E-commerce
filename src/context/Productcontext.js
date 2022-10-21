// Create a Context
// Provider
// Consumer

import { useContext, createContext, useEffect, useReducer } from "react";
import axios from "axios";

import reducer from "../Reducer/ProductReducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialstate = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
  };
  const [state, dispatch] = useReducer(reducer, initialstate);
  const API = "https://api.pujakaitem.com/api/products";

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // Single Product 2nd API Call

  const getSingleProduct = async (url) => {
    dispatch({ type: "SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SINGLE_ERROR" });
    }
  };
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
  );
};

// Custom Hook
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
