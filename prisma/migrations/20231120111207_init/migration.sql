/*
  Warnings:

  - A unique constraint covering the columns `[donoId]` on the table `Leilao` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Lance_compradorId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Leilao_donoId_key" ON "Leilao"("donoId");
