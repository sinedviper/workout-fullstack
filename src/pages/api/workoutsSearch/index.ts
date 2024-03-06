import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { query } = req;

  if (!query?.search) {
    res.status(404).json({ message: "Enter search text" });
  }
  console.log(query?.search);
  const workouts = await prisma.workout.findMany({
    where: { name: { contains: String(query?.search) } },
  });
  res.status(200).json(workouts);
}
