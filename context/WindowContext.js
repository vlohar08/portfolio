import { debounce } from "lodash";
import { createContext, useContext, useEffect, useState } from "react";

const WindowContext = createContext({
  scrollY: 0,
  innerWidth: 0,
});

export const useWindow = () => useContext(WindowContext);

const WindowContextProvider = ({ children }) => {
  const [windowData, setWindowData] = useState({ innerWidth: 0, scrollY: 0 });
  const handleWindowResize = () => {
    setWindowData((prevData) => ({
      ...prevData,
      innerWidth: window.innerWidth,
    }));
  };
  const handleWindowScroll = () => {
    setWindowData((prevData) => ({
      ...prevData,
      scrollY: window.scrollY,
    }));
  };
  useEffect(() => {
    handleWindowResize();
    handleWindowScroll();
    window.addEventListener(
      "scroll",
      debounce(handleWindowScroll, 50, { maxWait: 1000 })
    );
    window.addEventListener(
      "resize",
      debounce(handleWindowResize, 50, { maxWait: 1000 })
    );
  }, []);
  return (
    <WindowContext.Provider value={windowData}>
      {children}
    </WindowContext.Provider>
  );
};

export default WindowContextProvider;
