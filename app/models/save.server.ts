import type { Save } from "@prisma/client";
import { prisma } from "~/db.server";

export const getActiveSaveByUserId = async (userId: Save["userId"]) =>
  prisma.save.findFirst({
    where: {
      AND: {
        userId,
        active: true,
      },
    },
  });

export const getUserSaves = async (userId?: number) => {
  if (!userId) return [];
  return prisma.save.findMany({
    where: {
      userId,
    },
  });
};

export const createSave = async ({
  title,
  userId,
}: {
  title?: string;
  userId: number;
}) => {
  return await prisma.save.create({ data: { title, userId } });
};
