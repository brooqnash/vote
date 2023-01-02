import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  type NextPage,
} from "next";
import Head from "next/head";
import useMatch from "../hooks/useMatch";

const Match: NextPage = ({
  data,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Match</title>
        <meta name="description" content="Match-up between two dogs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="Match">
        <section className="flex flex-col items-center justify-center gap-8">
          <h1>{data.dogBreeds[0]}</h1>
          <img src={data.dogUrls[0]} className="MatchImg" />
          <button className="MatchBtn bg-White text-Black">This One!</button>
        </section>
        <p>VS</p>
        <section className="flex flex-col items-center justify-center gap-8">
          <h1>{data.dogBreeds[1]}</h1>
          <img src={data.dogUrls[1]} className="MatchImg" />
          <button className="MatchBtn bg-White text-Black">This One!</button>
        </section>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await useMatch();

  return { props: { data } };
};

export default Match;
