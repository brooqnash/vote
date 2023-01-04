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
        <h1 className="text-2xl">
          Each <span className="font-extrabold uppercase">'match'</span> will
          display two random images of a dog to you.
        </h1>
        <h1 className="text-2xl">
          It is your job to choose the best of the two.
        </h1>
        <div className="flex gap-4">
          <Link href="/match">
            <button className="IndexBtn">!START!</button>
          </Link>
          <Link href="/leaderboard">
            <button className="IndexBtn">RESULTS</button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
