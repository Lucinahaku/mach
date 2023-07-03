-- CreateTable
CREATE TABLE "EqualUser" (
    "User_ID" SERIAL NOT NULL,
    "Face_img" TEXT,
    "Name" TEXT NOT NULL,
    "Address" TEXT NOT NULL,
    "Birthday" TIMESTAMP(3) NOT NULL,
    "Mail" TEXT NOT NULL,
    "Pass" TEXT NOT NULL,
    "Age" INTEGER NOT NULL,
    "Job" TEXT,
    "Hobby" TEXT,
    "Intro" TEXT,
    "SID" INTEGER,

    CONSTRAINT "EqualUser_pkey" PRIMARY KEY ("User_ID")
);

-- CreateTable
CREATE TABLE "Key" (
    "Key_ID" SERIAL NOT NULL,
    "User_ID" INTEGER NOT NULL,
    "Cipher" TEXT NOT NULL,
    "DeCipher" TEXT NOT NULL,

    CONSTRAINT "Key_pkey" PRIMARY KEY ("Key_ID")
);

-- CreateTable
CREATE TABLE "Sex" (
    "Sex_ID" SERIAL NOT NULL,
    "User_ID" INTEGER NOT NULL,
    "Body_Sex" INTEGER NOT NULL,
    "Heart_Sex" INTEGER NOT NULL,
    "Like_Sex" INTEGER NOT NULL,

    CONSTRAINT "Sex_pkey" PRIMARY KEY ("Sex_ID")
);

-- CreateTable
CREATE TABLE "Matching" (
    "Matching_ID" SERIAL NOT NULL,
    "Matching_User_ID" INTEGER NOT NULL,
    "Matching_opponent_User_ID" INTEGER NOT NULL,
    "Matching_Bool" INTEGER NOT NULL,

    CONSTRAINT "Matching_pkey" PRIMARY KEY ("Matching_ID")
);

-- CreateTable
CREATE TABLE "Talk" (
    "Matching_Talk_ID" SERIAL NOT NULL,
    "Matching_ID" INTEGER NOT NULL,
    "Matching_Talk_Content" TEXT NOT NULL,
    "User_ID" INTEGER NOT NULL,

    CONSTRAINT "Talk_pkey" PRIMARY KEY ("Matching_Talk_ID")
);

-- CreateTable
CREATE TABLE "Assessment" (
    "Assessment_ID" SERIAL NOT NULL,
    "User_ID" INTEGER NOT NULL,
    "Matching_ID" INTEGER NOT NULL,
    "Matching_User_Assessment" INTEGER,
    "Matching_Opponent_User_Assessment" INTEGER,

    CONSTRAINT "Assessment_pkey" PRIMARY KEY ("Assessment_ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "EqualUser_Mail_key" ON "EqualUser"("Mail");

-- AddForeignKey
ALTER TABLE "Key" ADD CONSTRAINT "Key_User_ID_fkey" FOREIGN KEY ("User_ID") REFERENCES "EqualUser"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sex" ADD CONSTRAINT "Sex_User_ID_fkey" FOREIGN KEY ("User_ID") REFERENCES "EqualUser"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matching" ADD CONSTRAINT "Matching_Matching_User_ID_fkey" FOREIGN KEY ("Matching_User_ID") REFERENCES "EqualUser"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matching" ADD CONSTRAINT "Matching_Matching_opponent_User_ID_fkey" FOREIGN KEY ("Matching_opponent_User_ID") REFERENCES "EqualUser"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Talk" ADD CONSTRAINT "Talk_Matching_ID_fkey" FOREIGN KEY ("Matching_ID") REFERENCES "Matching"("Matching_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Talk" ADD CONSTRAINT "Talk_User_ID_fkey" FOREIGN KEY ("User_ID") REFERENCES "EqualUser"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_User_ID_fkey" FOREIGN KEY ("User_ID") REFERENCES "EqualUser"("User_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_Matching_ID_fkey" FOREIGN KEY ("Matching_ID") REFERENCES "Matching"("Matching_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
