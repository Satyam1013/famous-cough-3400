import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import Footer from "@/components/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <Auth0Provider
    domain="dev-sszt1eabd2luwupe.us.auth0.com"
    clientId="bW3IMnB4eEUoxOZMdpKou2E0fa8uCqFj"
    authorizationParams={{
      redirect_uri: "http://localhost:3000/"
    }}
  >
    <Navbar/>
      <Component {...pageProps} />
    <Footer/>
    </Auth0Provider>
    </ChakraProvider>
  );
}
