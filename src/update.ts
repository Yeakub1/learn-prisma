import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  // const singleUpdate = await prisma.post.update({
  //   where: {
  //     id: 20,
  //   },
  //   data: {
  //     title: "Title 220",
  //     //   content: "Content 20",
  //     //   authorName: "Tumi aso tumi nay",
  //   },
  // });
  // console.log(singleUpdate)

  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       title: "title 2",
  //     },
  //     data: {
  //      published: true
  //     },
  //   });
  //   console.log(updateMany);

  const upsertUpdate = await prisma.post.upsert({
    where: {
      id: 34,
    },
    update: {
      title: "title name is update",
      content: "first content",
      authorName: "robiul islam",
    },
    create: {
      title: "for this title",
      content: "first content",
      authorName: "robiul islam",
    },
  });
  console.log(upsertUpdate);
};

updates();
