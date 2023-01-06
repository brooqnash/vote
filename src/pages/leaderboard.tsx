import { type NextPage } from "next";
import { trpc } from "../utils/trpc";
import Head from "next/head";
import { useState } from "react";

const Leaderboard: NextPage = () => {
  const [sorting, setSorting] = useState<string>("↑ ↓");
  const data = trpc.dog.all
    .useQuery(undefined, { refetchOnWindowFocus: false })
    .data?.sort((a, b) =>
      sorting === "↑ ↓" ? b.votes - a.votes : a.votes - b.votes
    );

  const truncateBreed = (str: string, count: number) => {
    return str.length > count ? str.slice(0, count - 1) + "..." : str;
  };

  return (
    <>
      <Head>
        <title>Leaderboard</title>
        <meta name="description" content="See the leaderboard of all dogs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="Leaderboard">
        <button
          onClick={() => setSorting(sorting === "↑ ↓" ? "↓ ↑" : "↑ ↓")}
          className="LeaderboardBtn"
        >
          Sorted: {sorting}
        </button>
        <ul className="LeaderboardList">
          {!data && <h1>Loading...</h1>}
          {data?.map((dog) => {
            return (
              <li key={dog.id} className="LeaderboardItem">
                <img src={dog.url} className="LeaderboardImg" />
                <div className="LeaderboardImgCaption">
                  <span>🐶</span>
                  <p className="LeaderboardImgCaptionTitle">
                    {truncateBreed(dog.breed, 7)} | {dog.votes}
                  </p>
                  <span>🐶</span>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};
export default Leaderboard;
