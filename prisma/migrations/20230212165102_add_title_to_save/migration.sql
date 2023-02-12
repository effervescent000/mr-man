-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Save" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL DEFAULT 'Untitled',
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Save_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Save" ("active", "id", "userId") SELECT "active", "id", "userId" FROM "Save";
DROP TABLE "Save";
ALTER TABLE "new_Save" RENAME TO "Save";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
