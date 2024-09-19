import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";

const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfileContext must be used within a ContextProvider");
  }
  return context;
};

export default useProfileContext;
