-- CreateTable
CREATE TABLE "Equipo" (
    "id" SERIAL NOT NULL,
    "hostname" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,
    "cpu" DOUBLE PRECISION NOT NULL,
    "ram" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Equipo_pkey" PRIMARY KEY ("id")
);
