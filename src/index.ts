import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
//   const result = await prisma.post.create({
//     data: {
//       title: "This is a Title 3",
//       content: "This is a Content 2",
//       authorName: "Name Nay 2",
//     },
//   });
    //     console.log(result)
    
    const getAllFormDB = await prisma.post.findMany();
    console.log(getAllFormDB)
};

main();
