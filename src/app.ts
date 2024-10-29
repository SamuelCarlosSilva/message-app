import fastify from 'fastify'

import {messageRoutes} from './routes/messages'  
export const app = fastify()


app.register(messageRoutes, {
    prefix: 'messages',
  })



