import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  type NextPage,
} from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { trpc } from "../utils/trpc";
import useMatch from "../hooks/useMatch";
import Head from "next/head";

type Dog = {
  id: string;
  breed: string;
  url: string;
};

const Match: NextPage = ({
  data,
}: InferGetServerSidePropsType<GetServerSideProps>) => {
  const router = useRouter();
  const [chosenDog, setChosenDog] = useState<Dog>({
    id: "",
    breed: "",
    url: "",
  });

  const createDog = trpc.dog.create.useMutation();
  const incrementDog = trpc.dog.increment.useMutation();

  const findDog = trpc.dog.find.useQuery(
    { id: chosenDog.id },
    { refetchOnWindowFocus: false, enabled: false }
  );

  const handleChoice = async ({ id, breed, url }: Dog) => {
    setChosenDog({ id, breed, url });
    if ((await findDog.refetch()).data) {
      await incrementDog.mutateAsync({ id });
    } else {
      await createDog.mutateAsync({ id, breed, url });
    }
    router.replace(router.asPath);
  };

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
          <button
            onClick={() =>
              handleChoice({
                id: data.dogIds[0],
                breed: data.dogBreeds[0],
                url: data.dogUrls[0],
              })
            }
            className="MatchBtn bg-White text-Black"
          >
            This One!
          </button>
        </section>
        <p>VS</p>
        <section className="flex flex-col items-center justify-center gap-8">
          <h1>{data.dogBreeds[1]}</h1>
          <img src={data.dogUrls[1]} className="MatchImg" />
          <button
            onClick={() =>
              handleChoice({
                id: data.dogIds[1],
                breed: data.dogBreeds[1],
                url: data.dogUrls[1],
              })
            }
            className="MatchBtn bg-White text-Black"
          >
            This One!
          </button>
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
