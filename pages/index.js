// create buttons that will redirect to 1.whitelist 2.nfts 3.rextoken 4.dao using next.js

// next.js from react button


import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/whitelist">
          <button className={styles.button}>Whitelist</button>
        </Link>
        <Link href="/nfts">
          <button className={styles.button}>NFTs</button>
        </Link>
        <Link href="/rextoken">
          <button className={styles.button}>RexToken</button>
        </Link>
        <Link href="/dao">
          <button className={styles.button}>DAO</button>
        </Link>
      </main>
    </div>
  );
}


      
