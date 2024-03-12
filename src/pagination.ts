import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const pagination = async () => {
  //   off set pagination
  //   const offSetData = await prisma.post.findMany({
  //     skip: 5,
  //     take: 2,
  //   });

  //   console.log("offset paginate data:", offSetData);

  // cursor base paginate
  const cursorData = await prisma.post.findMany({
    skip: 5,
    take: 2,
    cursor: {
      id: 40,
    },
  });

  //   console.log("cursor base paginate data:", cursorData);

  const shortedData = await prisma.post.findMany({
    orderBy: {
      title: "asc",
    },
    where: {
      title: "title 1",
    },
  });
  console.log(shortedData);
};

pagination();
