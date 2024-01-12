import Head from "next/head";
import App from "./App";

export default function Home() {

  return (
    <>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <p>A basic web3 example with StarknetJS</p>
          <App />
      </main>
    </>
  );
}