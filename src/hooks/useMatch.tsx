const useMatch = async () => {
  const req = await fetch("http://localhost:3000/api/dogs");
  const res = await req.json();

  let dogIds: Array<string> = [];
  let dogBreeds: Array<string> = [];
  let dogUrls: Array<string> = [];

  res.map((url: string) => {
    dogIds.push(url.split("/").at(-1)!.slice(0, -4));
    dogBreeds.push(url.split("/").at(-2)!);
    dogUrls.push(url);
  });

  return { dogIds, dogBreeds, dogUrls };
};

export default useMatch;
