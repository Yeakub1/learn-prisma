import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // find all
  // const getAllFormDB = await prisma.post.findMany();

  // // find frist and find or throw error
  // const findFrist = await prisma.post.findFirstOrThrow({
  //   where: {
  //     published: false,
  //   },
  // });

  // find unique and or throw error
  const findUnick = await prisma.post.findUniqueOrThrow({
    where: {
      id: 34,
    },
    select: {
      title: true,
      authorName: true,
    },
  });
  console.log({ findUnick });
};

main();
