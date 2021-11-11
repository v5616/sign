import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { API_URL } from "@/config/index";
import styles from "@/styles/News.module.css";
import moment from "moment";
import { AiOutlineFileText } from "react-icons/ai";

export default function SingleNews({ news }) {
  const router = useRouter();
  console.log("router===>", router);
  return (
    <Layout>
      <div className={styles.news}>
        <h1>{news.name}</h1> 
        <h4>{news.companyname}</h4>
        <p>{news.address}</p>
        <p >&#8377;{news.salary}</p>
      </div>
        
        <div className={styles.desc}>

         <h3><AiOutlineFileText/>Description</h3>

      
        {/* {news.image && (
          <div className={styles.image}>
            <Image src={news.image ? news.image.formats.medium.url : "No Image"} width={900} height={600} />
          </div>
        )} */}
        
        <p>{news.detail}</p>
        
        <Link href={news.link}>
          <a className="btn my-3" target="_blank">Apply</a>
        </Link> 
        <br/>
        <br/>
        <Link href="/news">
          <a className={styles.back}>Go Back</a>
        </Link>
        </div>
    </Layout>
  );
}

export async function getServerSidePaths() {
  const res = await fetch(`${API_URL}/jobs`);
  const news = await res.json();
  const paths = news.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}
// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/jobs`);
//   const news = await res.json();
//   const paths = news.map((item) => ({
//     params: { slug: item.slug },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/jobs?slug=${slug}`);
//   const singleNews = await res.json();
//   return {
//     props: {
//       news: singleNews[0],
//     },
//     revalidate: 1,
//   };
// }

export async function getServerSideProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/jobs?slug=${slug}`);
  const singleNews = await res.json();
  return {
    props: {
      news: singleNews[0],
    },
  };
}
