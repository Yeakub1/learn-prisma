import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const creatUser = prisma.user.create({
    data: {
      username: "korim",
      email: "korim@gmail.com",
      age: 23,
    },
  });

  const updateUser = prisma.user.update({
    where: {
      id: 4,
    },
    data: {
      age: 45,
    },
  });

  const [userData, updatetData] = await prisma.$transaction([
    creatUser,
    updateUser,
  ]);

  console.log(userData, updatetData);
};

batchTransaction();
