import { type NextPage } from "next";
import { trpc } from "../utils/trpc";
import Head from "next/head";

const Leaderboard: NextPage = () => {
  const data = trpc.dog.all.useQuery();

  return (
    <>
      <Head>
        <title>Leaderboard</title>
        <meta name="description" content="See the leaderboard of all dogs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col">
        <ul className="flex flex-col gap-12 p-12">
          <h1 className="text-4xl font-extrabold">Leaderboard</h1>
          {!data.data && <h1 className="flex justify-center">Loading...</h1>}
          {data.data?.map((dog) => {
            return (
              <li
                key={dog.id}
                className="flex h-64 items-center justify-between rounded"
              >
                <img src={dog.url} className="h-44 w-44 object-cover" />
                <h1 className="w-96 text-center">{dog.breed}</h1>
                <h1># of votes: {dog.votes}</h1>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};
export default Leaderboard;
