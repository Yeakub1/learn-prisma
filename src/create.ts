import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "sayan",
  //     email: "sayan@gmail.com",
  //     role: UserRole.user,
  //   },
  // });
  // console.log(createUser);

  // const createProfile = await prisma.porfile.create({
  //   data: {
  //     bio: "I am full stack developer",
  //     userId: 1,
  //   },
  // });
  // console.log(createProfile);

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "CSE",
  //   },
  // });
  // console.log(createCategory);

  const createPost = await prisma.post.create({
    data: {
      title: "This is a first Title",
      content: "This is content of the post",
      authorId: 1,
      PostCategory: {
        create: {
          category: {
            connect: {
              id: 1,
            },
          },
        },
      },
    },
    include: {
      PostCategory: true,
    },
  });
  console.log(createPost);
};

main();
