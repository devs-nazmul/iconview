-- CreateTable
CREATE TABLE "CustomImage" (
    "id" TEXT NOT NULL,
    "image" BYTEA NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "CustomImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CustomImage_id_key" ON "CustomImage"("id");

-- AddForeignKey
ALTER TABLE "CustomImage" ADD CONSTRAINT "CustomImage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
