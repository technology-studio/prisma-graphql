/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date: 2021-07-10T10:07:13+02:00
 * @Copyright: Technology Studio
**/

import type {
  PrismaClient,
} from '@prisma/client'

export interface Context {
  prisma: PrismaClient,
  request: {
    headers: Record<string, string | string[] | undefined>,
  },
}
