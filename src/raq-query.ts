import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rowQuery = async () => {
  const posts = await prisma.$queryRaw`SELECT * FROM "post"`;

  console.log(posts);
};

rowQuery();
