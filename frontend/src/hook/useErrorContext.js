import { useContext } from "react";
import { ErrorContext } from "../context/ErrorContext";

const useErrorContext = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useErrorContext must be used within a Provider");
  }
  return context;
};

export default useErrorContext;
