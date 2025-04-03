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
  const { adminId } = request.cookies

  if (adminId !== 'Reaper270') {
    return reply.status(403).send({ error: 'Acesso negado' })
  }
}
