import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main/Index";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Landbank</title>
        <meta name="description" content="Bank landing page" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <Header />
      <Main />
      <Articles />
      <Footer />
    </>
  );
}
