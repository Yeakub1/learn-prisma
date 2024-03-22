import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const InteractiveTreansation = async () => {
  const result = await prisma.$transaction(async (transactionClient) => {
    // query 1
    const getAll = await transactionClient.post.findMany({
      where: {
        published: true,
      },
    });

    // query 2
    const userCoutn = await transactionClient.user.count();

    // query 3
    const updateUser = await transactionClient.user.update({
      where: {
        id: 8,
      },
      data: {
        age: 45,
      },
    });
    return {
      getAll,
      userCoutn,
      updateUser,
    };
  });
  console.log(result);
};

InteractiveTreansation();
