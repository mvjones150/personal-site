import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Imej by Mika</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          {'Imej by '}
          <Link href="/about">
            Mika
          </Link>
        </h1>

        <p className="description">
          Labore consequat exercitation amet enim esse ullamco.
        </p>

      </main>
    </div>
  );
}
