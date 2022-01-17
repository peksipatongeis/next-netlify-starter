import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          <div
            style={{
              width: '250px',
              height: '250px',
              margin: '0 auto',
              position: 'relative',
            }}
          >
            <Image src={'/maito.jpg'} layout="fill" />
          </div>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
