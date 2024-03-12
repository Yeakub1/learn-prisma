import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // create single data
  // const result = await prisma.post.create({
  //   data: {
  //     title: "This is a Title 3",
  //     content: "This is a Content 2",
  //     authorName: "Name Nay 2",
  //   },
  // });
  //   console.log(result)

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "title 1",
        content: "This content 1",
        authorName: "Yeakub",
      },
      {
        title: "title 2",
        content: "This content 2",
        authorName: "Sayan",
      },
      {
        title: "title 3",
        content: "This content 3",
        authorName: "Anik",
      },
      {
        title: "title 4",
        content: "This content 4",
        authorName: "robin",
      },
      {
        title: "title 5",
        content: "This content 5",
        authorName: "korim",
      },
    ],
  });

  console.log(createMany);
};

main();
