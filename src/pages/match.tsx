import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { trpc } from "../utils/trpc";
import { type tSingleDog, type tDoubleDog } from "../utils/tDog";
import findMatch from "../utils/findMatch";
import Head from "next/head";
import Image from "next/image";

const Match: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<tDoubleDog>();
  const [chosenDog, setChosenDog] = useState<tSingleDog>({
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

  useEffect(() => {
    (async () => {
      const req = await findMatch();
      setData(req);
    })();
  }, []);

  const handleChoice = async ({ id, breed, url }: tSingleDog) => {
    setChosenDog({ id, breed, url });
    if ((await findDog.refetch()).data) {
      await incrementDog.mutateAsync({ id });
    } else {
      await createDog.mutateAsync({ id, breed, url });
    }
    router.replace(router.asPath);
  };

  if (!data) return <h1 className="Match">Loading...</h1>;
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
            src={data.urls[0]!}
            onClick={() =>
              handleChoice({
                id: data.ids[0]!,
                breed: data.breeds[0]!,
                url: data.urls[0]!,
              })
            }
            width="1000"
            height="1000"
            priority
            className="MatchImg"
          />
          <div className="MatchImgCaption">
            <span>🐶</span>
            <p className="MatchImgCaptionTitle">{data.breeds[0]}</p>
            <span>🐶</span>
          </div>
        </div>
        <div className="relative">
          <Image
            alt="Dog Image"
            src={data.urls[1]!}
            onClick={() =>
              handleChoice({
                id: data.ids[1]!,
                breed: data.breeds[1]!,
                url: data.urls[1]!,
              })
            }
            width="1000"
            height="1000"
            priority
            className="MatchImg"
          />
          <div className="MatchImgCaption">
            <span>🐶</span>
            <p className="MatchImgCaptionTitle">{data.breeds[1]}</p>
            <span>🐶</span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Match;
