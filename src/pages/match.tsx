import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  type NextPage,
} from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { trpc } from "../utils/trpc";
import findMatch from "../utils/findMatch";
import Head from "next/head";
import Image from "next/image";

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
        <div className="relative">
          <Image
            alt="Dog Image"
            src={data.dogUrls[0]}
            onClick={() =>
              handleChoice({
                id: data.dogIds[0],
                breed: data.dogBreeds[0],
                url: data.dogUrls[0],
              })
            }
            width="1000"
            height="1000"
            className="MatchImg"
          />
          <div className="MatchImgCaption">
            <span>🐶</span>
            <p className="MatchImgCaptionTitle">{data.dogBreeds[0]}</p>
            <span>🐶</span>
          </div>
        </div>
        <div className="relative">
          <Image
            alt="Dog Image"
            src={data.dogUrls[1]}
            onClick={() =>
              handleChoice({
                id: data.dogIds[1],
                breed: data.dogBreeds[1],
                url: data.dogUrls[1],
              })
            }
            width="1000"
            height="1000"
            className="MatchImg"
          />
          <div className="MatchImgCaption">
            <span>🐶</span>
            <p className="MatchImgCaptionTitle">{data.dogBreeds[1]}</p>
            <span>🐶</span>
          </div>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await findMatch();
  return { props: { data } };
};

export default Match;
