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

  //   const startWith = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         startsWith: "s",
  //       },
  //     },
  //   });
  //     console.log(startWith);

  // end width
  const endWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "s",
      },
    },
  });
  // console.log("endWit", endWith);

  // equals
  const equals = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "yakub@gmail.com",
      },
    },
  });
  // console.log("equeal", equals);

  const userNameArray = ["user1", "user2", "user3"];
  const userNameByArray = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });
  // console.log("user Name by array", userNameByArray);

  const inDepthData = await prisma.user.findUnique({
    where: {
      id: 3,
    },
    include: {
      post: {
        include: {
          PostCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });

  console.dir(inDepthData, { depth: Infinity });
};
filtaring();
