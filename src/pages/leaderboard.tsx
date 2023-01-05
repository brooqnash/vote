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

  return (
    <>
      <Head>
        <title>Leaderboard</title>
        <meta name="description" content="See the leaderboard of all dogs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center gap-12">
        <section className="flex h-24 w-1/2 items-center justify-evenly">
          <h1 className="text-4xl font-extrabold">🏆 Leaderboard 🏆</h1>
          <div className="flex items-center justify-center gap-4">
            <p>Sort by: </p>
            <button
              onClick={() => setSorting(sorting === "↑ ↓" ? "↓ ↑" : "↑ ↓")}
              className="IndexBtn"
            >
              {sorting}
            </button>
          </div>
        </section>
        <ul className="flex w-full flex-col items-center justify-center gap-12">
          {!data && <h1 className="flex justify-center">Loading...</h1>}
          {data?.map((dog) => {
            return (
              <li
                key={dog.id}
                className="flex w-1/2 items-center justify-evenly"
              >
                <img src={dog.url} className="h-44 w-44 object-cover" />
                <h1 className="w-24 text-center">{dog.breed}</h1>
                <h1 className="w-24 text-2xl font-extrabold">{dog.votes}</h1>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};
export default Leaderboard;
