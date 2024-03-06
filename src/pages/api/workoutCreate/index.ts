import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { body } = req;
  const data = JSON.parse(body);
  if (
    !data?.name ||
    !data?.description ||
    !data?.amountSets ||
    !data?.amountRets ||
    !data?.link
  ) {
    res.status(400).json({ message: "Body isn't full" });
  }

  await prisma.workout.create({
    data: {
      name: String(data.name),
      link: String(data.link),
      description: String(data.description),
      amountRets: String(data.amountRets),
      amountSets: String(data.amountSets),
    },
  });

  const workout = await prisma.workout.findMany();
  res.status(200).json(workout);
}
