import { useContext, useState } from "react";
import { createContext } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const openHandler = () => {
    isOpened === false ? setIsOpened(true) : setIsOpened(false);
  };

  const value = {
    setIsOpened,
    isOpened,
    openHandler,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useStore = () => {
  return useContext(Context);
};
