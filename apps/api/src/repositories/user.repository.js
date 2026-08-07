const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UserRepository {
  async findByEmail(email) {
    return await prisma.user.findUnique({ where: { email } });
  }

  async findById(id) {
    return await prisma.user.findUnique({
      where: { id },
      select: { id: true, name: true, email: true, createdAt: true }
    });
  }

  async create(data) {
    return await prisma.user.create({
      data,
      select: { id: true, name: true, email: true, createdAt: true }
    });
  }
}

module.exports = new UserRepository();