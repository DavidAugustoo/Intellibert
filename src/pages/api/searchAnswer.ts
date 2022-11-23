import { NextApiRequest, NextApiResponse } from 'next'
import { api } from '../../service/axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { data } = await api.post('/', {
    context: req.body.context,
    question: req.body.question,
  })

  return res.status(200).json(data)
}
