const findMatch = async () => {
  const req = await fetch(`http://${process.env.VERCEL_URL}/api/dogs`);
  const res = await req.json();

  const dogIds: Array<string> = [];
  const dogBreeds: Array<string> = [];
  const dogUrls: Array<string> = [];

  res.map((url: string) => {
    dogIds.push(url.split("/").at(-1)!.slice(0, -4));
    dogBreeds.push(url.split("/").at(-2)!);
    dogUrls.push(url);
  });

  return { dogIds, dogBreeds, dogUrls };
};

export default findMatch;
