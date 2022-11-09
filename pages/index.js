// create buttons that will redirect to 1.whitelist 2.nfts 3.rextoken 4.dao using next.js

// next.js from react button


import React from 'react';
import Link from 'next/link';
import Head from 'next/head';


export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
      </Head>
      <div class="main">
        <div class="calculator">
          <h1>Calculators</h1>
          <Link href="/calculator">
            <button class="btn btn-primary">Calculator</button>
          </Link>
          <Link href="/algebra-calculator">
            <button class="btn btn-primary">Algebra Calculator</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

