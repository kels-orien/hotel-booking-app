import "../css/style.scss";
import '@fortawesome/fontawesome-free/css/all.css';
import { CartProvider } from "./../providers/CartProvider";

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
