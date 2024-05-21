-- CreateTable
CREATE TABLE "Opinion" (
    "id" SERIAL NOT NULL,
    "authorId" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Opinion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Opinion" ADD CONSTRAINT "Opinion_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
