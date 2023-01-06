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

      <main className="Home">
        <section className="HomeTitleGroup">
          <h1 className="HomeTitle">
            Find The Cutest Dog Along With The Rest Of The World.
          </h1>
        </section>
        <section className="HomeBtnGroup">
          <Link href="/match">
            <button className="HomeMatchBtn">Get Started →</button>
          </Link>
          <Link href="/leaderboard">
            <button className="HomeLeaderboardBtn">Leaderboard</button>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
