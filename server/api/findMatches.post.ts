import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async event => {
    let { name } = await readBody(event)
    return await prisma.extendedMatches.findMany({
        orderBy: {
            id: 'asc'
        },
        where: {
            OR: [
                {
                    away_team_name: name
                },
                {
                    home_team_name: name
                }
            ]
        }
        
    })
})