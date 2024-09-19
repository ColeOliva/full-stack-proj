import { createContext, useState } from "react";

const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {
  const [errors, setErrors] = useState([]); // { 'home': 'error message', 'saved-profiles': 'error message' }

  // reportErros: add error message to errors state
  const reportErrors = (key, error) => {
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        [key]: error,
      };
    });
  };

  // clearErrors: remove error message from errors state
  const clearErrors = (key) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[key];
      return newErrors;
    });
  };

  return (
    <ErrorContext.Provider
      value={{
        errors,
        reportErrors,
        clearErrors,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export { ErrorContext, ErrorProvider };
export default ErrorContext; 