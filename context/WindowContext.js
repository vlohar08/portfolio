import { debounce } from "lodash";
import { createContext, useContext, useEffect, useState } from "react";

const WindowContext = createContext({
  scrollY: 0,
});

export const useWindow = () => useContext(WindowContext);

const WindowContextProvider = ({ children }) => {
  const [windowData, setWindowData] = useState({ scrollY: 0 });
  const handleWindowScroll = () => {
    setWindowData((prevData) => ({
      ...prevData,
      scrollY: window.scrollY,
    }));
  };
  useEffect(() => {
    handleWindowScroll();
    window.addEventListener(
      "scroll",
      debounce(handleWindowScroll, 50, { maxWait: 1000 })
    );
  }, []);
  return (
    <WindowContext.Provider value={windowData}>
      {children}
    </WindowContext.Provider>
  );
};

export default WindowContextProvider;
