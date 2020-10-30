import "../css/style.scss";
import { CartProvider } from "./../providers/CartProvider";

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
