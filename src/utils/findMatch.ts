import { type tDoubleDog } from "./tDog";

const findMatch = async () => {
  const req = await fetch(
    `http://${process.env.VERCEL_URL || "localhost:3000"}/api/dogs`
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
