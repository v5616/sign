import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/NewsItem.module.css";
import moment from "moment";
import { BsZoomIn } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";
import { AiFillClockCircle } from "react-icons/ai";
import { BsWallet2 } from "react-icons/bs";
import { FcAndroidOs } from "react-icons/fc";

export default function NewsItem({ news }) {
  return (
    <div className={styles.news}>
      {/* <div className={styles.img}>
        <Image
          src={news.image ? news.image.formats.thumbnail.url : "No Image"}
          width={150}
          height={100}
        />
      </div> */}
      <div className={styles.info}>
        {/* <span>
          {moment(news.date).format("yyyy-MM-DD")} / 
           {moment(news.time).format("hh:mm ")}
        </span> */}
        <h3>{news.name}</h3>
        <span>{news.companyname}</span>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "60px" }}>
            <h6>
              {" "}
              <TiLocation /> {news.location}
            </h6>
          </div>
          <div>
            <h6>
              {" "}
              <AiFillClockCircle style={{ marginRight: "4px" }} />{news.exp} year
            </h6>
          </div>
        </div>
        <div>
          <h6>
            {" "}
            <BsWallet2
              style={{ marginTop: "4px", height: "10px", marginRight: "4px" }}
            />{" "}
            {news.package} P.A
          </h6>
          <p style={{ fontSize: ".69rem" }}>{news.detail.slice(0, 88)}</p>
        </div>

       <div style={{display:"flex"}}>
         <div style={{marginRight:"10px"}}>
         <FcAndroidOs />
         </div>
         <div >
           <p style={{marginTop:"0px",fontSize:".8rem"}}>{news.skill}</p>
         </div>
       </div>
         
          
      </div>

      <div className={styles.link}>
        <Link href={`/news/${news.slug}`}>
          <a className="btn">Read More</a>
        </Link>
        {/* <Link href={news.link} >
          <a className="btn" target="_blank" >Apply</a>
        </Link> */}
      </div>
    </div>
  );
}
