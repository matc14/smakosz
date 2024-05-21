-- CreateTable
CREATE TABLE "Basket" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Basket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BasketToDish" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Basket_userId_key" ON "Basket"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_BasketToDish_AB_unique" ON "_BasketToDish"("A", "B");

-- CreateIndex
CREATE INDEX "_BasketToDish_B_index" ON "_BasketToDish"("B");

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BasketToDish" ADD CONSTRAINT "_BasketToDish_A_fkey" FOREIGN KEY ("A") REFERENCES "Basket"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BasketToDish" ADD CONSTRAINT "_BasketToDish_B_fkey" FOREIGN KEY ("B") REFERENCES "Dish"("id") ON DELETE CASCADE ON UPDATE CASCADE;
