import { type tDoubleDog } from "./tDog";

const findMatch = async () => {
  const req = await fetch(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/dogs`
  );
  const res = await req.json();

  const ids: Array<string> = [];
  const breeds: Array<string> = [];
  const urls: Array<string> = [];

  res.map((url: string) => {
    ids.push(url.split("/").at(-1)!.slice(0, -4));
    breeds.push(url.split("/").at(-2)!);
    urls.push(url);
  });

  return { ids, breeds, urls } as tDoubleDog;
};

export default findMatch;
