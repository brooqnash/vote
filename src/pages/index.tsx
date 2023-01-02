import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Introduction</title>
        <meta name="description" content="Vote for the best dog." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="Index">
        <h1>
          Each <span className="font-extrabold">'match'</span> will display two
          random images of a dog to you.
        </h1>
        <h1>It is your job to choose the best of the two.</h1>
        <div className="flex gap-4">
          <Link href="/match">
            <button className="IndexBtn bg-White text-Black">LET'S GO</button>
          </Link>
          <Link href="/results">
            <button className="IndexBtn bg-Black outline">SEE ALL</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
