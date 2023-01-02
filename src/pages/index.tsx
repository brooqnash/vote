import {
  type NextPage,
  type GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import Link from "next/link";
import useMatch from "../hooks/useMatch";

const Home: NextPage = ({
  data,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Introduction</title>
        <meta
          name="description"
          content="Vote for the best dog along with the rest of the world."
        />
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
            <button className="IndexBtn border border-White bg-Black">
              SEE ALL
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await useMatch();

  return { props: { data } };
};

export default Home;
