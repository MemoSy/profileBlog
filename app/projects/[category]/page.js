import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";
import Link from "next/link";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return data;

};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.catTitle}>{params.category}</h1> */}

      {data.map((item) => (
        <div dir="rtl" className="flex flex-col lg:flex-row gap-[26px]" key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <a href={`http://${item.href}`} className='p-2 rounded-md bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 text-center ' target="_blank" rel="noopener noreferrer">اضغط للانتقال</a>
          </div>
          <div className={styles.imgContainer}>
            {item.image && <img
              className={styles.img}
              fill={true}
              src={item.image}
              alt=""
            />}
            {item.video && <iframe width={800} height={480} src={item.video} frameborder="0"></iframe>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
