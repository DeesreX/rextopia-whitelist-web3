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
        <Link href="/exchange">
          <button className={styles.button}>Exchange</button>
        </Link>
        <Link href="/ens">
          <button className={styles.button}>ENS</button>
        </Link>
        <Link href="/rextopia">
          <button className={styles.button}>RextopiA</button>
        </Link>
        <Link href="/ceramic">
          <button className={styles.button}>Ceramic</button>
        </Link>
      </main>
    </div>
  );
}


      
