/*
  Warnings:

  - You are about to drop the `Basket` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BasketToDish` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Basket" DROP CONSTRAINT "Basket_userId_fkey";

-- DropForeignKey
ALTER TABLE "_BasketToDish" DROP CONSTRAINT "_BasketToDish_A_fkey";

-- DropForeignKey
ALTER TABLE "_BasketToDish" DROP CONSTRAINT "_BasketToDish_B_fkey";

-- DropTable
DROP TABLE "Basket";

-- DropTable
DROP TABLE "_BasketToDish";

-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "dishId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
