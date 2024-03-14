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
  //   const orFiltaring = await prisma.post.findMany({
  //     where: {
  //       OR: [
  //         {
  //           title: {
  //             contains: "Title",
  //           },
  //         },
  //         {
  //           published: true,
  //         },
  //       ],
  //     },
  //   });
  //   console.log(orFiltaring);

  // not filtaring
  //   const notFiltarign = await prisma.post.findMany({
  //     where: {
  //       NOT: [
  //         {
  //           title: {
  //             contains: "this",
  //           },
  //         },
  //       ],
  //     },
  //   });
  //   console.log("Not Filtaring", notFiltarign);

  const startWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "s",
      },
    },
  });
  console.log(startWith);
};
filtaring();
