import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from "next/link";

export default function Custom404() {
    return (
      <div className={'Wrapper'}>
        <Header/>
          <main className={'main'}>
            <p>ページがありません。</p>
          </main>
         <Footer/>
      </div>
    );
  }