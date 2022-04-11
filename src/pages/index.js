import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blog }) {
  return (
    <div>
      <Header />
      <div>
        <ul className={'blogList'}>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
              <p className={'thumbnail'}>
                <Link href={`/blog/${blog.id}`}>
                  <a><img src={blog.thumbnail.url} /></a>
                </Link>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};