import prisma from "../../../lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export async function POST(req: Request) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return new Response(
      JSON.stringify({ message: "You aren't authorization" }),
      { status: 401 },
    );
  }

  const data = await req.json();

  if (
    !data?.name ||
    !data?.description ||
    !data?.amountSets ||
    !data?.amountRets ||
    !data?.link
  ) {
    return new Response(JSON.stringify({ message: "Body isn't full" }), {
      status: 404,
    });
  }

  await prisma.workout.create({
    data: {
      name: String(data.name),
      link: String(data.link),
      idUser: user.id,
      description: String(data.description),
      amountRets: String(data.amountRets),
      amountSets: String(data.amountSets),
    },
  });

  const workouts = await prisma.workout.findMany();
  return new Response(JSON.stringify(workouts), { status: 200 });
}

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("search");
  if (!query) {
    const workouts = await prisma.workout.findMany();
    return new Response(JSON.stringify(workouts), { status: 200 });
  } else {
    const workouts = await prisma.workout.findMany({
      where: { name: { contains: String(query), mode: "insensitive" } },
    });
    return new Response(JSON.stringify(workouts), { status: 200 });
  }
}
