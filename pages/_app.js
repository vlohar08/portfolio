import NavBar from "../components/NavBar/NavBar";
import WindowContextProvider from "/context/WindowContext";
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
