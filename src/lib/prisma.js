import { PrismaClient } from '@prisma/client'

const prisma = global.__prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query'] : []
})

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prismaInstance
}

if (process.env.NODE_ENV !== 'production') {
  global.__prisma = prismaInstance
}

export default prisma