import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { knex } from '../database'
import { randomUUID } from 'node:crypto'


export async function messageRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    const createTransactionBodySchema = z.object({
      username: z.string(),
      text: z.string(),
      channel: z.string()
    })

    const { username, text, channel } = createTransactionBodySchema.parse(
      request.body,
    )

    await knex('messages').insert({
      id: randomUUID(),
      username,
      text,
      channel
    })
    
    return reply.status(201).send()
  })

}
