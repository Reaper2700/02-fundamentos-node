import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdExist(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const sessionId = request.cookies.sessionId

  if (!sessionId) {
    return reply.status(401).send({
      error: 'unauthorized',
    })
  }
}

export async function AdminCheck(request: FastifyRequest, reply: FastifyReply) {
  const { sessionId } = request.cookies

  if (sessionId !== '5003bfca-7adb-4bd3-a1e8-b2a8f0f2980e') {
    return reply.status(403).send({ error: 'Acesso negado' })
  }
}
