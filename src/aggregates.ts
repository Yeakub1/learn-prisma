import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {
  // find aggregates age
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });
  // console.log(avgAge);

  // find sub age
  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });
  // console.log(sumAge);

  //  find cound of age fildes
  const count = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });
  console.log(count);

  // find number of recods

  const countData = await prisma.user.count();

  // console.log(countData);

  //  find max age
  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });
  console.log(maxAge);

  //  find max age
  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });
  console.log(minAge);
};

aggregates();
