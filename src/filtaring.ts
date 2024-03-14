import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const filtaring = async () => {
  // and filtaring
  const andFiltaring = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "Title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  //     console.log(andFiltaring);

  // or filtaring
  const orFiltaring = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "Title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  console.log(orFiltaring);
};
filtaring();
