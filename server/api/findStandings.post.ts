import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async event => {
    const { group } = await readBody(event)

    return await prisma.standings.findMany({where: {group}})
})
