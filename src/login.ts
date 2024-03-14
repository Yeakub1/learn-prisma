import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log("Query", e.query);
  console.log("Duration", e.duration);
  console.log("Date and Time", e.timestamp);
});

const loginWithPrisma = async () => {
  const getAllFromDB = await prisma.post.findMany();
  //   console.log(getAllFromDB);
};

loginWithPrisma();
