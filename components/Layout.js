import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import Hero from "./Hero";

export default function Layout({ title, keyowrds, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="descriptions" content={description} />
        <meta name="keywords" content={keyowrds} />
      </Head>
      <Header />
      {router.pathname === "/" && <Hero />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Fresher Coders | Find Latest jobs News",
  description: "A Website that brings you latest Jobs about Developers",
  keyowrds: "FrontEnd, BackEnd and Full Stack developers",
};
