import { type NextApiRequest, type NextApiResponse } from "next";

const dogs = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await fetch("https://dog.ceo/api/breeds/image/random/2");
  const response = await data.json();

  res.status(200).json(response.message);
};

export default dogs;
