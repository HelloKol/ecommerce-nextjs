import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Layout, Footer } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Layout>
      <Component {...pageProps} />
      {router.pathname !== "/collections" && <Footer />}
    </Layout>
  );
}

export default MyApp;
