import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "../components/navbar.css";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";

const client = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={client}>
        <Navbar />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
