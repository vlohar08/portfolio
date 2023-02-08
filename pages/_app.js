import NavBar from "../components/NavBar/NavBar";
import WindowContextProvider from "/context/windowContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <WindowContextProvider>
      <NavBar />
      <Component {...pageProps} />
    </WindowContextProvider>
  );
}

export default MyApp;
