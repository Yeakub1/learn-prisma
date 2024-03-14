import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationaQuery = async () => {
  // fluent api
  const result = await prisma.user
    .findUnique({
      where: {
        id: 1,
      },
    })
    .porfile();
  console.log(result);
};

relationaQuery();
