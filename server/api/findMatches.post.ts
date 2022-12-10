import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async event => {
    let { id } = await readBody(event)
    id = parseInt(id)
    return await prisma.extendedMatches.findMany({
        where: {
            OR: [
                {
                    away_team_id: id
                },
                {
                    home_team_id: id
                }
            ]
        }
        
    })
})