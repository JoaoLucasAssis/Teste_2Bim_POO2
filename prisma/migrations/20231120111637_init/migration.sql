/*
  Warnings:

  - The primary key for the `Leilao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Lance` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Leilao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "produto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "dataLimite" DATETIME NOT NULL,
    "donoId" INTEGER NOT NULL,
    "listaLances" TEXT NOT NULL,
    CONSTRAINT "Leilao_donoId_fkey" FOREIGN KEY ("donoId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Leilao" ("dataLimite", "donoId", "id", "listaLances", "preco", "produto") SELECT "dataLimite", "donoId", "id", "listaLances", "preco", "produto" FROM "Leilao";
DROP TABLE "Leilao";
ALTER TABLE "new_Leilao" RENAME TO "Leilao";
CREATE TABLE "new_Lance" (
    "compradorId" INTEGER NOT NULL,
    "leilaoId" TEXT NOT NULL,
    "valor" REAL NOT NULL,

    PRIMARY KEY ("compradorId", "leilaoId"),
    CONSTRAINT "Lance_compradorId_fkey" FOREIGN KEY ("compradorId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_leilaoId_fkey" FOREIGN KEY ("leilaoId") REFERENCES "Leilao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Lance" ("compradorId", "leilaoId", "valor") SELECT "compradorId", "leilaoId", "valor" FROM "Lance";
DROP TABLE "Lance";
ALTER TABLE "new_Lance" RENAME TO "Lance";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
