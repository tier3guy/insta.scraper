import { NextApiRequest } from "next";

export const POST = (request: NextApiRequest) => {
  const { url } = request.body;
  console.log(url);
};
