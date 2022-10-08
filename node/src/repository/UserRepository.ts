import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserRepository {
  async create(): Promise<string> {
    try {
      await prisma.user.create({
        data: {},
      });
      await prisma.$disconnect();
      return JSON.stringify({
        message: 'succeeded',
      });
    } catch (e) {
      return JSON.stringify({
        message: e,
      });
    }
  }

  async read(): Promise<string> {
    try {
      const result = await prisma.user.findMany({});
      await prisma.$disconnect();
      return JSON.stringify({
        message: result,
      });
    } catch (e) {
      return JSON.stringify({
        message: e,
      });
    }
  }
}
