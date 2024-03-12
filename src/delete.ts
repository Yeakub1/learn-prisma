import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const DeleteData = async () => {
  // single delete
  // const singleDele = await prisma.post.delete({
  //     where: {
  //         id: 5
  //     }
  // })
  // console.log(singleDele);

  // many data delete
  //   const manyDelete = await prisma.post.deleteMany({
  //     where: {
  //       published: false,
  //     },
  //   });
  //   console.log(manyDelete);

  // all data delete
  const allDelete = await prisma.post.deleteMany({});
  console.log(allDelete);
};

DeleteData();
