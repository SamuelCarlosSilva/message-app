import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    messages: {
      username: string
      text: string
      time: string
      channel: string
    }
  }
}
